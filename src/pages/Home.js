import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = ({ searchRequest, priceFilter, setPriceFilter }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [pagesArray, setPagesArray] = useState([]);
  const itemsPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?title=${searchRequest}&priceMin=${priceFilter.min}&priceMax=${priceFilter.max}&sort=${priceFilter.display}&page=${priceFilter.page}&limit=${itemsPage}`
        );
        setData(response.data);
        setIsLoading(false);
        console.log(
          "Nombre de pages ==>" + Math.ceil(response.data.count / itemsPage)
        );
        const pagesArray = [];
        for (
          let i = 1;
          i < Math.ceil(response.data.count / itemsPage) + 1;
          i++
        ) {
          pagesArray.push([i]);
        }
        setPagesArray(pagesArray);
        console.log("PargeArray ===>" + pagesArray);
        //tableau de pagination des annonces
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [searchRequest, priceFilter]);

  let priceFilterUpdate = { ...priceFilter };

  return isLoading ? (
    <p>En cours de chargement...</p>
  ) : (
    <div>
      <Hero />
      <div className="offers-grid">
        <div className="offers-container">
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
        <div className="pages-section">
          {pagesArray.map((element, index) => {
            return (
              <div
                className={
                  priceFilter.page === element ? "page-section-selected" : ""
                }
                key={index}
                onClick={() => {
                  priceFilterUpdate.page = element;
                  setPriceFilter(priceFilterUpdate);
                }}
              >
                {element}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
