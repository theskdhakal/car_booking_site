import toast from "react-hot-toast";
import {
  fetchBookingHistory,
  postBooking,
  returnBooking,
} from "../../helper/axios";

import { fetchCarAction } from "../car-directory/CarAction";
import { setbookings } from "./bookingSlice";
import { setpayment } from "../checkout/paymentSlice";

// *********booking section *****************
export const addNewBookingAction = (obj) => async (dispatch) => {
  const { status, message } = await postBooking(obj);
  console.log(status, message);

  toast[status](message);

  //fetch user booking
  if (status === "success") {
    dispatch(fetchCarAction());
  }

  return { status, message };
};
export const fetchBookingHistoryAction = () => async (dispatch) => {
  const { status, message, bookingHistory } = await fetchBookingHistory();
  console.log(status, message);

  //fetch user booking
  if (status === "success") {
    dispatch(setbookings(bookingHistory));
  }
};

export const returnBookingAction = (obj) => async (dispatch) => {
  const { status, message } = await returnBooking(obj);
  toast[status](message);

  //fetch user booking
  if (status === "success") {
    dispatch(fetchBookingHistoryAction());
    dispatch(fetchCarAction());
  }
};
