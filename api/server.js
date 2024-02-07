import dotenv from "dotenv";
dotenv.config();

import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";

const app = express();
const PORT = process.env.PORT || 8000;

//connect database
import connectMongoDB from "./src/config/mongoConfig.js";
connectMongoDB();

//middlewares
auth;
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
// app.use(express.static("public"));

//APIs
import userRouter from "./src/routers/userRouter.js";
import carRouter from "./src/routers/carRouter.js";
import bookingRouter from "./src/routers/bookingRouter.js";
import reviewRouter from "./src/routers/reviewRouter.js";
import paymentRouter from "./src/routers/paymentRouter.js";
import { adminAuth, auth } from "./src/middelware/authMiddleware.js";

app.use("/api/v1/user", userRouter);
app.use("/api/v1/car", carRouter);
app.use("/api/v1/booking", auth, bookingRouter);
app.use("/api/v1/review", reviewRouter);
app.use("/api/v1/payment", auth, paymentRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/client/build")));

// server
app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.listen(PORT, (error) => {
  error
    ? console.log(error.messgae)
    : console.log(`Server is running in port: ${PORT}`);
});
