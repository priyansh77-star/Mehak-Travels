import React, { useState } from "react";

interface PackageProps {
  destination: string;
  city: string;
  onBack: () => void;
}

function Packagedetails({ destination, city, onBack }: PackageProps) {
  const [showPayment, setShowPayment] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  const [cardData, setCardData] = useState({
    name: "",
    number: "",
    expiry: "",
    cvv: "",
  });

  // Skips backend verification and instantly completes payment
  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsPaid(true);
  };

  return (
    <div style={{ padding: "40px 20px", display: "flex", justifyContent: "center" }}>
      <div style={{ background: "white", padding: "30px", borderRadius: "10px", width: "100%", maxWidth: "520px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)", color: "#333" }}>
        
        {!showPayment ? (
          <>
            <h2 style={{ textAlign: "center", marginBottom: "15px" }}>Package Details</h2>
            <div style={{ background: "#f8f9fa", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}>
              <p><strong>Destination:</strong> {destination}</p>
              <p><strong>City:</strong> {city}</p>
              <p><strong>Duration:</strong> 5 Days / 4 Nights</p>
              <p><strong>Inclusions:</strong> Hotel, Breakfast, Sightseeing, Transfers</p>
              <h3 style={{ color: "#ff4757", marginTop: "10px" }}>Price: ₹12,500 / Person</h3>
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <button onClick={() => setShowPayment(true)} style={{ flex: 1, padding: "12px", background: "#ff4757", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" }}>
                Book Now
              </button>
              <button onClick={onBack} style={{ padding: "12px", background: "#ccc", color: "#333", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                Back
              </button>
            </div>
          </>
        ) : !isPaid ? (
          <>
            <h2 style={{ textAlign: "center", marginBottom: "15px" }}>Payment Details</h2>
            <div style={{ background: "#f8f9fa", padding: "10px 15px", borderRadius: "8px", marginBottom: "15px" }}>
              <strong>Package:</strong> {destination} ({city}) — ₹12,500
            </div>

            <form onSubmit={handlePaymentSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div>
                <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Cardholder Name:</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={cardData.name}
                  onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
                  style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc", boxSizing: "border-box" }}
                />
              </div>

              <div>
                <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Card Number:</label>
                <input
                  type="text"
                  required
                  placeholder="4242 4242 4242 4242"
                  maxLength={19}
                  value={cardData.number}
                  onChange={(e) => setCardData({ ...cardData, number: e.target.value })}
                  style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc", boxSizing: "border-box" }}
                />
              </div>

              <div style={{ display: "flex", gap: "10px" }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Expiry:</label>
                  <input
                    type="text"
                    required
                    placeholder="MM/YY"
                    maxLength={5}
                    value={cardData.expiry}
                    onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
                    style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc", boxSizing: "border-box" }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>CVV:</label>
                  <input
                    type="password"
                    required
                    placeholder="123"
                    maxLength={4}
                    value={cardData.cvv}
                    onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                    style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc", boxSizing: "border-box" }}
                  />
                </div>
              </div>

              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <button type="submit" style={{ flex: 1, padding: "12px", background: "#2563eb", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" }}>
                  Pay Now
                </button>
                <button type="button" onClick={() => setShowPayment(false)} style={{ padding: "12px", background: "#ccc", color: "#333", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                  Back
                </button>
              </div>
            </form>
          </>
        ) : (
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "50px", color: "green", marginBottom: "10px" }}>✔</div>
            <h2 style={{ color: "green", marginBottom: "10px" }}>Payment Successful</h2>
            <p style={{ color: "#334155", marginBottom: "20px" }}>
              Your tour package for <strong>{city}, {destination}</strong> is confirmed!
            </p>
            <button onClick={onBack} style={{ padding: "10px 20px", background: "#2563eb", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Back to Home
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default Packagedetails;