import toast from "react-hot-toast";
import { getCar, postCar } from "../../helper/axios";
import { setCars } from "./carSlice";

export const postNewCarAction = (carObj) => async (dispatch) => {
  const dataPending = postCar(carObj);

  toast.promise(dataPending, {
    pending: "please wait...",
  });

  const { status, message } = await dataPending;
  toast[status](message);

  if (status === "success") {
    dispatch(fetchBookAction());
  }
};

export const fetchBookAction = () => async (dispatch) => {
  const { status, message, cars } = await getCar();
  console.log(cars);

  if (status === "success") {
    dispatch(setCars(cars));
  }
};
