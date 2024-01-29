import { getReview, postReview } from "../../helper/axios";
import { toast } from "react-hot-toast";
import { fetchBookingHistoryAction } from "../../pages/booking-history/bookingAction";
import { setPopupShow } from "../modal/popUpSlice";
import { setReviews } from "./reviewSlice";

export const postReviewAction = (obj) => async (dispatch) => {
  const { status, message, reviews } = await postReview(obj);

  toast[status](message);

  if (status === "success") {
    dispatch(setPopupShow(false));
    dispatch(fetchBookingHistoryAction());
    dispatch(fetchReviewAction());
  }
};

export const fetchReviewAction = () => async (dispatch) => {
  const { status, message, reviews } = await getReview();
  dispatch(setReviews(reviews));
};
