// PopUp.js
import React from "react";
import EditCarForm from "../car-component/EditCarForm";
import { MdCancel } from "react-icons/md";

const PopUp = ({ isVisible, onClose, carId }) => {
  const handleOnClick = () => {
    onClose();
  };
  return (
    <div
      id="default-modal"
      aria-hidden="true"
      className={`${
        isVisible ? "" : "hidden"
      } overflow-y-auto overflow-x-hidden fixed w-3/4 mx-auto my-11 top-1/2 right-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-1 bg-white rounded shadow-lg max-w-full`}
    >
      <div className="absolute  top-0 right-0 p-2 cursor-pointer">
        <MdCancel size={20} onClick={handleOnClick} />
      </div>
      <div className="bg-white p-1 rounded shadow-lg">
        {/* Your modal content goes here */}
        <EditCarForm carId={carId} />
      </div>
    </div>
  );
};

export default PopUp;
