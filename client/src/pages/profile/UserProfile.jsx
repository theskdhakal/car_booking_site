import React from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const { user } = useSelector((state) => state.userInfo);
  console.log(user);
  return <UserLayout>asfd</UserLayout>;
};

export default UserProfile;
