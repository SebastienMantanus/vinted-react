import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import Cookies from "js-cookie";
import { useState } from "react";

const Header = ({ token, setToken, searchRequest, setSearchRequest }) => {
  const navigate = useNavigate();
  // const [querry, setQuerry] = useState("");
  const [search, setSearch] = useState("");

  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="logo vinted" />
        </Link>
        <input
          id="search"
          type="text"
          placeholder="Rechercher des articles"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
            setSearchRequest("title=" + search.toUpperCase());
          }}
        />
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
