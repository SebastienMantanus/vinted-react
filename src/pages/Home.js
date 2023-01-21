import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to={"/product/123"}>To product Page</Link>
    </div>
  );
};

export default Home;
