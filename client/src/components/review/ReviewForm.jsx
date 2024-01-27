import React from "react";
import CustomInput from "../custom-input/CustomInput";
import { useSelector } from "react-redux";

const ReviewForm = ({ selectedBooking }) => {
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
  return (
    <div>
      <h1 className="text-center underline mb-2">
        Review for :
        <span className="text-amber-700">{selectedBooking.carName} </span>
      </h1>
      <form className="border shadow-lg p-3  ">
        <CustomInput
          label="Title"
          name="review-title"
          placeholder="Your review title"
        />
        <label className="block mb-2">Feedback</label>
        <textarea
          key="1"
          name="feedback"
          type="textarea"
          required=""
          className="border border-gray-500 rounded px-3 py-2 w-full"
          placeholder="your feedback"
          rows="3"
        ></textarea>

        <div className="d-grid">
          <button className="bg-cyan-500 w-full py-1">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
