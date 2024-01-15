import React, { useState } from "react";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../asset/image/logo.png";
import ausflag from "../../asset/image/ausflag.png";
import usflag from "../../asset/image/usflag.jpg";
import { useSelector } from "react-redux";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.userInfo);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary w-full border-b py-0 md:border-1 md:static">
      <div className="items-center justify-between  px-1 max-w-screen-xl mx-auto flex lg:flex md:px-2">
        <div className="flex items-center justify-between py-0  ">
          <Link to="/">
            <img src={logo} width={121} alt="logo" />
          </Link>
        </div>
        <div>
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            <li>
              <button
                className="shadow-lg p-2 rounded bg-white flex"
                onClick={toggleDropdown}
              >
                currency
                <span className="pt-1">
                  {isOpen ? (
                    <MdOutlineArrowDropUp />
                  ) : (
                    <MdOutlineArrowDropDown />
                  )}
                </span>
              </button>

              {isOpen && (
                <div className="absolute   bg-gray-200 rounded">
                  <div className="py-2 px-4 flex">
                    <img src={ausflag} width="26px" /> AUD
                  </div>
                  <div className="py-2 px-4 flex">
                    {" "}
                    <img src={usflag} width="26px" /> AUD
                  </div>
                </div>
              )}
            </li>

            {user?._id ? (
              <h3 className="text-white bold">Welcome, {user.fName}</h3>
            ) : (
              <li className="shadow-lg p-2 rounded bg-white">
                <Link to="/signin">Manage Booking</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
