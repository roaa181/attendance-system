import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
  employee_id: { type: mongoose.Schema.Types.ObjectId, ref: "Employee", required: true },
  plate_number: { type: String, required: true, unique: true },
  // plate_photo: String,  
  created_at: { type: Date, default: Date.now }
});

export default mongoose.model("Vehicle", vehicleSchema);
