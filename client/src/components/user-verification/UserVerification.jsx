import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyUser } from "../../helper/axios";

const UserVerification = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [setting, setSetting] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const mode = params.get("mode");
    const verificationCode = params.get("c");
    const email = params.get("e");

    if (verificationCode && email && mode) {
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
  console.log(setting);

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
      {setting === "pwdReset" && <h1>reset form</h1>}
    </div>
  );
};

export default UserVerification;
