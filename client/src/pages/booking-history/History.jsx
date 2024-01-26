import React, { useEffect } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBookingHistoryAction,
  returnBookingAction,
} from "./bookingAction";

const History = () => {
  const { bookings } = useSelector((state) => state.bookingInfo);
  const { user } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("fetchinbg");
    dispatch(fetchBookingHistoryAction());
  }, [dispatch]);

  const handleOnRadioChange = (item, isReturned) => {
    const obj = {
      bookingId: item._id,
      isReturned,
      carId: item.carId,
    };
    if (
      window.confirm(
        "Has car been returned? Are you sure to update the status?"
      )
    ) {
      dispatch(returnBookingAction(obj));
    }
  };
  return (
    <UserLayout>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 border ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              S.N
            </th>
            <th scope="col" className="px-6 py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              Car Name
            </th>
            <th scope="col" className="px-6 py-3">
              Client Name
            </th>

            <th scope="col" className="px-6 py-3">
              Due Date
            </th>

            <th scope="col" className="px-6 py-3">
              {user?.role === "admin" ? "ACTION" : "STATUS"}
            </th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((item, index) => (
            <tr key={index} className="bg-white border-b">
              <td className="px-6 py-4">{index + 1}</td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                <img src={item.image} width={400} alt="" />
              </td>
              <td className="px-6 py-4"> {item.carName}</td>

              <td className="px-6 py-4">{item.userName}</td>
              <td className="px-6 py-4">{item?.dueDate?.slice(0, 10)}</td>

              <td className="px-6 py-4">
                {item.userRole === "admin" && (
                  <>
                    <div className="flex items-center mb-4">
                      <input
                        id="default-radio-1"
                        type="radio"
                        value=""
                        name="returned"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                        onClick={() => handleOnRadioChange(item, true)}
                        checked={item.isReturned}
                      />
                      <label
                        for="default-radio-1"
                        className="ms-2 text-sm font-medium text-gray-900 "
                      >
                        Returned
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        // checked
                        id="default-radio-2"
                        type="radio"
                        value=""
                        name="returned"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                        onClick={() => handleOnRadioChange(item, false)}
                        checked={!item.isReturned}
                      />
                      <label
                        for="default-radio-2"
                        className="ms-2 text-sm font-medium text-gray-900 "
                      >
                        In Progress
                      </label>
                    </div>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </UserLayout>
  );
};

export default History;
