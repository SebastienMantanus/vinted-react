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
                <div key={index} className="product-details">
                  <div>
                    <p className="grey">{Object.keys(element)[0]}</p>
                    <p>{element.MARQUE}</p>
                  </div>
                  <div>
                    <p className="grey">{Object.keys(element)[1]}</p>
                    <p>{element.ÉTAT}</p>
                  </div>
                  <div>
                    <p className="grey">{Object.keys(element)[2]}</p>
                    <p>{element.COULEUR}</p>
                  </div>
                  <div>
                    <p className="grey">{Object.keys(element)[3]}</p>
                    <p>{element.EMPLACEMENT}</p>
                  </div>
                </div>
              );
            })}

            <div className="separator"></div>
            <div className="product-description">
              <p>Tee-shirt cotelé</p>
              <p className="grey">Très bon état général</p>
            </div>
            <div className="product-owner">
              <p>logo</p>
              <p>Owner Name</p>
            </div>
            <Link className="buy-button" to={"/"}>
              Acheter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
