import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="logo vinted" />
        </Link>
        <input type="text" placeholder="Rechercher des articles" />
        <div className="flex-signup">
          <div className="button signup">S'inscrire</div>
          <div className="button signup">Se connecter</div>
        </div>
        <div className="button sale">Vends tes articles</div>
      </div>
    </header>
  );
};

export default Header;
