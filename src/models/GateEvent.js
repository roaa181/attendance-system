import mongoose from "mongoose";

const gateEventSchema = new mongoose.Schema({
  vehicle_id: { type: mongoose.Schema.Types.ObjectId, ref: "Vehicle", required: false },
  plate_number_detected: String,
  action: { type: String, enum: ["open", "denied"], required: true },
  method: { type: String, enum: ["car_plate", "manual_by_guard"], required: true },
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model("GateEvent", gateEventSchema);
