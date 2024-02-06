import PwdResetSchema from "./PwdResetSchema.js";

export const insertToken = (obj) => {
  return PwdResetSchema(obj).save();
};

export const getUserByPwdResetCode = ({ email, resetToken }) => {
  return PwdResetSchema.findOne({ email, resetToken });
};
