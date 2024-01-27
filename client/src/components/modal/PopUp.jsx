// PopUp.js
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
    <div id="default-modal" aria-hidden="true" className="bg-red-500 ">
      <div className="bg-white p-1 rounded shadow-lg">
        <button onClick={() => handleOnClose()}>
          <RxCross2 className=" p-2 cursor-pointer " size={30} />
        </button>
        {/* Your modal content goes here */}
        {children}
      </div>
    </div>
  );
};

export default PopUp;
