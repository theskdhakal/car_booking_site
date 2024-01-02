import express from "express";
import { insertUser } from "../models/user/UserModel.js";
import { hashPassword } from "../utils/bcrypt.js";

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
    const { password } = req.body;

    req.body.password = hashPassword(password);

    const user = await insertUser(req.body);

    user?._id
      ? res.json({
          status: "success",
          message: "New user has been created successfully",
        })
      : res.json({
          status: "error",
          message: "unable to create user, please try again later",
        });
  } catch (error) {
    let msg = error.message;

    if (msg.includes("E11000 duplicate key error")) {
      msg = "Email is already in Use";
    }

    res.json({
      status: "error",
      message: msg,
    });
  }
});

export default router;
