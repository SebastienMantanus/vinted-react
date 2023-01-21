import { Link, useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  return (
    <div>
      <p>Product id : {id}</p>
      <Link to={"/"}>Link to Home Page</Link>
    </div>
  );
};

export default Product;
