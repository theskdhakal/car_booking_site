import React from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const Rating = ({ num }) => {
  const maxRateStar = 5;

  const hasDecimalValue = num % 1;

  const fullRateStar = Math.floor(num);

  const noRateStar =
    hasDecimalValue > 0
      ? maxRateStar - fullRateStar - 1
      : maxRateStar - fullRateStar;

  const fullStarArray = Array.from({ length: fullRateStar }, (_, index) => (
    <FaStar key={index} />
  ));

  const noStarArray = Array.from({ length: noRateStar }, (_, index) => (
    <FaRegStar key={index} />
  ));

  return (
    <div className="flex text-amber-500">
      {fullStarArray}
      {hasDecimalValue > 0 && <FaStarHalfAlt />}
      {noStarArray}
    </div>
  );
};

export default Rating;
