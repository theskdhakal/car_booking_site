import React from "react";
import { MainLayout } from "../../components/mainLayout/MainLayout";

const SignIn = () => {
  return (
    <MainLayout>
      <div className="grid min-h-screen place-items-center">
        <div className="w-full p-2 border shadow-lg bg-white  sm:w-2/3 md:w-1/2 ">
          <form>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default SignIn;
