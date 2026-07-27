import { useState } from "react";
import Payment from "./Payment";
import BookingSuccess from "./BookingSuccess";

type BookingSummaryProps = {
  destination: string;
  city: string;
  formData: {
    fullName: string;
    email: string;
    phone: string;
    travelDate: string;
    returnDate: string;
    numberOfTravellers: number;
    transport: string;
    hotel: string;
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

  const handlePaymentSuccess = async () => {
    // Save booking to backend
    try {
      const res = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          age: "",
          gender: "",
          packageType: `${destination} - ${city}`,
          noOfTraveller: String(formData.numberOfTravellers),
          password: "",
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        console.error("Failed to save booking:", data.message);
      } else {
        console.log("Booking saved successfully:", data.booking?._id);
      }
    } catch (err) {
      console.error("Failed to save booking:", err);
    }
    setShowPayment(false);
    setShowSuccess(true);
  };

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
        onPaymentSuccess={handlePaymentSuccess}
        onBack={() => setShowPayment(false)}
      />
    );
  }

return (
    <div className="home-content">
    <div className="form-container">
      <div className="form">

        <h2>Booking Summary</h2>

        <p><b>Destination:</b> {destination}</p>
        <p><b>City:</b> {city}</p>
        <p><b>Name:</b> {formData.fullName}</p>
        <p><b>Email:</b> {formData.email}</p>
        <p><b>Phone:</b> {formData.phone}</p>
        <p><b>Travel Date:</b> {formData.travelDate}</p>
        <p><b>Return Date:</b> {formData.returnDate}</p>
        <p><b>Travellers:</b> {formData.numberOfTravellers}</p>
        <p><b>Transport:</b> {formData.transport}</p>
        <p><b>Hotel:</b> {formData.hotel}</p>

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
    </div>
  );
}

export default BookingSummary;
