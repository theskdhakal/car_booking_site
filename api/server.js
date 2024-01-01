import dotenv from "dotenv";
dotenv.config();

import express from "express";
import morgan from "morgan";

const app = express();
const PORT = process.env.PORT || 8000;

//connect database
import connectMongoDB from "./src/config/mongoConfig.js";
connectMongoDB();

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//APIs
import userRouter from "./src/routers/userRouter.js";

app.use("/api/v1/user", userRouter);

// server
app.use("/", (req, res) => {
  res.json({
    status: "success",
    message: "Server running",
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error.messgae)
    : console.log(`Server is running in port: ${PORT}`);
});
