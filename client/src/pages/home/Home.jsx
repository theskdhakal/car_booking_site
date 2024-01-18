import React from "react";
import { MainLayout } from "../../components/mainLayout/MainLayout";
import hero from "../../asset/image/hero.jpg";

const Home = () => {
  return (
    <MainLayout>
      <div
        className="hero "
        style={{
          background: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      ></div>
      <div className="banner"></div>
      <div className="navigator"></div>
    </MainLayout>
  );
};

export default Home;
