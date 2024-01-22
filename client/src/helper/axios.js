import axios from "axios";

const rootAPI = "http://localhost:8000";

const userAPI = rootAPI + "/api/v1/user";

const carAPI = rootAPI + "/api/v1/car";

const bookingAPI = rootAPI + "/api/v1/booking";

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
  console.log(obj);
  try {
    const resp = await axios.post(carAPI, obj, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
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

export const updateCar = async (obj) => {
  console.log(obj);
  try {
    const resp = await axios.put(carAPI, obj, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(resp);

    return resp.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const deleteCar = async (_id) => {
  try {
    const resp = await axios.delete(carAPI + "/" + _id);

    return resp.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

// **************booking ********************

export const postBooking = async (obj) => {
  console.log(obj);
  try {
    const resp = await axios.post(bookingAPI, obj, {});
    console.log(resp);

    return resp.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
