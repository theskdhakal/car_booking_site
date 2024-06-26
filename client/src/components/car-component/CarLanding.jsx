import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Reviewbox from "../review/Reviewbox";

import { MainLayout } from "../mainLayout/MainLayout";
import { addNewBookingAction } from "../../pages/booking-history/bookingAction";
import Rating from "../review/Rating";
import { setPayment } from "../../pages/checkout/paymentSlice";

const CarLanding = () => {
  const { _id } = useParams();
  const { cars } = useSelector((state) => state.carInfo);
  const { user } = useSelector((state) => state.userInfo);
  const { reviews } = useSelector((state) => state.reviewInfo);

  const selectedCar = cars.find((item) => item._id === _id) || {};

  const [bookingDays, setBookingDays] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { title } = selectedCar;

  if (!title) {
    return navigate("/");
  }

  const filteredReviews = reviews.filter((item) => item.carId === _id);

  const AverageRating =
    filteredReviews.reduce((acc, item) => acc + +item.rating, 0) /
    filteredReviews.length;
  console.log(AverageRating);

  const handleOnChange = (e) => {
    setBookingDays(e.target.value.trim());
  };

  const handleOnBook = () => {
    if (!bookingDays) {
      return window.alert("Please provide valid booking days");
    }
    console.log(bookingDays);

    const obj = {
      carId: _id,
      carName: selectedCar?.title,
      userId: user?._id,
      userName: user?.fName,
      userRole: user?.role,
      image: selectedCar?.image,
      bookingDays: parseInt(bookingDays, 10),
    };

    if (window.confirm("Are you sure you want to book this car")) {
      dispatch(addNewBookingAction(obj))
        .then((result) => {
          if (result.status === "success") {
            // Booking was successful, navigate to success page

            navigate("/checkout");
            dispatch(setPayment(selectedCar?.price));
          } else {
            // Booking failed, handle error if needed
            console.error("Booking failed:", result.message);
          }
        })
        .catch((error) => {
          // Handle the error from the action if needed
          console.error("Booking action failed:", error);
        });
    }
  };

  return (
    <MainLayout>
      <div className="car-landing mx-5">
        <div className="top bg-gray-200 p-4">
          <Link to="/" className="text-blue-500 hover:underline">
            Home
          </Link>
          <span className="text-gray-500"> &gt; </span>
          <Link to="/Fleet" className="text-blue-500 hover:underline">
            Fleet
          </Link>
          <span className="text-gray-500"> &gt; </span>
          <span className="text-gray-700">{selectedCar?.title}</span>
        </div>
        <div className="middle mt-5  space-y-5 sm:space-x-8 sm:flex">
          <div className="left">
            <img
              src={selectedCar?.image}
              alt={selectedCar?.title}
              className="rounded-lg"
            />
          </div>
          <div className="right">
            <h1 className="text-3xl font-bold mb-2">{selectedCar?.title}</h1>
            <p className="text-gray-600 mb-4">{selectedCar?.description}</p>
            <div className="flex items-center mb-4">
              <p className="font-bold text-blue-500">
                ${selectedCar?.price}/day
              </p>
              <span className="mx-4">|</span>
              <p className="font-bold text-amber-500">
                <Rating num={AverageRating} />
              </p>
            </div>

            {user?._id ? (
              <>
                <div className="select-days">
                  <label className="block text-sm font-medium text-slate-500 mb-1">
                    Booking for (days):
                  </label>
                  <input
                    type="number"
                    name="bookingDays"
                    min="1"
                    placeholder="7"
                    className="border rounded-md p-2 text-blue-500 w-16"
                    onChange={handleOnChange}
                    value={bookingDays}
                    required
                  />
                </div>

                {selectedCar?.isAvailable ? (
                  <button
                    className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
                    onClick={handleOnBook}
                  >
                    Book Now
                  </button>
                ) : (
                  <button
                    className="bg-black text-white py-2 px-4 rounded mt-4"
                    onClick={handleOnBook}
                    disabled
                  >
                    Available from :{selectedCar?.dueDate?.slice(0, 10)}
                  </button>
                )}
              </>
            ) : (
              <button
                className="cursor-not-allowed text-white bg-gray-700 p-2  rounded"
                disabled
              >
                Please log in to Book
              </button>
            )}
          </div>
        </div>

        <div className="bottom mt-5">
          <hr className="my-5" />
          <h1 className="text-2xl font-bold mb-4 ">Reviews</h1>
          {filteredReviews.map((item, i) => (
            <Reviewbox key={i} {...item} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default CarLanding;
