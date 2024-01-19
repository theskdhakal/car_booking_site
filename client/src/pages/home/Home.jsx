import React, { useState } from "react";
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
import multiple from "../../asset/image/multiple.jpg";
import { Link } from "react-router-dom";

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

  const [openSection, setOpenSection] = useState(null);

  const handleOnToggle = (index) => {
    setOpenSection((prevOpenSection) =>
      prevOpenSection === index ? null : index
    );
  };

  return (
    <MainLayout>
      <div
        className="hero relative"
        style={{
          background: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <button className="Fleet bg-blue-600 p-1 text-white rounded">
          <Link to="/fleet">Check our FLeet</Link>
        </button>
      </div>

      <div className="banner bg-white " style={{ height: "16vh" }}>
        <Slider slides={slides} />
      </div>

      <div className="home-last flex bg-black">
        <div className="image p-3 ">
          <img src={multiple} />
        </div>

        <div className="accordion bg-black text-white  w-full mt-5">
          <h1 className="underline mb-5 text-center">How it works?</h1>
          <div
            className={`section ${openSection === 1 ? "open" : ""}`}
            onClick={() => handleOnToggle(1)}
          >
            <div className="section-header">1. Send Request</div>
            {openSection === 1 && (
              <div className="section-content ">
                Ready to secure your ride? Simply fill out our booking form,
                ensuring you provide all the necessary details. Don't forget to
                specify your preferred vehicle. Once submitted, our team will
                promptly get in touch to confirm your reservation. Let's get you
                on the road!
              </div>
            )}
          </div>
          <div
            className={`section ${openSection === 2 ? "open" : ""}`}
            onClick={() => handleOnToggle(2)}
          >
            <div className="section-header">
              2. Verify License & Credentials
            </div>
            {openSection === 2 && (
              <div className="section-content ">
                For the safety and security of our vehicles, our terms and
                conditions require that all drivers possess a valid full license
                and be at least 25 years of age.
              </div>
            )}
          </div>
          <div
            className={`section ${openSection === 4 ? "open" : ""}`}
            onClick={() => handleOnToggle(4)}
          >
            <div className="section-header"> 4. Enjoy</div>
            {openSection === 4 && (
              <div className="section-content ">
                Once everything's set, you're free to hit the road and enjoy
                your ride. Safe travels!
              </div>
            )}
          </div>
          <div
            className={`section ${openSection === 3 ? "open" : ""}`}
            onClick={() => handleOnToggle(3)}
          >
            <div className="section-header">3. Security Deposit</div>
            {openSection === 3 && (
              <div className="section-content ">
                Upon verifying your credentials, we'll finalise your booking. At
                this stage, a deposit for the selected vehicle(s) will be
                required.
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
