import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PopUp from "../modal/PopUp";
import { deleteCarAction } from "../../pages/car-directory/CarAction";
import { setPopupShow } from "../modal/popUpSlice";
import EditCarForm from "./EditCarForm";

const CarTable = () => {
  const { cars } = useSelector((state) => state.carInfo);
  const { popupShow } = useSelector((state) => state.popupshow);
  const dispatch = useDispatch();

  const [selectedCar, setSelectedCar] = useState();
  console.log(popupShow);

  useEffect(() => {
    console.log("useEffect-popupShow", popupShow);
  }, [popupShow]);

  const handleOnEdit = (carId) => {
    setSelectedCar(carId);
    dispatch(setPopupShow(true));
  };

  const handleOnDelete = (_id) => {
    dispatch(deleteCarAction(_id));
  };

  return (
    <div>
      {popupShow && (
        <PopUp>
          <EditCarForm carId={selectedCar} />
        </PopUp>
      )}

      {!popupShow && (
        <>
          <h1 className="text-center underline mb-5 ">Car -inventory</h1>

          <div className="flex justify-center">
            <div class="relative w-full overflow-x-auto rounded shadow-lg">
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
                      <td className="px-6 flex py-4">
                        <button
                          className="bg-amber-600 text-white py-1 px-2 rounded"
                          onClick={() => handleOnEdit(car._id)}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-600 text-white ml-2 py-1 px-2 rounded"
                          onClick={() => handleOnDelete(car._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CarTable;
