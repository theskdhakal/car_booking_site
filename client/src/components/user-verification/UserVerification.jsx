import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyUser } from "../../helper/axios";

const UserVerification = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [verifiactionStatus, setVerificationStatus] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const verificationCode = params.get("c");
    const email = params.get("e");

    if (verificationCode && email) {
      handleOnVerify(verificationCode, email);
    }
  }, [location.search]);

  const handleOnVerify = async (verificationCode, email) => {
    const result = await verifyUser(verificationCode, email);

    if (result.status === "success") {
      setVerificationStatus("verified");
    }
  };

  console.log(verifiactionStatus);

  return (
    <div>
      <h1>{verifiactionStatus}</h1>
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
    </div>
  );
};

export default UserVerification;
