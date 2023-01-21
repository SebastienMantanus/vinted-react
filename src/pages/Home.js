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
      {data.offers.map((element, index) => {
        return (
          <div key={element._id}>
            <Link to={`/product/${element._id}`}>{element.product_name}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
