import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate, Link } from "react-router-dom";

const Signup = ({ token, setToken, setUserId }) => {
  const [username, SetUsername] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [newsletter, SetNewsletter] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `https://lereacteur-vinted-api.herokuapp.com/user/signup`,
        {
          email: email,
          username: username,
          password: password,
          newsletter: newsletter,
        }
      );
      Cookies.set("token", response.data.token, { expires: 7 });
      setToken(response.data.token);
      setUserId(response.data._id);

      navigate("/");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="form-container">
      <h1>S'inscrire</h1>
      <form onSubmit={handleSubmit}>
        <input
          id="username"
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(event) => {
            SetUsername(event.target.value);
          }}
        ></input>
        <input
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => {
            SetEmail(event.target.value);
          }}
        ></input>
        <input
          id="password"
          type="password"
          placeholder="Mot de Passe"
          value={password}
          onChange={(event) => {
            SetPassword(event.target.value);
          }}
        ></input>
        <div>
          <input
            id="newsletter"
            type="checkbox"
            value={newsletter}
            onChange={(event) => {
              SetNewsletter(newsletter ? false : true);
            }}
          ></input>
          <label id="newsletter">S'inscrire à notre Newsletter</label>
        </div>
        <button type="submit">S'inscrire</button>
      </form>
      <Link to="/login">
        <p className="linkto">Déjà un compte ? connectez-vous !</p>
      </Link>
    </div>
  );
};

export default Signup;
