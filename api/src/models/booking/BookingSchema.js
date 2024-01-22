import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    carId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    carName: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    dueDate: {
      type: Date,
      required: true,
    },
    isReturned: {
      type: Boolean,
      default: false,
    },
    returnedDate: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Booking", bookingSchema); //booking
