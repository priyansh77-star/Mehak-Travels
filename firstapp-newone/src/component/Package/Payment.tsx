import { useState } from "react";

function Payment({
  destination,
  city,
  onPaymentSuccess,
  onBack,
}: {
  destination: string;
  city: string;
  onPaymentSuccess: () => void;
  onBack: () => void;
}) {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  return (
    <div className="home-container">
      <h2>Payment</h2>
      <p>Complete your booking for {city} in {destination}.</p>

      <div className="form" style={{ maxWidth: "420px", margin: "0 auto", textAlign: "left" }}>
        <h3>Trip Summary</h3>
        <p><strong>Destination:</strong> {destination}</p>
        <p><strong>City:</strong> {city}</p>

        <label>Cardholder Name</label>
        <input
          type="text"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          placeholder="John Doe"
        />

        <label>Card Number</label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="4242 4242 4242 4242"
        />

        <label>Expiry</label>
        <input
          type="text"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          placeholder="MM/YY"
        />

        <label>CVV</label>
        <input
          type="text"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          placeholder="123"
        />

        <button
          style={{ marginTop: "12px", width: "100%" }}
          onClick={onPaymentSuccess}
        >
          Pay Now
        </button>

        <button
          style={{ marginTop: "16px", width: "100%" }}
          onClick={onBack}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default Payment;
