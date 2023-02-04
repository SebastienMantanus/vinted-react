import { useState } from "react";
import axios from "axios";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const CheckoutForm = ({ buyer, amount, titleOffer }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [completed, setCompleted] = useState(false);
  console.log("Buyer ====>" + buyer);

  const handleSubmit = async (event) => {
    event.preventDefault();
    //1. je choppe les éléments de la CB et je les stocke
    const cardElement = elements.getElement(CardElement);
    //2. je balance la purée à Stripe
    const stripeResponse = await stripe.createToken(cardElement, {
      name: buyer.toString(),
    });
    //3. je récupère le tocken de paiement de Stipe
    // console.log(stripeResponse);
    const stripeToken = stripeResponse.token.id;
    //4. Je balance le paiement au Back
    const response = await axios.post(
      "https://lereacteur-vinted-api.herokuapp.com/payment",
      {
        token: stripeToken,
        amount: amount,
        titleOffer: titleOffer,
      }
    );
    console.log(response.data);
    //5. si le paiement est OK, je change le "completed"
    if (response.data.status === "succeeded") {
      setCompleted(true);
    }
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
