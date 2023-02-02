import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import Cookies from "js-cookie";

const Header = ({
  token,
  setToken,
  searchRequest,
  setSearchRequest,
  priceFilter,
  setPriceFilter,
}) => {
  const navigate = useNavigate();

  const location = useLocation();
  console.log("Location ==>" + location.pathname);

  let priceFilterUpdate = { ...priceFilter };

  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="logo vinted" />
        </Link>
        <div className="search-filters">
          <input
            style={{
              visibility:
                location.pathname.includes("product") ||
                location.pathname.includes("publish")
                  ? "hidden"
                  : "",
            }}
            id="search"
            type="text"
            placeholder="Rechercher des articles"
            value={searchRequest}
            onChange={(event) => {
              setSearchRequest(event.target.value);
            }}
          />
          <div
            style={{
              visibility:
                location.pathname.includes("product") ||
                location.pathname.includes("publish")
                  ? "hidden"
                  : "",
            }}
          >
            <label id="picemin">Entre :</label>
            <input
              className="price-range"
              id="picemin"
              type="number"
              placeholder={priceFilter.min}
              onChange={(event) => {
                priceFilterUpdate.min = event.target.value;
                setPriceFilter(priceFilterUpdate);
              }}
            />
            <p>€</p>
            <label id="pricemax">Et :</label>
            <input
              className="price-range"
              id="pricemax"
              type="number"
              placeholder={priceFilter.max}
              onChange={(event) => {
                priceFilterUpdate.max = event.target.value;
                setPriceFilter(priceFilterUpdate);
              }}
            />
            <p>€</p>
            {priceFilter.display === "price-asc" ? (
              <button
                onClick={() => {
                  priceFilterUpdate.display = "price-desc";
                  setPriceFilter(priceFilterUpdate);
                }}
              >
                Prix croissant
              </button>
            ) : (
              <button
                onClick={() => {
                  priceFilterUpdate.display = "price-asc";
                  setPriceFilter(priceFilterUpdate);
                }}
              >
                Prix décroissant
              </button>
            )}
          </div>
        </div>
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
        <Link to="/publish">
          <div className="button sale">Vends tes articles</div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
