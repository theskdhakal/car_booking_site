import logo from "./logo.svg";
import "./App.css";
import toast, { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import SignUp from "./pages/signup-signIn/SignUp";
import SignIn from "./pages/signup-signIn/SignIn";

// const notify = () => toast("here is your toast");

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
