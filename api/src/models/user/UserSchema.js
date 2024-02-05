import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
    default: "client",
  },
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: 1,
  },
  password: {
    type: String,
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  verificationCode: {
    type: String,
    required: true,
  },
});

export default mongoose.model("user", userSchema); //users
