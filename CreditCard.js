import React, { useState } from "react";

const CreditCard = () => {
  const [cardDetails, setCardDetails] = useState({
    fullName: "",
    cardNumber: "",
    expiration: "",
    cvv: "",
    billingAddress: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Credit Card Details Saved:", cardDetails);
    localStorage.setItem("creditCard", JSON.stringify(cardDetails)); // Save to localStorage
    alert("Credit card information saved!");
  };

  return (
    <div style={{ maxWidth: "500px", margin: "20px auto" }}>
      <h1>Enter Credit Card Information</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={cardDetails.fullName}
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
            value={cardDetails.cardNumber}
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
            value={cardDetails.expiration}
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
            value={cardDetails.cvv}
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
            value={cardDetails.billingAddress}
            onChange={handleChange}
            placeholder="123 Main St, City, State, ZIP"
            required
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default CreditCard;