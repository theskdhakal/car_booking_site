import React, { useState } from "react";
import CustomInput from "../custom-input/CustomInput";

import { CiStar } from "react-icons/ci";

const ReviewForm = ({ selectedBooking }) => {
  const [formData, setFormData] = useState({
    star: "2",
  });

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

    console.log(formData);
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
          name="review-title"
          placeholder="Your review title"
          onChange={handleOnChange}
        />

        <label className="block mt-2">Rating</label>
        <div className="text-lg flex mb-2">
          <input
            onChange={handleOnChange}
            value="1"
            type="radio"
            name="star"
            id="s1"
          />
          <label htmlFor="s1">
            <CiStar />
          </label>
          <input
            onChange={handleOnChange}
            value="2"
            type="radio"
            name="star"
            id="s2"
          />
          <label htmlFor="s2">
            <CiStar />
          </label>
          <input
            onChange={handleOnChange}
            value="3"
            type="radio"
            name="star"
            id="s3"
          />
          <label htmlFor="s3">
            <CiStar />
          </label>
          <input
            onChange={handleOnChange}
            value="4"
            type="radio"
            name="star"
            id="s4"
          />
          <label htmlFor="s4">
            <CiStar />
          </label>
          <input
            onChange={handleOnChange}
            value="5"
            type="radio"
            name="star"
            id="s5"
          />
          <label htmlFor="s5">
            <CiStar />
          </label>
        </div>

        <label className="block mb-2">Feedback</label>
        <textarea
          key="1"
          name="feedback"
          type="textarea"
          required=""
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
