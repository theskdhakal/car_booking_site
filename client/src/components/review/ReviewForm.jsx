import React, { useState } from "react";
import CustomInput from "../custom-input/CustomInput";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { postReviewAction } from "./ReviewAction";
import { useDispatch } from "react-redux";

const ReviewForm = ({ selectedBooking }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    rating: "5",
  });

  const [selectRating, setSelectedRating] = useState("5");

  const ratings = [1, 2, 3, 4, 5];

  const ReviewInputs = [
    {
      label: "Title",
      name: "review-title",
      placeholder: "Your review title",
    },
    {
      label: "Feedback",
      name: "feedback",
      placeholder: "Your review description",
      type: "textarea",
    },
  ];

  const { _id, carId, carName, userId, userName } = selectedBooking;

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleStarClick = (rating) => {
    setFormData({ ...formData, rating: rating.toString() });

    setSelectedRating(rating.toString()); //updata rating state based on selected star
  };

  const handleOnReview = (e) => {
    e.preventDefault();

    const reviewObj = {
      bookingId: _id,
      carId,
      carName,
      userId,
      userName,
      ...formData,
    };

    dispatch(postReviewAction(reviewObj));
  };

  return (
    <div>
      <h1 className="text-center  mb-2 ">
        Review for :
        <span className="text-amber-700">{selectedBooking.carName} </span>
      </h1>
      <form className="border shadow-lg p-3  " onSubmit={handleOnReview}>
        <CustomInput
          label="Title"
          name="title"
          placeholder="Your review title"
          required
          onChange={handleOnChange}
        />

        <label className="block mt-2">Rating</label>
        <div className="text-lg flex mb-2">
          {ratings.map((rating) => (
            // <>
            //   <input
            //     onChange={() => {}}
            //     value={rating.toString()}
            //     type="radio"
            //     name="rating"
            //     id={`s${rating}`}
            //     required
            //     hidden
            //   />
            //   <label key={rating} htmlFor={`s${rating}`}>
            //     <CiStar
            //       onClick={() => handleOnStarClick(rating)}
            //       className={`cursor-pointer ${
            //         rating <= parseInt(selectRating)
            //           ? "text-amber-500"
            //           : "text-gray-300"
            //       }`}
            //     />
            //   </label>
            // </>
            <label key={rating} htmlFor={`s${rating}`}>
              <input
                onChange={() => handleStarClick(rating)}
                value={rating}
                type="radio"
                name="rating"
                id={`s${rating}`}
                required
                hidden
              />
              {rating <= formData.rating ? (
                <FaStar
                  onClick={() => handleStarClick(rating)}
                  className="cursor-pointer text-yellow-500"
                />
              ) : (
                <FaRegStar
                  onClick={() => handleStarClick(rating)}
                  className="cursor-pointer text-yellow-500"
                />
              )}
            </label>
          ))}
        </div>

        <label className="block mb-2">Feedback</label>
        <textarea
          key="1"
          name="feedback"
          type="textarea"
          required
          className="border border-gray-500 rounded px-3 py-2 w-full"
          placeholder="your feedback"
          rows="3"
          onChange={handleOnChange}
        ></textarea>

        <div className="d-grid">
          <button className="bg-cyan-500 w-full py-1" type="submit">
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
