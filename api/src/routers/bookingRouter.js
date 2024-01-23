import express from "express";
import { addBooking } from "../models/booking/BookingModel.js";
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
          message: "Your car has been booked",
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

router.get("/", (req, res) => {
  try {
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});
export default router;
