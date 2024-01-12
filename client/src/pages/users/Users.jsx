import React from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useSelector } from "react-redux";

const Users = () => {
  const { user } = useSelector((state) => state.userInfo);

  return user?.role !== "admin" ? (
    <h1 className="text-center">Unauthorized Access</h1>
  ) : (
    <UserLayout>Cars</UserLayout>
  );
};

export default Users;
