import express from "express";
import {
  getAllUsers,
  getUserByEmail,
  getUserByEmailandCode,
  insertUser,
  updateByEmail,
  updateUserProfile,
} from "../models/user/UserModel.js";
import { comparePassword, hashPassword } from "../utils/bcrypt.js";
import { adminAuth, auth } from "../middelware/authMiddleware.js";
import { v4 } from "uuid";
import {
  accountVerificationEmail,
  sendPasswordResetLink,
} from "../utils/nodeMailer.js";
import {
  getUserByPwdResetCode,
  insertToken,
} from "../models/session/PwdResetModel.js";

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

    const uuid = v4();

    const newUser = { ...req.body, verificationCode: uuid };

    const user = await insertUser(newUser);
    console.log(user);

    //send account verification email

    if (user?._id) {
      const link = `${process.env.WEB_DOMAIN}verify?c=${user.verificationCode}&&e=${user.email}&&mode=userVerification`;
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

router.get("/verify", async (req, res) => {
  try {
    const { c, e, mode } = req.query;

    let user;

    //validate verification code and email
    if (mode === "userVerification") {
      user = await getUserByEmailandCode({
        email: e,
        verificationCode: c,
      });
    }

    if (mode === "pwdReset") {
      user = await getUserByPwdResetCode({
        email: e,
        resetToken: c,
      });
    }

    if (user) {
      await updateUserProfile(user._id, { isVerified: true });

      return res.json({
        status: "success",
        message: "Account verified Successful",
        context: mode === "pwdReset" ? "pwdReset" : "user-verification",
      });
    } else {
      return res.json({
        status: "error",
        message: "Unable to verify account",
      });
    }
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
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

    if (!user.isVerified) {
      return res.json({
        status: "error",
        message: "Account not verified",
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

router.post("/pwdReset", async (req, res) => {
  try {
    const { email, fName } = req.body;

    const uuid = v4();

    const isUserAvailable = await getUserByEmail(email);

    if (!isUserAvailable) {
      res.json({
        status: "error",
        message: "User not found with this email",
      });
      return;
    }

    const newUser = { email, fName, resetToken: uuid };

    const user = await insertToken(newUser);

    if (user?._id) {
      const link = `${process.env.WEB_DOMAIN}verify?c=${user.resetToken}&&e=${user.email}&&mode=pwdReset`;
      const status = await sendPasswordResetLink(user, link);
      res.json({
        status: "success",
        message: "Password reset link sent. Please Check Your email...",
      });
      return;
    }

    res.json({
      status: "error",
      message: "unable to reset password, please try again later",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.post("/update-password", async (req, res) => {
  try {
    const { password, email } = req.body;

    req.body.password = hashPassword(password);

    console;

    //updating the user's password in the db
    const result = await updateByEmail(
      { email },
      { password: req.body.password }
    );

    result
      ? res.json({
          status: "success",
          message: "Password has beeen reset",
        })
      : res.json({
          status: "error",
          messgae: "Unable to update password",
        });
  } catch (error) {
    res.json({
      status: "error",
      messgae: error.message,
    });
  }
});
export default router;
