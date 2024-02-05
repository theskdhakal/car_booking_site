import UserSchema from "./UserSchema.js";

export const insertUser = (userObj) => {
  return UserSchema(userObj).save();
};

export const getUserByEmail = (email) => {
  return UserSchema.findOne({ email });
};

export const getUserById = (_id) => {
  return UserSchema.findById(_id);
};

export const getAllUsers = () => {
  return UserSchema.find();
};

export const updateUserProfile = (_id, updateData) => {
  return UserSchema.findByIdAndUpdate(_id, updateData, { new: true });
};
