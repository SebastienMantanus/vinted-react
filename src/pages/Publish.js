import { Navigate } from "react-router-dom";

const Publish = ({ token }) => {
  return token ? (
    <div className="publish-background">
      <container className="publish-container">
        <h1>Vends ton article</h1>
        <form className="publish-form">
          <div className="publish-form-divs">
            <input type="file"></input>
          </div>
          <div className="publish-form-divs">
            <input type="text"></input>
            <input></input>
          </div>
        </form>
      </container>
    </div>
  ) : (
    <Navigate to="/signup" />
  );
};
export default Publish;
