import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaShoppingCart } from "react-icons/fa"; // Icon for Cart

const Navbar = ({ cartCount, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* Updated Branding */}
        <Link to="/" className="navbar-brand">Home</Link>
      </div>
      <div className="navbar-center">
        <Link to="/about" className="navbar-link">About</Link>
        <Link to="/subscription" className="navbar-link">Subscription</Link>
      </div>
      <div className="navbar-right">
        {/* Cart Button */}
        <Link to="/cart" className="navbar-button">
          <FaShoppingCart />
          <span className="cart-count">{cartCount}</span>
        </Link>

        {/* Logout Button */}
        <button className="navbar-button logout-button" onClick={onLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;