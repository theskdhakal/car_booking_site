import React from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useSelector } from "react-redux";
import CarTable from "../../components/car-component/CarTable";
import CarForm from "../../components/car-component/CarForm";
import { Link, Navigate } from "react-router-dom";

const Cars = () => {
  const { user } = useSelector((state) => state.userInfo);

  return user?.role !== "admin" ? (
    <h1 className="text-center">Unauthorized Access</h1>
  ) : (
    <UserLayout>
      <div className="text-end">
        <Link to="/car/new">
          <button className="bg-cyan-400 mr-2 mt-2 rounded p-2">
            +Add new car
          </button>
        </Link>
      </div>
      <div className="mt-3">
        <CarTable />
      </div>
    </UserLayout>
  );
};

export default Cars;
