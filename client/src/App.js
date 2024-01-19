import logo from "./logo.svg";
import "./App.css";
import toast, { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import SignUp from "./pages/signup-signIn/SignUp";
import SignIn from "./pages/signup-signIn/SignIn";
import Dashboard from "./pages/dashboard/Dashboard";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Cars from "./pages/car-directory/Cars";
import Users from "./pages/users/Users";
import UserProfile from "./pages/profile/UserProfile";
import History from "./pages/booking-history/History";
import CarForm from "./components/car-component/CarForm";
import { useDispatch } from "react-redux";

import { useEffect } from "react";
import { fetchCarAction } from "./pages/car-directory/CarAction";
import CarFleet from "./pages/car-directory/CarFleet";
import CarLanding from "./components/car-component/CarLanding";

// const notify = () => toast("here is your toast");

function App() {
  const dispatch = useDispatch();

  //fetch all cars

  useEffect(() => {
    dispatch(fetchCarAction());
  }, [dispatch]);

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/fleet" element={<CarFleet />} />
        <Route path="/cars/:_id" element={<CarLanding />} />

        {/* *****************private Routes ********************** */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="/car-directory"
          element={
            <PrivateRoute>
              <Cars />
            </PrivateRoute>
          }
        />
        <Route
          path="/user"
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        />
        <Route
          path="/booking-history"
          element={
            <PrivateRoute>
              <History />
            </PrivateRoute>
          }
        />
        <Route
          path="/car/new"
          element={
            <PrivateRoute>
              <CarForm />
            </PrivateRoute>
          }
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
