import React, { useState } from "react";
import CustomInput from "../custom-input/CustomInput";
import { carInputs } from "../input-fields/Inputfields";
import { UserLayout } from "../layout/UserLayout";
import { postNewCarAction } from "../../pages/car-directory/CarAction";
import { useDispatch } from "react-redux";
import { IoChevronBack } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const CarForm = () => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

    dispatch(postNewCarAction(form));
  };
  return (
    <UserLayout>
      <span className="text-2xl ">
        <Link to="/car-directory">
          <IoChevronBack className="cursor-pointer" />
        </Link>
      </span>
      <h1 className="text-center "> Add New Car </h1>

      <hr />
      <div className="flex justify-center">
        <form
          className="border mt-2  p-3 shadow-lg w-4/5"
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
              <div className="w-11  h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
          {carInputs.map((item, i) => (
            <CustomInput Key={i} {...item} onChange={handleOnChange} />
          ))}
          <label className="block mb-2">Description</label>
          <textarea
            key="3"
            name="description"
            type="textarea"
            required=""
            class="border border-gray-500 rounded px-3 py-2 w-full"
            placeholder="description"
            rows="7"
            onChange={handleOnChange}
          ></textarea>

          <div className="d-grid">
            <button
              type="submit "
              className="w-full my-5 py-2 rounded-md bg-blue-500 text-white"
            >
              Add Car
            </button>
          </div>
        </form>
      </div>
    </UserLayout>
  );
};

export default CarForm;
