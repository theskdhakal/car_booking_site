import express from "express";
import {
  addCar,
  deleteCars,
  getCars,
  updateCars,
} from "../models/car/CarModel.js";
import { upload } from "../middelware/multerMiddleware.js";
import uploadFile from "../utils/s3Bucket.js";
import { adminAuth, auth } from "../middelware/authMiddleware.js";

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

router.put("/", auth, adminAuth, upload.single("image"), async (req, res) => {
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

router.delete("/:_id", auth, adminAuth, async (req, res) => {
  try {
    const { _id } = req.params;

    const deletedCar = await deleteCars(_id);

    deletedCar
      ? res.json({
          status: "success",
          message: "Selected Car has been removed from table",
        })
      : res.json({
          status: "error",
          message: "Unable to delete the car",
        });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

export default router;
