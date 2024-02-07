import React, { useState } from "react";
import CustomInput from "../../components/custom-input/CustomInput";
import { pwdReset } from "../../helper/axios";
import { pwdResetAction } from "./userAction";
import toast from "react-hot-toast";

const PwdReset = () => {
  const [form, setForm] = useState();
  const [msg, setMsg] = useState();
  const [show, setShow] = useState(true);
  const inputField = [
    {
      label: "First name",
      name: "fName",
      placeholder: "marco",
      required: true,
      type: "text",
    },
    {
      label: "Enter your email address",
      name: "email",
      placeholder: "marco@polo.com",
      required: true,
      type: "email",
    },
  ];

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { status, message } = await pwdResetAction(form);

    if (status === "success") {
      setMsg(message);
      setShow(false);
    } else {
      toast[status](message);
    }
  };
  return (
    <div>
      {show ? (
        <>
          <h1 className="my-3 text-center">Password Reset Form</h1>
          <div className=" shadow-md">
            <form onSubmit={handleOnSubmit}>
              {inputField.map((item, i) => (
                <CustomInput key={i} {...item} onChange={handleOnChange} />
              ))}

              <button className="bg-blue-500 rounded mt-5 mb-2 p-2 w-full">
                Send Password Reset Link
              </button>
            </form>
          </div>
        </>
      ) : (
        <div className="flex justify-center align-items-center">
          <h1>{msg}</h1>
        </div>
      )}
    </div>
  );
};

export default PwdReset;
