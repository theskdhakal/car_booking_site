import React, { useEffect, useState } from "react";
import { MainLayout } from "../../components/mainLayout/MainLayout";
import CustomInput from "../../components/custom-input/CustomInput";
import { signInInputs } from "../../components/input-fields/Inputfields";
import { signInAction } from "./userAction";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.userInfo);

  useEffect(() => {
    user?._id && navigate("/dashboard");
  }, [user?._id, navigate]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    dispatch(signInAction(form));
  };
  return (
    <MainLayout>
      <div className="grid min-h-screen place-items-center p-3">
        <div className=" p-12 rounded border shadow-lg bg-white   sm:w-2/3 md:w-1/2 lg:w-1/2">
          <h1 className="text-center">Welcome Back</h1>
          <hr />
          <form onSubmit={handleOnSubmit}>
            {signInInputs.map((item, i) => (
              <CustomInput key={i} {...item} onChange={handleOnChange} />
            ))}

            <div className="d-grid">
              <button
                type="submit "
                className="w-full my-5 py-2 rounded-md bg-blue-500 text-white"
              >
                Sign In
              </button>
            </div>
          </form>

          <div className="text-end text-sm">
            Don't have account? <br />
            <Link to="/signup" className="text-blue-500 underline">
              signup{" "}
            </Link>
            here
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SignIn;
