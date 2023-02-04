import { useState } from "react";
import axios from "axios";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [completed, setCompleted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const cardElement = elements.getElement(CardElement);
    console.log("on avance...");
  };
  return (
    <>
      {!completed ? (
        <form className="pay_form" onSubmit={handleSubmit}>
          <CardElement />
          <button type="submit">Pay</button>
        </form>
      ) : (
        <span>Paiement effectué ! </span>
      )}
    </>
  );
};

export default CheckoutForm;
