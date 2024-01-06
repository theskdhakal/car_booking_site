import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../pages/signup-signIn/userSlice";
import { persistor } from "../../store";
import { MdLogout } from "react-icons/md";

export const UserLayout = ({ children }) => {
  const { user } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  const handleOnSignOut = () => {
    //remove from persist

    persistor.purge().then(() => {
      console.log("signed Out");
    });

    //remove user from redux
    dispatch(setUser({}));
  };
  return (
    <div>
      <Header />
      <div className="flex">
        <div className="left-menu bg-primary text-white text-center w-1/6">
          {user?.role?.toUpperCase()}
          <hr />
          <ul className=" flex flex-col items-start mt-5 pl-12  space-y-5">
            <li>
              <Link to="/car-directory">Car-directory</Link>
            </li>

            <li>
              <Link to="/user">Users</Link>
            </li>

            <li>
              <Link to="/signin">Profile</Link>
            </li>

            <li>
              <Link to="/booking-history">Booking History</Link>
            </li>

            <li>
              <Link
                to="/signin"
                className="text-red-300 flex justify-center  rounded"
                onClick={handleOnSignOut}
              >
                <span className="pt-1">
                  <MdLogout />
                </span>{" "}
                Logout
              </Link>
            </li>
          </ul>
        </div>

        <div className="right-page w-full">
          <div className=" main ">{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
