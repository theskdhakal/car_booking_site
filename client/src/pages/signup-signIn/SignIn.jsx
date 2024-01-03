import React from "react";
import { MainLayout } from "../../components/mainLayout/MainLayout";
import CustomInput from "../../components/custom-input/CustomInput";
import { signInInputs } from "../../components/input-fields/Inputfields";

const SignIn = () => {
  return (
    <MainLayout>
      <div className="grid min-h-screen place-items-center p-3">
        <div className=" p-12 rounded border shadow-lg bg-white   sm:w-2/3 md:w-1/2 lg:w-1/4">
          <h1 className="text-center">Welcome Back</h1>
          <hr />
          <form>
            {signInInputs.map((item, i) => (
              <CustomInput key={i} {...item} />
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
        </div>
      </div>
    </MainLayout>
  );
};

export default SignIn;
