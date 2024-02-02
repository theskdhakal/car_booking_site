import React from "react";
import { CheckOutForm } from "../../components/checkout/CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

export const Checkout = () => {
  const publishableKey = process.env.REACT_APP_STRIPE_PK;
  const stripePromise = loadStripe(publishableKey);

  const options = {
    mode: "payment",
    currency: "aud",
    amount: 30000,
  };

  return (
    <div>
      <div
        className="flex justify-center items-center    w-full"
        style={{ height: "100vh" }}
      >
        <Elements stripe={stripePromise} options={options}>
          <CheckOutForm />
        </Elements>
      </div>
    </div>
  );
};
