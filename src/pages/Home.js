import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>En cours de chargement...</p>
  ) : (
    <div>
      <Hero />
      <div className="offers-grid">
        {data.offers.map((element, index) => {
          return (
            <div key={element._id}>
              {element.owner && (
                <Link to={`/product/${element._id}`}>
                  <div className="offer">
                    <div className="offer-owner">
                      <img
                        src={element.owner.account.avatar.secure_url}
                        alt="owner avatar"
                      />
                      <p>{element.owner.account.username}</p>
                    </div>

                    <img
                      className="offer-image"
                      src={element.product_image.secure_url}
                      alt="product illustrtion"
                    />
                    <div className="offer-details">
                      <p>
                        {element.product_price.toFixed(2).replace(".", ",")} €
                      </p>

                      {element.product_details.map((element, index) => {
                        return <p key={index}>{element.MARQUE}</p>;
                      })}
                    </div>
                  </div>
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
