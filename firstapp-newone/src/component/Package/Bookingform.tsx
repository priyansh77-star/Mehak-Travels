import { useState, ChangeEvent, FormEvent } from "react";
import BookingSummary from "./Bookingsummary";

type BookingFormProps = {
  destination: string;
  city: string;
  onBackToHome: () => void;
  onBackToPackages?: () => void;
};

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  travelDate: string;
  returnDate: string;
  numberOfTravellers: number;
  transport: string;
  hotel: string;
};

function BookingForm({
  destination,
  city,
  onBackToHome,
  onBackToPackages,
}: BookingFormProps) {
  const [showSummary, setShowSummary] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    travelDate: "",
    returnDate: "",
    numberOfTravellers: 1,
    transport: "Flight",
    hotel: "Hotel by Us",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "numberOfTravellers"
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowSummary(true);
  };

  if (showSummary) {
    return (
      <BookingSummary
        destination={destination}
        city={city}
        formData={formData}
        onBackToHome={onBackToHome}
      />
    );
  }

  return (
    <div className="form-container">
      <div className="form">

        <h2>Book Your Trip</h2>

        <p>
          <b>Destination:</b> {destination} - {city}
        </p>

        <form onSubmit={handleSubmit}>

          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label>Travel Date</label>
          <input
            type="date"
            name="travelDate"
            value={formData.travelDate}
            onChange={handleChange}
            required
          />

          <label>Return Date</label>
          <input
            type="date"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleChange}
            required
          />

          <label>Number of Travellers</label>
          <input
            type="number"
            name="numberOfTravellers"
            min={1}
            value={formData.numberOfTravellers}
            onChange={handleChange}
            required
          />

          

        

          
            

            

           
          

<button type="submit">
            Continue
          </button>

        </form>

        {onBackToPackages && (
          <button
            type="button"
            onClick={onBackToPackages}
            style={{ marginTop: "4px" }}
          >
            ← Back to Packages
          </button>
        )}

      </div>
    </div>
  );
}

export default BookingForm;