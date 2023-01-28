import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useState } from "react";
import Cookies from "js-cookie";

function App() {
  const [token, setToken] = useState(Cookies.get("token") || "");
  const [searchRequest, setSearchRequest] = useState("");

  return (
    <Router>
      <Header
        token={token}
        setToken={setToken}
        searchRequest={searchRequest}
        setSearchRequest={setSearchRequest}
      />
      <Routes>
        <Route path="/" element={<Home searchRequest={searchRequest} />} />
        <Route path="/product/:id" element={<Product />} />
        <Route
          path="/signup"
          element={<Signup token={token} setToken={setToken} />}
        />
        <Route
          path="/login"
          element={<Login token={token} setToken={setToken} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
