import axios from "axios";

const rootAPI = "http://localhost:8000";

const userAPI = rootAPI + "/api/v1/user";

const carAPI = rootAPI + "/api/v1/car";

// ******************user*********************

export const postUser = async (data) => {
  try {
    const resp = await axios.post(userAPI, data);
    console.log(resp);

    return resp.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const loginUser = async (userData) => {
  console.log(userData);
  try {
    const { data } = await axios.post(userAPI + "/signin", userData);

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

// **************car****************
export const postCar = async (obj) => {
  try {
    const resp = await axios.post(carAPI, obj);
    console.log(resp);

    return resp.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const getCar = async (obj) => {
  try {
    const resp = await axios.get(carAPI);

    return resp.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
