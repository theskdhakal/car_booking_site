import express from "express";
import { getUserByEmail, insertUser } from "../models/user/UserModel.js";
import { comparePassword, hashPassword } from "../utils/bcrypt.js";

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

router.post("/signin",async(req,res)=>{
  try {

    //destructure the email and pwd
   const {email,password}=req.body


   //find if user with email is registered
   const user=await getUserByEmail(email)


   //check if pwd is correct (use bcrypt )
   const isMatch=comparePassword(password, user.password)

   console.log(isMatch);
   
if(isMatch){
  user.password=undefined;

return res.json({
  status:"success",
  message:"Logged in successfully",
  user,
})
} 
res.json({
  status:"error",
  message:"Invalid Credentials",
    })
    
  } catch (error) {
    res.json({
      status:"error",
      message:error.message
    })
  }
})

export default router;
