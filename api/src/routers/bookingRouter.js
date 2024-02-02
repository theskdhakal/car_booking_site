import express from "express";
import {
  addBooking,
  getBookings,
  getBookingsByUserId,
  updateBooking,
} from "../models/booking/BookingModel.js";
import { updateCars } from "../models/car/CarModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log(req.body);

    const dueDate = new Date();

    dueDate.setDate(dueDate.getDate() + req.body.bookingDays);

    req.body.dueDate = dueDate;

    //create new booking details in db
    const result = await addBooking(req.body);

    if (result?._id) {
      //make car not available and give due Date

      const update = await updateCars(req.body.carId, {
        isAvailable: false,
        dueDate,
      });

      if (update?._id) {
        return res.json({
          status: "success",
          message: "Redirecting to Checkout",
        });
      }
    }

    return res.json({
      status: "error",
      message: "Unable to Book car at the moment , Please try again later",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.patch("/", async (req, res) => {
  try {
    const { bookingId, carId, isReturned } = req.body;
    //update booking table

    const obj = {
      dueDate: null,
      isReturned,
    };

    const updateBookinghistory = await updateBooking(bookingId, obj);

    //update car
    if (updateBookinghistory?._id) {
      const updateCar = await updateCars(
        carId,
        { dueDate: null, isAvailable: isReturned },
        { new: true }
      );

      if (updateCar?._id) {
        return res.json({
          status: "success",
          message: "Car status has been updated",
        });
      }
    }

    res.json({
      status: "error",
      message: "Unable to return the car",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const { role, _id } = req.body.userInfo;
    const userId = _id;
    console.log(userId);

    const bookingHistory =
      role === "admin"
        ? await getBookings()
        : await getBookingsByUserId(userId);

    res.json({
      status: "success",
      message: "burrowList",
      bookingHistory,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});
export default router;
