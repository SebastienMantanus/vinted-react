import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Product = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <p>Chargement de la fiche en cours...</p>
  ) : (
    <div className="product-div">
      <div className="product-container">
        <div>
          <img src={data.product_image.secure_url} alt={data.product_name} />
        </div>
        <div className="product-container-offer">
          <div className="product-offer">
            <div className="product-price">
              <p>{data.product_price} €</p>
            </div>
            {data.product_details.map((element, index) => {
              return (
                <div key={index}>
                  <div className="product-details">
                    <p className="grey">{Object.keys(element)[0]}</p>
                    <p>{element[Object.keys(element)[0]]}</p>
                  </div>
                </div>
              );
            })}

            <div className="separator"></div>

            <div className="product-description">
              <p>{data.product_name}</p>
              <p className="grey">{data.product_description}</p>
            </div>
            <div className="product-owner">
              {data.owner.account.avatar && (
                <img
                  src={data.owner.account.avatar.secure_url}
                  alt="avatar vendeur"
                />
              )}

              <p>{data.owner.account.username}</p>
            </div>
            <Link
              className="buy-button"
              to={"/payment"}
              state={{
                product_price: data.product_price,
                product_name: data.product_name,
                buyer: data.owner._id,
              }}
            >
              Acheter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
