import { getAllUsers, loginUser } from "../../helper/axios";
import toast from "react-hot-toast";
import { setUser, setUsers } from "./userSlice";

export const signInAction = (userData) => async (dispatch) => {
  const { status, message, user } = await loginUser(userData);
  toast[status](message);

  user?._id && dispatch(setUser(user));
};

export const getAllUserAction = () => async (dispatch) => {
  const { status, message, users } = await getAllUsers();

  {
    status === "success" && dispatch(setUsers(users));
  }
};
