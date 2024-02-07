import React, { useEffect, useState } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import { signUpInputs } from "../../components/input-fields/Inputfields";
import CustomInput from "../../components/custom-input/CustomInput";
import userimg from "../../asset/image/userimg.webp";
import { updateUserProfileAction } from "../signup-signIn/userAction";

const UserProfile = () => {
  const { user } = useSelector((state) => state.userInfo);
  console.log(user);

  const [form, setForm] = useState();
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    setForm(user);
  }, [user]);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    dispatch(updateUserProfileAction(form));
  };
  return (
    <UserLayout>
      <div className=" w-full lg:h-screen ">
        <div className="w-full mx-0 lg:mx-auto lg:p-5 shadow-lg rounded-lg">
          <div className="lg:flex mt-4 sm:space-x-8">
            <div className="w-full lg:w-1/4  mt-2">
              <img
                src={userimg}
                alt="Profile Image"
                className="w-full rounded"
                style={{ height: "450px" }}
              />
            </div>

            <div className="w-full p-3 mt-5 lg:w-3/4  ">
              <h5 className="text-center text-xl font-semibold mb-4">
                Update Your Profile Information
              </h5>
              <hr />
              <form onSubmit={handleOnSubmit} className="p-">
                {signUpInputs.slice(0, 4).map((item, i) => (
                  <CustomInput
                    key={i}
                    {...item}
                    className="mb-2 "
                    value={form ? form[item?.name] : "default"}
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
