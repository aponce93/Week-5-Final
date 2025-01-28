import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart, clearCart }) => {
  const taxRate = 0.1;
  const navigate = useNavigate();

  const calculateTotal = () => {
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    return (total + total * taxRate).toFixed(2);
  };

  const handleCheckout = () => {
    navigate("/checkout"); // Navigate to the Checkout page
  };

  const handleClearCart = () => {
    clearCart(); // Call the clearCart function passed from App.js
  };
  const handleCreditCardPage = () => {
    navigate("/credit-card");
  };
  
  <button onClick={handleCreditCardPage} style={{ marginLeft: "10px" }}>
    Add Credit Card
  </button>

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index}>
              <p>Subscription: ${item.price}</p>
            </div>
          ))}
          <h2>Total (with tax): ${calculateTotal()}</h2>
          <button onClick={handleCheckout}>Checkout</button>
          <button onClick={handleClearCart} style={{ marginLeft: "10px" }}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;