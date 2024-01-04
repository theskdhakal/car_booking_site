import { loginUser } from "../../helper/axios";
import toast from "react-hot-toast";
import { setUser } from "./userSlice";

export const signInAction = (userData) => async (dispatch) => {
  const { status, message, user } = await loginUser(userData);
  toast[status](message);

  user?._id && dispatch(setUser(user));
};
