import mongoose from "mongoose";

const pwdResetSchema = new mongoose.Schema({
  fName: {
    type: String,
  },
  email: {
    type: String,
  },
  resetToken: {
    type: String,
  },
});

export default mongoose.model("pwdReset", pwdResetSchema);
