import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      <Link to="/">Home Page</Link>
      <Link to="/product/id">Product page</Link>
    </div>
  );
};

export default Header;
