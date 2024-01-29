import { postReview } from "../../helper/axios";
import { toast } from "react-hot-toast";
import { fetchBookingHistoryAction } from "../../pages/booking-history/bookingAction";
import { setPopupShow } from "../modal/popUpSlice";

export const postReviewAction = (obj) => async (dispatch) => {
  const { status, message } = await postReview(obj);

  toast[status](message);

  if (status === "success") {
    dispatch(setPopupShow(false));
    dispatch(fetchBookingHistoryAction());
  }
};
