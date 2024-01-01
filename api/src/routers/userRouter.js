import express from "express";
import { insertUser } from "../models/user/UserModel.js";

const router = express.Router();

router.get("/", (req, res) => {
  try {
    console.log(req.body);

    res.json({
      status: "success",
      message: "Here are the user informations",
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const user = await insertUser(req.body);

    res.json({
      status: "success",
      message: "New user has been created successfully",
      user,
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
