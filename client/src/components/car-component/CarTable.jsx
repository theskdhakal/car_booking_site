import React from "react";
import { useSelector } from "react-redux";

const CarTable = () => {
  const { cars } = useSelector((state) => state.carInfo);
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
                  Year
                </th>
                <th scope="col" class="px-6 py-3">
                  Price/day
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
                    <img src={car.image} width={100} alt="" />
                  </td>
                  <td className="px-6 py-4"> {car.title}</td>
                  <td className="px-6 py-4">{car.year}</td>

                  <td className="px-6 py-4">{car.price}</td>
                  <td className="px-6 py-4">
                    <button className="bg-yellow-400">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CarTable;
