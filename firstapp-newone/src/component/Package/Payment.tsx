import React, { useState } from "react";

// Updated interface containing all props passed from Bookingsummary.tsx
interface PaymentProps {
  destination?: string;
  city?: string;
  amount?: number;
  onPaymentSuccess?: () => void;
  onSuccess?: () => void;
  onBack?: () => void;
}

function Payment({
  destination,
  city,
  amount = 12500,
  onPaymentSuccess,
  onSuccess,
  onBack,
}: PaymentProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePayNow = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);

    // Trigger parent callbacks if provided
    if (onPaymentSuccess) {
      onPaymentSuccess();
    }
    if (onSuccess) {
      onSuccess();
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "20px", minHeight: "60vh" }}>
      <div style={{ background: "white", padding: "30px", borderRadius: "10px", width: "100%", maxWidth: "420px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)", color: "#333" }}>
        
        {!isSuccess ? (
          <>
            <h2 style={{ textAlign: "center", marginBottom: "15px" }}>Payment Details</h2>
            
            {(destination || city) && (
              <div style={{ background: "#f8f9fa", padding: "12px 15px", borderRadius: "8px", marginBottom: "15px", fontSize: "14px" }}>
                {destination && <p style={{ margin: "2px 0" }}><strong>Destination:</strong> {destination}</p>}
                {city && <p style={{ margin: "2px 0" }}><strong>City:</strong> {city}</p>}
                <p style={{ margin: "2px 0" }}><strong>Amount:</strong> ₹{amount}</p>
              </div>
            )}

            <form onSubmit={handlePayNow} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div>
                <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Cardholder Name:</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
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
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
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
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
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
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc", boxSizing: "border-box" }}
                  />
                </div>
              </div>

              <button
                type="submit"
                style={{ marginTop: "15px", width: "100%", padding: "12px", border: "none", borderRadius: "5px", background: "#2563eb", color: "white", fontSize: "16px", cursor: "pointer", fontWeight: "bold" }}
              >
                Pay Now
              </button>

              {onBack && (
                <button
                  type="button"
                  onClick={onBack}
                  style={{ width: "100%", padding: "10px", border: "none", borderRadius: "5px", background: "#ccc", color: "#333", cursor: "pointer" }}
                >
                  Back
                </button>
              )}
            </form>
          </>
        ) : (
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "50px", color: "green", marginBottom: "10px" }}>✔</div>
            <h2 style={{ color: "green", marginBottom: "10px" }}>Payment Successful</h2>
            <p style={{ color: "#334155", marginBottom: "20px" }}>Your booking has been confirmed!</p>
            {onBack && (
              <button
                onClick={onBack}
                style={{ padding: "10px 20px", background: "#2563eb", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
              >
                Back to Summary
              </button>
            )}
          </div>
        )}

      </div>
    </div>
  );
}

export default Payment;