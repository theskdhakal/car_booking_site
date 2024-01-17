import express from "express";
import {
  addCar,
  deleteCars,
  getCars,
  updateCars,
} from "../models/car/CarModel.js";
import { upload } from "../middelware/multerMiddleware.js";
import uploadFile from "../utils/s3Bucket.js";

const router = express.Router();

router.post("/", upload.single("image"), async (req, res) => {
  try {
    if (req.file) {
      const { Location } = await uploadFile(req.file);

      req.body.image = Location;
    }

    const result = await addCar(req.body);

    req.body;
    console.log(result);

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

router.put("/", upload.single("image"), async (req, res) => {
  try {
    console.log(req.file);

    if (req.file) {
      const { Location } = await uploadFile(req.file);

      req.body.image = Location;
    }

    console.log(req.body);

    const { carId, ...rest } = req.body;

    const result = await updateCars(carId, req.body);

    req.body;
    console.log(result);

    result?._id
      ? res.json({
          status: "success",
          message: "Car Info has been Update",
        })
      : res.json({
          status: "Error",
          message: "Unable to update car, please try again later",
        });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.delete("/", async (req, res) => {
  console.log(req.body);
  try {
    const cars = await deleteCars();
    res.json({
      status: "success",
      message: "Selected Car has been removed from table",
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
