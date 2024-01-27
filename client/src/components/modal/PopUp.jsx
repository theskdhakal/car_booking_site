import React from "react";

import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { setPopupShow } from "./popUpSlice";

const PopUp = ({ children }) => {
  const dispatch = useDispatch();

  const handleOnClose = () => {
    dispatch(setPopupShow(false));
  };

  console.log("Rendering PopUp");

  return (
    <div
      id="default-modal"
      aria-hidden="true"
      className="fixed inset-0 flex items-center  justify-center z-50 "
    >
      <div className="relative bg-white w-1/2  p-5 rounded shadow-lg border  bg-gray-300">
        <button onClick={() => handleOnClose()}>
          <RxCross2
            className=" absolute top-1 right-1 p-2 cursor-pointer bg-red-700"
            size={30}
          />
        </button>
        {/* Your modal content goes here */}
        {children}
      </div>
    </div>
  );
};

export default PopUp;
