import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Login = ({ token, setToken }) => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [failConnexion, SetFailConnexion] = useState();

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email,
          password,
        }
      );
      response.data.token && setToken(response.data.token);
      Cookies.set("token", token, { expires: 7 });
      SetFailConnexion(false);
      navigate("/");
    } catch (error) {
      SetFailConnexion(true);
      console.log(error.response);
    }
  };
  return (
    <div onSubmit={handleSubmit} className="form-container">
      <h1>Connectez-vous à votre compte</h1>
      <form>
        <input
          id="email"
          type="email"
          value={email}
          placeholder="Adresse email"
          onChange={(event) => {
            SetEmail(event.target.value);
          }}
        ></input>
        <input
          id="password"
          type="password"
          value={password}
          placeholder="Mot de passe"
          onChange={(event) => {
            SetPassword(event.target.value);
          }}
        ></input>
        <button>Se connecter</button>
        {failConnexion && <p>Echec de connexion !</p>}
      </form>
    </div>
  );
};

export default Login;
