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

  const fullStarArray = new Array(fullRateStar).fill("");
  const noStarArray = new Array(noRateStar).fill("");

  return (
    <div className="flex text-amber-500">
      {fullStarArray.map(() => (
        <FaStar />
      ))}

      {hasDecimalValue > 0 && <FaStarHalfAlt />}

      {noStarArray.map(() => (
        <FaRegStar />
      ))}
    </div>
  );
};

export default Rating;
