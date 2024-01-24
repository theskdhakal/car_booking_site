import { getUserById } from "../models/user/UserModel.js";

export const auth = async (req, res, next) => {
  try {
    //every request have userId
    const { authorization } = req.headers;
    console.log(authorization);

    //get the user from db
    const user = await getUserById(authorization);
    // console.log(user);

    if (user?._id) {
      //check the role
      user.password = undefined;

      req.body.userInfo = user;
      //let it go to next router

      return next();
    }

    //or
    //stop here and response to client
    res.json({
      status: "error",
      message: "!! You do not have permission to this api",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
};

export const adminAuth = async (req, res, next) => {
  console.log(req.userInfo);
  try {
    const { role } = req.userInfo;
    console.log(role);

    role === "admin"
      ? next()
      : res.status(403).json({
          status: "error",
          message: "Please login as admin for access",
        });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
};
