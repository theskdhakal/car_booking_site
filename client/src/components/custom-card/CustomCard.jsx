import React from "react";
import { Link } from "react-router-dom";

const CustomCard = ({ image, _id, title, price }) => {
  return (
    <Link to={`/cars/${_id}`}>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
        <div>
          <img
            className="p-2 rounded-t-lg h-72"
            src={image}
            alt="product image"
          />
        </div>
        <div className="px-5 pb-5">
          <div>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </div>
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
              {price}
            </span>
            <div class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              view Details
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CustomCard;
