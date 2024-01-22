import toast from "react-hot-toast";
import { postBooking } from "../../helper/axios";
import { fetchCarAction } from "../car-directory/CarAction";

// *********booking section *****************
export const addNewBookingAction = (obj) => async (dispatch) => {
  const { status, message } = await postBooking(obj);
  console.log(status, message);

  toast[status](message);

  //fetch user booking
  if (status === "success") {
    dispatch(fetchCarAction());
  }
};
