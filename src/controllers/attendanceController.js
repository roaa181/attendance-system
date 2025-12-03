import Attendance from "../models/Attendance.js";
import Employee from "../models/Employee.js";

export const createAttendance = async (req, res) => {
  try {
    const { cardNumber, method, deviceId } = req.body;

    const employee = await Employee.findOne({ cardNumber });
    if (!employee) return res.status(404).json({ status: "denied", message: "Employee not found" });

    const lastRecord = await Attendance.findOne({ employee: employee._id }).sort({ timestamp: -1 });
    let action = "checkin";
    if (lastRecord && lastRecord.action === "checkin") action = "checkout";

    const record = await Attendance.create({ employee: employee._id, action, method, deviceId, status: "success" });

    res.json({ message: "Attendance recorded", data: record });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
