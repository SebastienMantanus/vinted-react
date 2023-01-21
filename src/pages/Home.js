import { Link } from "react-router-dom";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Hero />

      <Link to={"/product/123"}>To product Page</Link>
    </div>
  );
};

export default Home;
