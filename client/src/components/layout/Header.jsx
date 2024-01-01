import React from "react";

import { Link } from "react-router-dom";
import logo from "../../asset/image/logo.png";

const Header = () => {
  return (
    <nav className="bg-gradient-to-r from-[#110a02] via=[#5e440b] to-[#b18115] w-full border-b py-0 md:border-1 md:static">
      <div className="items-center justify-between  px-4 max-w-screen-xl mx-auto flex lg:flex md:px-8">
        <div className="flex items-center justify-between py-0  ">
          <img src={logo} width={121} alt="Float UI logo" />
        </div>
        <div>
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            <li>
              <Link to="/signup">Sign-Up</Link>
            </li>
            <li>
              <Link to="/signin">Sign-In</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
