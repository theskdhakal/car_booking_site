import express from "express";
import { auth } from "../middelware/authMiddleware.js      ";
import { addReview, getReviews } from "../models/review/ReviewModel.js";
import { updateBooking } from "../models/booking/BookingModel.js";

const router = express.Router();

router.post("/", auth, async (req, res) => {
  try {
    const { bookingId, rating } = req.body;

    const result = await addReview(req.body);

    if (result?._id) {
      //update booking history
      await updateBooking(bookingId, { rating: rating });

      return res.json({
        status: "success",
        message: "Your review has been posted",
      });
    } else {
      res.json({
        status: "error",
        message: "Something went wrong , please try again",
      });
    }
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const reviews = await getReviews();
    console.log(reviews);

    if (reviews) {
      return res.json({
        status: "success",
        message: "All reviews has been fetched",
        reviews,
      });
    }

    res.json({
      status: "error",
      message: "unable to fetch reviews, please try again",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

export default router;
