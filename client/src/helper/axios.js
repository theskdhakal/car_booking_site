import axios from "axios";

const rootAPI =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:8000";

const userAPI = rootAPI + "/api/v1/user";

const carAPI = rootAPI + "/api/v1/car";

const bookingAPI = rootAPI + "/api/v1/booking";

const reviewAPI = rootAPI + "/api/v1/review";

const paymentAPI = rootAPI + "/api/v1/payment";

const getUserIdFromLocalStorage = () => {
  const str = localStorage.getItem("persist:userInfo");

  if (str) {
    const userInfo = JSON.parse(str);

    if (userInfo.user) {
      const user = JSON.parse(userInfo.user);

      return user?._id;
    }
  }

  return null;
};

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

export const getAllUsers = async () => {
  try {
    const resp = await axios.get(userAPI, {
      headers: {
        Authorization: getUserIdFromLocalStorage(),
      },
    });

    return resp.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const updateUser = async (data) => {
  try {
    const resp = await axios.patch(userAPI, data, {
      headers: {
        Authorization: getUserIdFromLocalStorage(),
      },
    });

    return resp.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const verifyUser = async (verifiedCode, email, mode) => {
  try {
    const resp = await axios.get(
      userAPI + `/verify?c=${verifiedCode}&&e=${email}&&mode=${mode}`
    );
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const pwdReset = async (email) => {
  try {
    const resp = await axios.post(userAPI + "/pwdReset", email);

    return resp.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const updatePassword = async (newObj) => {
  try {
    const resp = await axios.post(userAPI + "/update-password", newObj);

    return resp.data;
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
        Authorization: getUserIdFromLocalStorage(),
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

export const getCar = async () => {
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
        Authorization: getUserIdFromLocalStorage(),
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
    const resp = await axios.delete(carAPI + "/" + _id, {
      headers: {
        Authorization: getUserIdFromLocalStorage(),
      },
    });

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
    const resp = await axios.post(bookingAPI, obj, {
      headers: {
        Authorization: getUserIdFromLocalStorage(),
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

export const returnBooking = async (obj) => {
  console.log(obj);
  try {
    const resp = await axios.patch(bookingAPI, obj, {
      headers: {
        Authorization: getUserIdFromLocalStorage(),
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

export const fetchBookingHistory = async () => {
  try {
    const resp = await axios.get(bookingAPI, {
      headers: {
        Authorization: getUserIdFromLocalStorage(),
      },
    });

    return resp.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

// ******************review*********************
export const postReview = async (obj) => {
  console.log(obj);
  try {
    const resp = await axios.post(reviewAPI, obj, {
      headers: {
        Authorization: getUserIdFromLocalStorage(),
      },
    });

    return resp.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const getReview = async () => {
  try {
    const resp = await axios.get(reviewAPI);
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

// *****************payment***************************

export const postPayment = async (paymentObj) => {
  try {
    const resp = await axios.post(
      paymentAPI + "/create-payment-intent",
      paymentObj,
      {
        headers: {
          Authorization: getUserIdFromLocalStorage(),
        },
      }
    );
    console.log("why", resp.data);
    return resp.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
