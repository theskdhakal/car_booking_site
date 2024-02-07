import React from "react";

import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setPopupShow } from "./popUpSlice";

const PopUp = ({ children }) => {
  const dispatch = useDispatch();
  const { popupShow } = useSelector((state) => state.popupshow);

  const handleOnClose = () => {
    dispatch(setPopupShow(false));
    console.log("a");
  };

  return (
    <>
      {/* background overlay */}
      {popupShow && (
        <div
          className="fixed inset-0 bg-black w-full opacity-50 "
          onClick={handleOnClose}
        />
      )}

      {/* popup */}
      {popupShow && (
        <div
          id="default-modal"
          aria-hidden="true"
          className="fixed inset-0 flex items-center  justify-center  "
        >
          <div className="relative bg-white w-full sm:w-1/2  p-5 rounded shadow-lg border  bg-gray-300">
            <button onClick={handleOnClose}>
              <RxCross2
                className=" absolute top-1 right-1 p-2 cursor-pointer bg-red-700"
                size={30}
              />
            </button>
            {/* Your modal content goes here */}
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;
