import React, { useEffect, useState } from "react";
import CustomInput from "../custom-input/CustomInput";
import { carInputs } from "../input-fields/Inputfields";
import { updateCarAction } from "../../pages/car-directory/CarAction";
import { useDispatch, useSelector } from "react-redux";

const EditCarForm = ({ carId }) => {
  const [form, setForm] = useState({});

  const dispatch = useDispatch();

  const { cars } = useSelector((state) => state.carInfo);

  const currentCar = cars.find((car) => carId === car._id);

  useEffect(() => {
    //set initial form state when the component mounts
    if (currentCar) {
      setForm({
        title: currentCar.title || "",
        price: currentCar.price || "",
        year: currentCar.year || "",
        description: currentCar.description || "",
        image: "",
      });
    }
  }, [currentCar]);

  const handleOnChange = (e) => {
    const { name, value, type } = e.target;

    // If the input is a file input, update imageFile
    if (type === "file") {
      setForm({
        ...form,
        [name]: e.target.files[0],
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const formDataWithCarId = {
      ...form,
      carId: carId,
    };

    dispatch(updateCarAction(formDataWithCarId));
  };

  return (
    <div className="p-2 ">
      <h3 className="text-center underline">Edit Car Details</h3>
      <form
        className="border mt-2 p-3 shadow-lg w-full"
        onSubmit={handleOnSubmit}
      >
        <div className="flex my-1">
          Availability
          <label className="relative inline-flex items-center cursor-pointer ml-3">
            <input
              type="checkbox"
              value=""
              name="status"
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
        {currentCar &&
          carInputs.map((item, i) => (
            <CustomInput
              key={i}
              {...item}
              value={item.type !== "file" ? form[item.name] || "" : undefined}
              onChange={handleOnChange}
            />
          ))}
        <label className="block mb-2">Description</label>
        <textarea
          key="3"
          name="description"
          type="textarea"
          required=""
          className="border border-gray-500 rounded px-3 py-2 w-full"
          placeholder="description"
          rows="7"
          value={form.description || ""}
          onChange={handleOnChange}
        ></textarea>

        <div className="d-grid">
          <button
            type="submit"
            className="w-full my-5 py-2 rounded-md bg-blue-500 text-white"
          >
            Update Car
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCarForm;
