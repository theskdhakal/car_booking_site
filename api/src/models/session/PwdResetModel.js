import PwdResetSchema from "./PwdResetSchema.js";

export const insertToken = (obj) => {
  return PwdResetSchema(obj).save();
};
