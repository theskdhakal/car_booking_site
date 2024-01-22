import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  status: {
    type: String,
    required: true,
    default: "Available",
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
  },

  image: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  dueDate: {
    type: Date,
    default: null,
  },
});

export default mongoose.model("car", carSchema); //books
