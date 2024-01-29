import React, { useState } from "react";
import CustomInput from "../custom-input/CustomInput";

import { CiStar } from "react-icons/ci";
import { postReviewAction } from "./ReviewAction";
import { useDispatch } from "react-redux";

const ReviewForm = ({ selectedBooking }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    rating: "5",
  });

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
      <h1 className="text-center  mb-2">
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
            <>
              <input
                onChange={handleOnChange}
                value={rating.toString()}
                type="radio"
                name="rating"
                id={`s${rating}`}
                required
              />
              <label htmlFor={`s${rating}`}>
                <CiStar />
              </label>
            </>
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
