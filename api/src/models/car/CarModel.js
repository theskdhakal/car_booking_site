import CarSchema from "./CarSchema.js";

export const addCar = (obj) => {
  return CarSchema(obj).save();
};

export const getCars = () => {
  return CarSchema.find();
};
export const updateCars = (carId, data) => {
  return CarSchema.findByIdAndUpdate(carId, data);
};

export const deleteCars = (_id) => {
  return CarSchema.findByIdAndDelete(_id);
};
