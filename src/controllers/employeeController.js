import Employee from "../models/Employee.js";

export const assignCardToEmployee = async (req, res) => {
  try {
    const { employeeId, cardNumber } = req.body;

    if (!employeeId || !cardNumber) {
      return res.status(400).json({ message: "employeeId and cardNumber are required" });
    }

    // التأكد إن الكارت مش مستخدم قبل كده
    const existingCard = await Employee.findOne({ cardNumber });
    if (existingCard) {
      return res.status(400).json({ message: "This card is already assigned to another employee" });
    }

    // تحديث الموظف
    const updatedEmployee = await Employee.findByIdAndUpdate(
      employeeId,
      { cardNumber },
      { new: true }
    );

    if (!updatedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json({
      message: "Card assigned successfully",
      employee: updatedEmployee
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
