import React from "react";

const Redirect = () => {
  return (
    <div
      className="flex items-center justify-center  bg-gray-100"
      style={{ height: "25vh" }}
    >
      <div className="p-6 bg-white rounded-md shadow-md">
        <h1 className="text-center text-gray-800">
          Please verify your email to login...
        </h1>
      </div>
    </div>
  );
};

export default Redirect;
