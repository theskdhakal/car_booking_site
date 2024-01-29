import React from "react";
import Rating from "./Rating";

const Reviewbox = ({ ...item }) => {
  console.log(item);
  return (
    <div className="shadow-md flex space-x-8 mt-3 py-3 px-1">
      <div className="username rounded-full bg-cyan-200 p-5 flex  items-center">
        <p>{item?.userName}</p>
      </div>
      <div className="feedback">
        <h1>{item?.title}</h1>
        <p>
          <Rating num={item?.rating} />
        </p>
        <p>{item?.feedback}</p>
      </div>
    </div>
  );
};

export default Reviewbox;
