import { Link, useNavigate } from "react-router-dom";
// import { useEffect } from "react";
import logo from "../assets/logo.svg";
import Cookies from "js-cookie";

const Header = ({ token, setToken }) => {
  // const [token, setToken] = useState(Cookies.get("token") || "");

  const navigate = useNavigate();
  navigate(0);

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
              }}
            >
              Déconnexion
            </div>
          ) : (
            <Link to="/signup">
              <div className="button signup">S'inscrire</div>
            </Link>
          )}
          {!token && <div className="button signup">Se connecter</div>}
        </div>
        <div className="button sale">Vends tes articles</div>
      </div>
    </header>
  );
};

export default Header;
