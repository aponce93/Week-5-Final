import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home"; // Updated Home component
import About from "./Components/About";
import Subscription from "./Components/Subscription";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import CreditCard from "./Components/CreditCard";

const App = () => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null); // User state to track login/guest

  const addToCart = (item) => setCart([...cart, item]);
  const clearCart = () => setCart([]);

  const handleLoginSuccess = (credentialResponse) => {
    console.log("User logged in:", credentialResponse);
    setUser(credentialResponse.credential);
  };

  const handleContinueAsGuest = () => {
    setUser("guest"); // Set user as guest
  };

  const handleLogout = () => setUser(null);

  if (!user) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Login Required</h1>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={() => console.log("Login Failed")}
        />
        <div style={{ marginTop: "20px" }}>
          <button
            onClick={handleContinueAsGuest}
            style={{
              padding: "10px 20px",
              fontSize: "1rem",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Continue as Guest
          </button>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Navbar cartCount={cart.length} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Updated Home Component */}
        <Route path="/about" element={<About />} />
        <Route path="/subscription" element={<Subscription addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} clearCart={clearCart} />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/credit-card" element={<CreditCard />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;