import { useState } from "react";
import Payment from "./Payment";
import BookingSuccess from "./BookingSuccess";
import { getCityPrices, getRoutePrice } from "./transportPrices";

type BookingSummaryProps = {
  destination: string;
  city: string;
  formData: {
    fromDestination: string;
    toDestination: string;
    fullName: string;
    email: string;
    phone: string;
    travelDate: string;
    returnDate: string;
    numberOfTravellers: number;
    transport: string;
    hotel: string;
    packageName?: string;
    packagePrice?: string;
    packageNumericPrice?: number;
  };
  onBackToHome: () => void;
  onBackToForm?: () => void;
};

function BookingSummary({
  destination,
  city,
  formData,
  onBackToHome,
  onBackToForm,
}: BookingSummaryProps) {
  const [showPayment, setShowPayment] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  if (showSuccess) {
    return (
      <BookingSuccess
        destination={destination}
        city={city}
        onBackToHome={onBackToHome}
      />
    ); 
  }

  if (showPayment) {
    return (
      <Payment
        destination={destination}
        city={city}
        onPaymentSuccess={() => {
          setShowPayment(false);
          setShowSuccess(true);
        }}
        onBack={() => setShowPayment(false)}
      />
    );
  }

return (
    <div className="form-container">
      <div className="form">

        <h2>Booking Summary</h2>

        {formData.packageName && (
          <div style={{ backgroundColor: "#e8f5e9", border: "1px solid #4caf50", borderRadius: "8px", padding: "12px", margin: "10px 0", textAlign: "center" }}>
            <p style={{ margin: 0, textAlign: "center" }}><b>Package:</b> {formData.packageName}</p>
            <p style={{ margin: 0, textAlign: "center" }}><b>Package Price:</b> {formData.packagePrice}</p>
          </div>
        )}

<p><b>From:</b> {formData.fromDestination || destination}</p>
        <p><b>To:</b> {formData.toDestination || city}</p>
        <p><b>Name:</b> {formData.fullName}</p>
        <p><b>Email:</b> {formData.email}</p>
        <p><b>Phone:</b> {formData.phone}</p>
        <p><b>Travel Date:</b> {formData.travelDate}</p>
        <p><b>Return Date:</b> {formData.returnDate}</p>
        <p><b>Travellers:</b> {formData.numberOfTravellers}</p>
<p><b>Transport:</b> {formData.transport} - ₹{getCityPrices(formData.toDestination || city)[formData.transport as keyof ReturnType<typeof getCityPrices>]?.toLocaleString() || 0}/person</p>
        <p><b>Hotel:</b> {formData.hotel}</p>

        <hr style={{ margin: "16px 0" }} />

        <h3>💰 Price Breakdown</h3>
        {formData.packageNumericPrice && formData.packageNumericPrice > 0 ? (
          <>
            <p><b>Package Price ({formData.numberOfTravellers} × ₹{formData.packageNumericPrice.toLocaleString()}):</b> ₹{(formData.packageNumericPrice * formData.numberOfTravellers).toLocaleString()}</p>
            <p><b>Transport Cost ({formData.numberOfTravellers} × ₹{getCityPrices(formData.toDestination || city)[formData.transport as keyof ReturnType<typeof getCityPrices>]?.toLocaleString() || 0}):</b> ₹{((getCityPrices(formData.toDestination || city)[formData.transport as keyof ReturnType<typeof getCityPrices>] || 0) * formData.numberOfTravellers).toLocaleString()}</p>
            <p style={{ fontSize: "18px", fontWeight: "bold", color: "#2e7d32" }}>
              <b>Total (Package + Transport):</b> ₹{((formData.packageNumericPrice * formData.numberOfTravellers) + ((getCityPrices(formData.toDestination || city)[formData.transport as keyof ReturnType<typeof getCityPrices>] || 0) * formData.numberOfTravellers)).toLocaleString()}
            </p>
          </>
        ) : (
          <>
            <p><b>Total Transport:</b> ₹{((getCityPrices(formData.toDestination || city)[formData.transport as keyof ReturnType<typeof getCityPrices>] || 0) * formData.numberOfTravellers).toLocaleString()}</p>
            <p style={{ fontSize: "18px", fontWeight: "bold", color: "#2e7d32" }}>
              <b>Total Price:</b> ₹{((getCityPrices(formData.toDestination || city)[formData.transport as keyof ReturnType<typeof getCityPrices>] || 0) * formData.numberOfTravellers).toLocaleString()}
            </p>
          </>
        )}

        <br />

<button onClick={() => setShowPayment(true)}>
          Proceed to Payment
        </button>

        <br />
        {onBackToForm && (
          <button onClick={onBackToForm} style={{ marginTop: "4px" }}>
            ← Back to Booking Form
          </button>
        )}

      </div>
    </div>
  );
}

export default BookingSummary;
