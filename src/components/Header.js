import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import Cookies from "js-cookie";

const Header = ({ token, setToken }) => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="logo vinted" />
        </Link>
        <input type="text" placeholder="Rechercher des articles" />
        <div className="flex-signup">
          {token ? (
            <div
              className="button signup"
              onClick={() => {
                Cookies.remove("token");
                setToken("");
                navigate("/");
              }}
            >
              Se déconnecter
            </div>
          ) : (
            <Link to="/signup">
              <div className="button signup">S'inscrire</div>
            </Link>
          )}
          {!token && (
            <Link to="/login">
              <div className="button signup">Se connecter</div>
            </Link>
          )}
        </div>
        <div className="button sale">Vends tes articles</div>
      </div>
    </header>
  );
};

export default Header;
