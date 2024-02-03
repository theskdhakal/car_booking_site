import React, { useState } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import { signUpInputs } from "../../components/input-fields/Inputfields";
import CustomInput from "../../components/custom-input/CustomInput";
import userimg from "../../asset/image/userimg.webp";
import { updateUserProfileAction } from "../signup-signIn/userAction";

const UserProfile = () => {
  const { user } = useSelector((state) => state.userInfo);
  const [form, setForm] = useState();
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    dispatch(updateUserProfileAction(form));
  };
  return (
    <UserLayout>
      <div className=" w-full lg:h-screen ">
        <div className="w-full mx-0 lg:mx-auto lg:p-5 shadow-lg rounded-lg">
          <div className="lg:flex mt-4 space-x-8">
            <div className="w-full lg:w-1/4  mt-2">
              <img
                src={userimg}
                alt="Profile Image"
                className="w-full rounded"
                // style={{ height: isMobile ? "250px" : "550px" }}
                style={{ height: "450px" }}
              />
            </div>

            <div className="w-full p-0 mt-5 lg:w-3/4 lg:pl-4">
              <h5 className="text-center text-xl font-semibold mb-4">
                Update Your Profile Information
              </h5>
              <hr />
              <form onSubmit={handleOnSubmit} className="p-2">
                {signUpInputs.slice(0, 4).map((item, i) => (
                  <CustomInput
                    key={i}
                    {...item}
                    className="mb-2 "
                    onChange={handleOnChange}
                  />
                ))}
                <button
                  type="submit"
                  className="w-full py-3 mt-6 font-semibold text-white uppercase bg-green-600 rounded-lg shadow-lg focus:outline-none hover:bg-orange-900"
                >
                  Update Profile
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default UserProfile;
