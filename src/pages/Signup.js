import { useState } from "react";

const Signup = () => {
  const [username, SetUsername] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [newsletter, SetNewsletter] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
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
        <button>S'inscrire</button>
      </form>
    </div>
  );
};

export default Signup;
