import React, { useState } from "react";
import "./Checkout.css"; // Optional: Add styling

const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    cardNumber: "",
    expiration: "",
    cvv: "",
    billingAddress: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Checkout Information:", formData);
    alert("Checkout information saved to console!");
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit} className="checkout-form">
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />
        </label>
        <label>
          Card Number:
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="1234 5678 9012 3456"
            pattern="\d{4} \d{4} \d{4} \d{4}"
            maxLength="19"
            required
          />
        </label>
        <label>
          Expiration Date:
          <input
            type="text"
            name="expiration"
            value={formData.expiration}
            onChange={handleChange}
            placeholder="MM/YY"
            pattern="\d{2}/\d{2}"
            required
          />
        </label>
        <label>
          CVV:
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            placeholder="123"
            pattern="\d{3}"
            maxLength="3"
            required
          />
        </label>
        <label>
          Billing Address:
          <textarea
            name="billingAddress"
            value={formData.billingAddress}
            onChange={handleChange}
            placeholder="123 Main St, City, State, ZIP"
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Checkout;