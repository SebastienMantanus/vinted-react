import { useLocation } from "react-router-dom";

const Payment = ({ token }) => {
  const location = useLocation();
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
        <p>STRIPPPEEEEE</p>
      </div>
    </div>
  ) : (
    <div>Vous n'êtes pas connecté !</div>
  );
};

export default Payment;
