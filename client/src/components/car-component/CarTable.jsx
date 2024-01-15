import React, { useState } from "react";
import { useSelector } from "react-redux";
import PopUp from "../modal/PopUp";

const CarTable = () => {
  const { cars } = useSelector((state) => state.carInfo);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCar, setSelectedCar] = useState();

  const toggleModal = (carId) => {
    setIsVisible(!isVisible);
    setSelectedCar(carId);
  };

  const handleOnClose = () => {
    setIsVisible(false);
  };

  return (
    <div>
      <h1 className="text-center underline mb-5 ">Car -inventory</h1>

      <div className="flex justify-center">
        <div class="relative w-3/4 overflow-x-auto rounded shadow-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 border ">
            <thead class="text-xs text-gray-700 uppercase bg-gray-100 ">
              <tr>
                <th scope="col" class="px-6 py-3">
                  S.N
                </th>
                <th scope="col" class="px-6 py-3">
                  Image
                </th>
                <th scope="col" class="px-6 py-3">
                  Name
                </th>

                <th scope="col" class="px-6 py-3">
                  Price/day
                </th>
                <th scope="col" class="px-6 py-3">
                  Decription
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car, index) => (
                <tr key={index} className="bg-white border-b">
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    <img src={car.image} width={400} alt="" />
                  </td>
                  <td className="px-6 py-4"> {car.title}</td>

                  <td className="px-6 py-4">{car.price}</td>
                  <td className="px-6 py-4">{car.description}</td>
                  <td className="px-6 py-4">
                    <button
                      className="bg-amber-500 py-1 px-2 rounded"
                      // data-modal-target="default-modal"
                      // data-modal-toggle="default-modal"
                      onClick={() => toggleModal(car._id)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <PopUp
            isVisible={isVisible}
            onClose={handleOnClose}
            carId={selectedCar}
          />
        </div>
      </div>
    </div>
  );
};

export default CarTable;
