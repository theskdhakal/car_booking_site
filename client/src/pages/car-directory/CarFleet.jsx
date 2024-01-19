import React, { useState } from "react";
import { useSelector } from "react-redux";
import { UserLayout } from "../../components/layout/UserLayout";
import { Link } from "react-router-dom";

const CarFleet = () => {
  const { cars } = useSelector((state) => state.carInfo);

  const [display, setDisplay] = useState([]);

  const handleOnChange = (e) => {
    const { value } = e.target;
  };
  console.log(cars);
  return (
    <UserLayout>
      <h1 className="my-5 text-center underline text-red-600">
        Explore our Car Ranges
      </h1>

      <div className="search mt-5 mb-2 flex justify-end mr-3">
        <input type="search" width={50} className="border border-black" />
      </div>

      <hr />

      <div className="flex space-x-8 mt-5">
        {cars.map((car, i) => (
          <div
            className="w-full max-w-sm bg-primary border border-gray-200 rounded-lg shadow "
            key={i}
          >
            <Link to="#">
              <img
                className="p-8 rounded-t-lg"
                src={car.image}
                alt="product image"
              />
            </Link>
            <div className="px-5 pb-5">
              <Link to="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {car.title}
                </h5>
              </Link>
              <div className="flex items-center mt-2.5 mb-5">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  rating
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                  5.0
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  {car.price}
                </span>
                <Link
                  to="#"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </UserLayout>
  );
};

export default CarFleet;
