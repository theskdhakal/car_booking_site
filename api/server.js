import dotenv from "dotenv";
dotenv.config();

import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8000;

//connect database
import connectMongoDB from "./src/config/mongoConfig.js";
connectMongoDB();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//APIs
import userRouter from "./src/routers/userRouter.js";
import carRouter from "./src/routers/carRouter.js";
import bookingRouter from "./src/routers/bookingRouter.js";

app.use("/api/v1/user", userRouter);
app.use("/api/v1/car", carRouter);
app.use("/api/v1/booking", bookingRouter);

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
