import CarSchema from "./CarSchema.js";

export const addCar = (obj) => {
  return CarSchema(obj).save();
};

export const getCars = () => {
  return CarSchema.find();
};
