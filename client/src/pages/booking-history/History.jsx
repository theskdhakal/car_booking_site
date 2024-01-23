import React from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useSelector } from "react-redux";

const History = () => {
  const { cars } = useSelector((state) => state.carInfo);
  return (
    <UserLayout>
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
              Car Name
            </th>

            <th scope="col" class="px-6 py-3">
              Client Name
            </th>
            <th scope="col" class="px-6 py-3">
              Borrow Date
            </th>
            <th scope="col" class="px-6 py-3">
              Return Date
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
                  onClick={() => toggleModal(car._id)}
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
    </UserLayout>
  );
};

export default History;
