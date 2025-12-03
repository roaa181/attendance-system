import mongoose from "mongoose";
import moment from "moment";

const attendanceSchema = new mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee", required: true },
  action: { type: String, enum: ["checkin", "checkout"], required: true },
  method: { type: String, enum: ["rfid", "qr", "face", "manual"], required: true },
  timestamp: { type: Date, default: Date.now },
  deviceId: String,
  status: { type: String, enum: ["success", "denied"], default: "success" }
}, { timestamps: true });

export default mongoose.model("Attendance", attendanceSchema);
