import React from "react";
import { UserLayout } from "../layout/UserLayout";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CarLanding = () => {
  const { _id } = useParams();

  const { cars } = useSelector((state) => state.carInfo);
  const selectedCar = cars.find((item) => item._id === _id);

  return (
    <UserLayout>
      <div className="car-landing">
        <div className="top bg-gray-200 p-4">
          <Link to="/" className="text-blue-500 hover:underline">
            Home
          </Link>
          <span className="text-gray-500"> &gt; </span>
          <Link to="/Fleet" className="text-blue-500 hover:underline">
            Fleet
          </Link>
          <span className="text-gray-500"> &gt; </span>
          <span className="text-gray-700">{selectedCar.title}</span>
        </div>
        <div className="middle mt-5 flex space-x-8">
          <div className="left">
            <img
              src={selectedCar.image}
              alt={selectedCar.title}
              className="rounded-lg"
            />
          </div>
          <div className="right">
            <h1 className="text-3xl font-bold mb-2">{selectedCar.title}</h1>
            <p className="text-gray-600 mb-4">{selectedCar.description}</p>
            <div className="flex items-center mb-4">
              <p className="font-bold text-blue-500">
                ${selectedCar.price}/day
              </p>
              <span className="mx-4">|</span>
              <p className="font-bold text-amber-500">Rating</p>
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-green-600 hover:transform(0.8)">
              Book Now
            </button>
          </div>
        </div>

        <div className="bottom mt-5">
          <hr className="my-5" />
          <h1 className="text-2xl font-bold mb-4">Reviews</h1>
          {/* Add your reviews section here */}
        </div>
      </div>
    </UserLayout>
  );
};

export default CarLanding;
