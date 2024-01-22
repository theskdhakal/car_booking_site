import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { UserLayout } from "../../components/layout/UserLayout";
import { Link } from "react-router-dom";
import CustomCard from "../../components/custom-card/CustomCard";
import CustomInput from "../../components/custom-input/CustomInput";
import { MainLayout } from "../../components/mainLayout/MainLayout";

const CarFleet = () => {
  const { cars } = useSelector((state) => state.carInfo);

  const [display, setDisplay] = useState([]);

  const handleOnChange = (e) => {
    const { value } = e.target;

    const filteredItem = cars.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );

    setDisplay(filteredItem);
  };

  useEffect(() => {
    !display.length && setDisplay(cars);
  }, [cars]);

  console.log(display);

  return (
    <MainLayout>
      <h1 className="my-5 text-center underline text-red-600 ">
        Explore our Car Ranges
      </h1>

      <div className=" ml-5 pl-5 mr-2 ">
        <div className="search mt-5 mb-2 flex justify-between mr-3">
          <h5 className="mt-2 text-lg font-bold">
            {display.length} Cars found
          </h5>
          <CustomInput
            placeholder="Search car by title "
            className="border border-black"
            onChange={handleOnChange}
          />
        </div>

        <hr />

        <div className="flex space-x-8 mt-5 ">
          {display.map((item) => (
            <CustomCard key={item._id} {...item} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default CarFleet;
