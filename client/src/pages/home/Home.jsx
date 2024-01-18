import React from "react";
import { MainLayout } from "../../components/mainLayout/MainLayout";
import hero from "../../asset/image/hero.jpg";
import { Slider } from "../../components/swiper/Swiper";
import bmw from "../../asset/image/bmw.png";
import bentley from "../../asset/image/bentley.png";
import audi from "../../asset/image/audi.png";
import chevrolet from "../../asset/image/chevrolet.png";
import lamborgini from "../../asset/image/lamborgini.png";
import maserati from "../../asset/image/maserati.png";
import mercedes from "../../asset/image/mercedes.png";
import landrover from "../../asset/image/landrover.png";

const Home = () => {
  const slides = [
    {
      style: {
        height: "12vh",
        background: `url(${bmw})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
    },

    {
      style: {
        height: "12vh",
        background: `url(${bentley})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
    },

    {
      style: {
        height: "12vh",
        background: `url(${audi})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
    },

    {
      style: {
        height: "12vh",
        background: `url(${chevrolet})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
    },

    {
      style: {
        height: "12vh",
        background: `url(${lamborgini})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
    },

    {
      style: {
        height: "12vh",
        background: `url(${maserati})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
    },

    {
      style: {
        height: "12vh",
        background: `url(${mercedes})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
    },

    {
      style: {
        height: "12vh",
        background: `url(${landrover})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
    },
  ];

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
      <div className="banner bg-white " style={{ height: "16vh" }}>
        <Slider slides={slides} />
      </div>
      <div className="navigator"></div>
    </MainLayout>
  );
};

export default Home;
