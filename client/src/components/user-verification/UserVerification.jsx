import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyUser } from "../../helper/axios";
import CustomInput from "../custom-input/CustomInput";
import { updatePasswordAction } from "../../pages/signup-signIn/userAction";
import toast from "react-hot-toast";

const UserVerification = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [setting, setSetting] = useState("");
  const [form, setForm] = useState();
  const [mail, setMail] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const mode = params.get("mode");
    const verificationCode = params.get("c");
    const email = params.get("e");

    if (verificationCode && email && mode) {
      setMail(email);
      handleOnVerify(verificationCode, email, mode);
    }
  }, [location.search]);

  const handleOnVerify = async (verificationCode, email, mode) => {
    const { status, message, context } = await verifyUser(
      verificationCode,
      email,
      mode
    );

    if (status === "success") {
      setSetting(context);
    }
  };

  const pwdResetField = [
    {
      label: "Enter new password",
      name: "password",
      placeholder: "**********",
      required: true,
      type: "password",
    },
    {
      label: "Confirm your password",
      name: "confirmPassword",
      placeholder: "**********",
      required: true,
      type: "password",
    },
  ];

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleOnUpdatePassword = async (e) => {
    e.preventDefault();

    const { password, confirmPassword } = form;

    const newObj = { password, email: mail };

    if (password === confirmPassword) {
      const { status, message } = await updatePasswordAction(newObj);

      status === "success" && toast[status](message) && navigate("/signin");
    } else {
      window.alert("Password doesnot match");
    }
  };

  return (
    <div className="flex flex-col  justify-center items-center h-screen">
      {setting === "user-verification" && (
        <>
          <h1 className="text-center">Your Email has been Verified</h1>
          <br />
          <p>
            Please{" "}
            <span
              onClick={() => navigate("/signIn")}
              className="cursor-pointer text-blue-500 underline"
            >
              login
            </span>{" "}
            to continue....{" "}
          </p>
        </>
      )}
      {setting === "pwdReset" && (
        <div className="shadow-lg p-5 w-full sm:w-1/2 border">
          <form className=" my-5" onSubmit={handleOnUpdatePassword}>
            {pwdResetField.map((item, i) => (
              <CustomInput key={i} {...item} onChange={handleOnChange} />
            ))}

            <button
              className="bg-blue-600 w-full p-2 mt-2 rounded text-white"
              type="submit"
            >
              Reset Password
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserVerification;
