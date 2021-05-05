import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement } from "@stripe/react-stripe-js";

const ProcessPayment = () => {
  const stripePromise = loadStripe(
    "pk_test_51Ih7dmLmzocGsw8Fto6oLaAmOnaaWRdNRESgd3VaELGIOr4i84Z3ZGDTQHg4cmGHIFmf2ClW9yPswJh2jUrZWmFO00RwAwDhan"
  );
  return (
    <Elements stripe={stripePromise}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
    </Elements>
  );
};

export default ProcessPayment;

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
