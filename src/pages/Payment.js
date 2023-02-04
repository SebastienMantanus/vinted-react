import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
);

const Payment = ({ token, userId }) => {
  const location = useLocation();
  const buyer = userId;
  const product_name = location.state.product_name;
  const product_price = location.state.product_price;
  const warranty_price = 0.4;
  const transport_price = 0.8;
  const total_price = (
    product_price +
    warranty_price +
    transport_price
  ).toFixed(2);

  return token ? (
    <div className="payment-background">
      <div className="payment-container">
        <h1>Résumé de la commande</h1>
        <div className="price-details">
          <div className="grey order_resumee">
            <p>Commande</p>
            <p>{product_price} €</p>
          </div>
          <div className="grey order_resumee">
            <p>Frais protection acheteurs</p>
            <p>{warranty_price.toFixed(2)} €</p>
          </div>
          <div className="grey order_resumee">
            <p>Frais de port</p>
            <p>{transport_price.toFixed(2)} €</p>
          </div>
        </div>
        <div className="price-details">
          <div className="order_resumee">
            <p>Prix total</p>
            <p>{total_price} €</p>
          </div>
          <div className="margin_top order_resumee">
            <p>
              Il ne reste plus qu'une étape pour vous offrir {product_name}.
              Vous allez payer {total_price} € (frais de port et de protection
              inclus)
            </p>
          </div>
        </div>
        <Elements stripe={stripePromise}>
          <CheckoutForm
            buyer={buyer}
            amount={total_price}
            titleOffer={product_name}
          />
        </Elements>
      </div>
    </div>
  ) : (
    <div>Vous n'êtes pas connecté !</div>
  );
};

export default Payment;
