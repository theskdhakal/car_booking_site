import React, { useState } from "react";
import { MainLayout } from "../../components/mainLayout/MainLayout";
import { signUpInputs } from "../../components/input-fields/Inputfields";
import CustomInput from "../../components/custom-input/CustomInput";
import { postUser } from "../../helper/axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPopupShow } from "../../components/modal/popUpSlice";
import Redirect from "./Redirect";
import PopUp from "../../components/modal/PopUp";

const SignUp = () => {
  const [form, setForm] = useState();
  const { popupShow } = useSelector((state) => state.popupshow);
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { confirmPassword, ...rest } = form;

    if (confirmPassword !== form.password) {
      return toast.error("Password do not match");
    }

    //call api and send form data

    const dataPromise = postUser(rest);
    toast.promise(dataPromise, {
      pending: "Please wait ......",
    });

    const data = await dataPromise;
    const { status, message } = data;
    toast[status](message);

    if (status === "success") {
      dispatch(setPopupShow(true));
    }
  };

  return (
    <MainLayout>
      {popupShow && (
        <PopUp>
          <Redirect />
        </PopUp>
      )}
      <div className="grid min-h-screen place-items-center p-3">
        <div className=" p-12 rounded border shadow-lg bg-white   sm:w-2/3 md:w-1/2 lg:w-1/2">
          <h1 className="text-center">Add New User</h1>
          <hr />
          <form onSubmit={handleOnSubmit}>
            {signUpInputs.map((item, i) => (
              <CustomInput key={i} {...item} onChange={handleOnChange} />
            ))}

            <div className="d-grid">
              <button
                type="submit "
                className="w-full my-5 py-2 rounded-md bg-blue-500 text-white"
              >
                Submit
              </button>
            </div>
          </form>

          <div className="text-end text-sm">
            Already Registered?
            <br />
            <Link to="/signin" className="text-blue-500 underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SignUp;
