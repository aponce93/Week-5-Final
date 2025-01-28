import React from "react";
import "./Subscription.css"; // Import the CSS file for styling

const Subscription = ({ addToCart }) => {
  const subscriptions = [
    { id: 1, price: 9.99 },
    { id: 2, price: 15.99 },
    { id: 3, price: 19.99 },
  ];

  return (
    <div className="subscription-container">
      <h1>Subscription Plans</h1>
      <div className="subscription-options">
        {subscriptions.map((sub) => (
          <div key={sub.id} className="subscription-card">
            <div className="subscription-price">${sub.price}</div>
            <button className="subscribe-button" onClick={() => addToCart(sub)}>
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscription;