import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export const UserLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="flex">
        <div className="left-menu bg-primary text-white text-center w-1/6">
          you
          <hr />
        </div>

        <div className="right-page w-full">
          <div className=" main ">{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
