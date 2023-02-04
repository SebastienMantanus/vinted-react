import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useState } from "react";
import Cookies from "js-cookie";
import Publish from "./pages/Publish";
import Payment from "./pages/Payment";

function App() {
  const [token, setToken] = useState(Cookies.get("token") || "");
  const [userId, setUserId] = useState("");
  const [searchRequest, setSearchRequest] = useState("");
  const [priceFilter, setPriceFilter] = useState({
    min: "",
    max: "",
    display: "",
    page: "",
  });

  return (
    <Router>
      <Header
        token={token}
        setToken={setToken}
        searchRequest={searchRequest}
        setSearchRequest={setSearchRequest}
        priceFilter={priceFilter}
        setPriceFilter={setPriceFilter}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              searchRequest={searchRequest}
              priceFilter={priceFilter}
              setPriceFilter={setPriceFilter}
            />
          }
        />
        <Route path="/product/:id" element={<Product />} />
        <Route
          path="/signup"
          element={
            <Signup token={token} setToken={setToken} setUserId={setUserId} />
          }
        />
        <Route
          path="/login"
          element={
            <Login token={token} setToken={setToken} setUserId={setUserId} />
          }
        />
        <Route path="/publish" element={<Publish token={token} />} />
        <Route
          path="/payment"
          element={<Payment token={token} userId={userId} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
