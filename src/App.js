import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Signup from "./pages/Signup";
import { useState } from "react";
import Cookies from "js-cookie";

function App() {
  const [token, setToken] = useState(Cookies.get("token") || "");

  return (
    <Router>
      <Header token={token} setToken={setToken} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
