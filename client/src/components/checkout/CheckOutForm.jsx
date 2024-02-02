import React, { useEffect, useState } from "react";
import { AiFillLock } from "react-icons/ai";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

import { postPayment } from "../../helper/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const CheckOutForm = () => {
  const [form, setForm] = useState();

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (!stripe) return;
  }, []);

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnPlaceOrder = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();
    if (submitError) {
      return;
    }

    const paymentObj = {
      amount: 100,
      currency: "aud",
    };

    const { clientSecret } = await postPayment(paymentObj);

    const { paymentIntent } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: { return_url: "hhtp://localhost:3000" },
      redirect: "if_required",
    });

    if (paymentIntent?.status === "succeeded") {
      toast.success("Your booking has been completed");

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      toast.error("Payment Error !");
    }
  };

  const paymentElementOptions = {
    layout: "tabs",
  };
  return (
    <div className="shadow-lg p-3 rounded">
      <div className="mx-auto w-full max-w-lg">
        <form action="" onSubmit={handleOnPlaceOrder}>
          {/* ::Title */}
          <h1 className="relative mb-5 shadow-sm  text-2xl sm:text-3xl text-gray-700 font-medium">
            Secure Checkout
            <span className="mt-2 w-10 sm:w-20 h-1 block bg-sky-700" />
          </h1>

          <div className="flex justify-between">
            <div>
              {/* ::::label */}
              <label htmlFor="fName">First Name </label>
              {/* ::::input */}
              <input
                type="text"
                id="fName"
                name="fName"
                required={true}
                placeholder="Harry"
                className="form-input px-1 py-2 mt-1 w-full block  rounded border border-gray-600 "
                onChange={handleOnChange}
              />
            </div>
            <div>
              {/* ::::label */}
              <label htmlFor="lName">Last Name </label>
              {/* ::::input */}
              <input
                type="text"
                id="lName"
                name="lName"
                required={true}
                placeholder="Potter"
                className="form-input px-1 py-2 mt-1 w-full  rounded border border-gray-600 "
                onChange={handleOnChange}
              />
            </div>
          </div>

          <div className="mt-2">
            {/* ::::label */}
            <label htmlFor="email">Email</label>
            {/* ::::input */}
            <input
              type="email"
              id="email"
              name="email"
              required={true}
              placeholder="myaddress@example.com"
              className="form-input px py-2 mt-1 w-full block  rounded border border-gray-600 "
              onChange={handleOnChange}
            />
          </div>
          <div className="mt-2">
            {/* ::::label */}
            <label htmlFor="address">Address</label>
            {/* ::::input */}
            <input
              type="text"
              id="address"
              name="address"
              required={true}
              placeholder="1/2 mystreet, there"
              className="form-input px-1 py-2 mt-1 w-full block  rounded border border-gray-600"
              onChange={handleOnChange}
            />
          </div>

          {/* //payment card  */}

          <PaymentElement
            id="payment-element"
            options={paymentElementOptions}
          />

          {/* ::Info */}
          <p className="mt-10 text-center text-sm text-gray-500 font-semibold">
            By placing this order you agree to the{" "}
            <a
              href="#link"
              className="text-indigo-400 underline hover:text-indigo-600 whitespace-nowrap"
            >
              Terms and Conditions
            </a>
          </p>

          {/* ::Submit Button */}
          <button
            type="submit"
            className="mt-4 py-2.5 px-4 w-full inline-flex justify-center items-center rounded bg-sky-700 text-base sm:text-lg text-white text-opacity-80 font-semibold tracking-wide hover:text-opacity-100"
          >
            <AiFillLock className="mr-3 w-5 h-5" />
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};
