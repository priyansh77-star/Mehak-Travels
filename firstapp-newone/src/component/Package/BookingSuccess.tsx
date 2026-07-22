type BookingSuccessProps = {
  destination?: string;
  city?: string;
  onBackToHome: () => void;
};

function BookingSuccess({
  destination,
  city,
  onBackToHome,
}: BookingSuccessProps) {
  return (
    <div className="form-container">
      <div className="form">

        <h2>🎉 Booking Successful</h2>

        {destination && (
          <p>
            <b>Destination:</b> {destination}
          </p>
        )}

        {city && (
          <p>
            <b>City:</b> {city}
          </p>
        )}

        <hr />

        <p> Thank you for choosing Mehak Travels.</p>

        <p>Your booking has been confirmed successfully.</p>

        <p>Our team will contact you soon with your travel details.</p>

        <p>Have a safe and happy journey! </p>
         <p>For Further Query Contact us at mehaktravels21@gmail.com</p>
         
        <br />

        <button onClick={onBackToHome}>
          Back to Home
        </button>

      </div>
    </div>
  );
}

export default BookingSuccess;