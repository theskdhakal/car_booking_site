import React from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useSelector } from "react-redux";

const Users = () => {
  const { user, users } = useSelector((state) => state.userInfo);

  return user?.role !== "admin" ? (
    <h1 className="text-center">Unauthorized Access</h1>
  ) : (
    <UserLayout>
      <h1 className="my-3 text-center">User List</h1>
      <div className="mt-1 p-1 ">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 border ">
          <thead class="text-xs text-gray-700 uppercase bg-gray-100 ">
            <tr>
              <th scope="col" class="px-6 py-3">
                S.N
              </th>
              <th scope="col" class="px-6 py-3">
                Role
              </th>
              <th scope="col" class="px-6 py-3">
                Name
              </th>

              <th scope="col" class="px-6 py-3">
                Address
              </th>
              <th scope="col" class="px-6 py-3">
                Email
              </th>
              <th scope="col" class="px-6 py-3">
                Contact No.
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="bg-white border-b">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {user.role}
                </td>
                <td className="px-6 py-4">
                  {" "}
                  {user.fName} {user.lName}
                </td>

                <td className="px-6 py-4">{user.address}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </UserLayout>
  );
};

export default Users;
