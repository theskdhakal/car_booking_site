import toast from "react-hot-toast";
import { deleteCar, getCar, postCar, updateCar } from "../../helper/axios";
import { setCars } from "./carSlice";

export const postNewCarAction = (carObj) => async (dispatch) => {
  const dataPending = postCar(carObj);

  toast.promise(dataPending, {
    pending: "please wait...",
  });

  const { status, message } = await dataPending;
  toast[status](message);

  if (status === "success") {
    dispatch(fetchCarAction());
  }
};

export const updateCarAction = (carObj) => async (dispatch) => {
  const dataPending = updateCar(carObj);

  toast.promise(dataPending, {
    pending: "please wait...",
  });

  const { status, message } = await dataPending;
  toast[status](message);

  if (status === "success") {
    dispatch(fetchCarAction());
  }
};

export const fetchCarAction = () => async (dispatch) => {
  const { status, message, cars } = await getCar();
  console.log(cars);

  if (status === "success") {
    dispatch(setCars(cars));
  }
};

export const deleteCarAction = (carId) => async (dispatch) => {
  if (!window.confirm("Are you sure you want to delete it?")) {
    return;
  }
  const { status, message } = await deleteCar(carId);
  toast[status](message);

  if (status === "success") {
    dispatch(fetchCarAction());
  }
};
