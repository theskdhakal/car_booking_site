import express from "express";
import { addCar, getCars } from "../models/car/CarModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log(req.body);

    const result = await addCar(req.body);

    result?._id
      ? res.json({
          status: "success",
          message: "New car has been added",
        })
      : res.json({
          status: "Error",
          message: "Unable to add car, please try again later",
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
    const cars = await getCars();
    res.json({
      status: "success",
      message: "Carlist has been fetched",
      cars,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

export default router;
