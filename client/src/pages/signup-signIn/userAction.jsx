import {
  getAllUsers,
  loginUser,
  pwdReset,
  updatePassword,
  updateUser,
} from "../../helper/axios";
import toast from "react-hot-toast";
import { setUser, setUsers } from "./userSlice";

export const signInAction = (userData) => async (dispatch) => {
  const { status, message, user } = await loginUser(userData);
  toast[status](message);

  user?._id && dispatch(setUser(user));
};

export const getAllUserAction = () => async (dispatch) => {
  const { status, message, users } = await getAllUsers();

  status === "success" && dispatch(setUsers(users));
};

export const updateUserProfileAction = (data) => async (dispatch) => {
  const { status, message, updatedUser } = await updateUser(data);

  toast[status](message);

  if (status === "success") {
    dispatch(getAllUserAction());
    dispatch(setUser(updatedUser));
  }
};

export const pwdResetAction = async (email) => {
  const result = await pwdReset(email);
  return result;
};

export const updatePasswordAction = async (newObj) => {
  const result = await updatePassword(newObj);
  console.log(result);
  return result;
};
