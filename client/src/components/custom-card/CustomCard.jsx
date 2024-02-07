import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Rating from "../review/Rating";

const CustomCard = ({ image, _id, title, price }) => {
  const { reviews } = useSelector((state) => state.reviewInfo);

  console.log(image, _id, title, price);

  const filteredReviews = reviews.filter((item) => item.carId === _id);

  const AverageRating =
    filteredReviews.reduce((acc, item) => acc + +item.rating, 0) /
    filteredReviews.length;
  console.log(AverageRating);

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
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
              {title}
            </h5>
          </div>
          <div className="flex items-center mt-2.5 mb-5">
            <div className="  text-lg font-semibold px-2.5 py-0.5 rounded ">
              <Rating num={AverageRating || 0} />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900 ">
              ${price}/day
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
