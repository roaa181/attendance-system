import mongoose from "mongoose";
import bcrypt from "bcrypt";

const employeeSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: { type: String, unique: true },
  password: String,
  role: {
    type: String,
    enum: ["employee", "security"],
    default: "employee"
  },
  cardNumber: String,
  qr_code: String,
  photo: String
});

employeeSchema.pre("save", async function(next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

employeeSchema.methods.comparePassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;
