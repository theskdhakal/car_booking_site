import express from "express";
import {
  getAllUsers,
  getUserByEmail,
  insertUser,
  updateUserProfile,
} from "../models/user/UserModel.js";
import { comparePassword, hashPassword } from "../utils/bcrypt.js";
import { adminAuth, auth } from "../middelware/authMiddleware.js";
import { v4 } from "uuid";
import { accountVerificationEmail } from "../utils/nodeMailer.js";

const router = express.Router();

router.get("/", auth, adminAuth, async (req, res) => {
  try {
    const users = await getAllUsers();

    if (users) {
      res.json({
        status: "success",
        message: "Here are the user informations",
        users,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const { password } = req.body;

    req.body.password = hashPassword(password);

    const user = await insertUser(req.body);
    console.log(user);

    //send account verification email

    const uuid = v4();
    if (user?._id) {
      const link = `${process.env.WEB_DOMAIN}user-verification?c=${uuid}&&e=${user.email}`;
      const status = await accountVerificationEmail(user, link);
      res.json({
        status: "success",
        message: "New user has been created successfully",
      });
      return;
    }

    res.json({
      status: "error",
      message: "unable to create user, please try again later",
    });
  } catch (error) {
    let msg = error.message;
    console.log(msg);

    if (msg.includes("E11000 duplicate key error")) {
      msg = "Email is already in Use";
    }

    res.json({
      status: "error",
      message: msg,
    });
  }
});

router.post("/signin", async (req, res) => {
  console.log(req.body);
  try {
    //destructure the email and pwd
    const { email, password } = req.body;

    console.log(password);

    //find if user with email is registered
    const user = await getUserByEmail(email);

    if (!user) {
      return res.json({
        status: "error",
        message: "User not found",
      });
    }

    //check if pwd is correct (use bcrypt )
    const isMatch = comparePassword(password, user.password);

    console.log(isMatch);

    if (isMatch) {
      user.password = undefined;

      return res.json({
        status: "success",
        message: "Logged in successfully",
        user,
      });
    }
    res.json({
      status: "error",
      message: "Invalid Credentials",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.patch("/", auth, async (req, res) => {
  try {
    const { authorization } = req.headers;
    const _id = authorization;

    const updatedUser = await updateUserProfile(_id, req.body);
    console.log(updatedUser);

    updatedUser
      ? res.json({
          status: "success",
          message: "Your Profile",
          updatedUser,
        })
      : res.json({
          status: "error",
          message: "unable to update your profile, please try again later",
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
