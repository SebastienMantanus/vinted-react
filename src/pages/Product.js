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
        <div>
          <p>Product id : {id}</p>
          <p>Product Name : {data.product_name}</p>
          <Link to={"/"}>Link to Home Page</Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
