import { useState } from "react";
import BookingForm from "./Bookingform";

export const packages = {
  Manali: [
    {
      name: "Budget Package",
      price: "₹12,999 per person ",
      duration: "4 Days / 3 Nights",
      hotel: "3 Star",
      transport: "Bus",
      meals: "Breakfast + Dinner",
      
    },
    {
      name: "Premium Package",
      price: "₹18,999 per person ",
      duration: "5 Days / 4 Nights",
      hotel: "4 Star",
      transport: "Volvo",
      meals: "All Meals",
    },
  ],

  Kerala: [
    {
      name: "Budget Package",
      price: "₹15,999 per person",
      duration: "5 Days / 4 Nights",
      hotel: "3 Star",
      transport: "Train",
      meals: "Breakfast + Dinner",
    },
  ],

  Mumbai: [
    {
      name: "Budget Package",
      price: "₹12,999",
      duration: "4 Days / 3 Nights",
      hotel: "3 Star",
      transport: "Bus",
      meals: "Breakfast + Dinner",
    },
    {
      name: "Premium Package",
      price: "₹29,999",
      duration: "5 Days / 4 Nights",
      hotel: "5 Star",
      transport: "Flight",
      meals: "All Meals",
    },
  ],

  Goa: [
    {
      name: "Budget Package",
      price: "₹14,999",
      duration: "4 Days / 3 Nights",
      hotel: "3 Star",
      transport: "Train",
      meals: "Breakfast + Dinner",
    },
    {
      name: "Premium Package",
      price: "₹24,999",
      duration: "5 Days / 4 Nights",
      hotel: "4 Star",
      transport: "Flight",
      meals: "All Meals",
    },
  ],
};

type PackageDetailsProps = {
  destination: string;
  city: string;
  onBack: () => void;
};

function PackageDetails({ destination, city, onBack }: PackageDetailsProps) {
  const [showBookingForm, setShowBookingForm] = useState(false);

  // Find matching packages — try destination name first, then city name
  const pkgKey = Object.keys(packages).find(
    (key) =>
      key.toLowerCase() === destination.toLowerCase() ||
      key.toLowerCase() === city.toLowerCase()
  );
  const pkgList = pkgKey ? packages[pkgKey as keyof typeof packages] : null;

  if (showBookingForm) {
    return (
      <BookingForm
        destination={destination}
        city={city}
        onBackToHome={onBack}
        onBackToPackages={() => setShowBookingForm(false)}
      />
    );
  }

  return (
    <div className="home-container">
      <h1>
        {destination} - {city}
      </h1>

      {pkgList && pkgList.length > 0 ? (
        <>
          <h2>Available Packages</h2>

          <div className="destination-container">
            {pkgList.map((pkg, index) => (
              <div key={index} className="destination-card">
                <h3>{pkg.name}</h3>
                <p>
                  <strong>Price:</strong> {pkg.price}
                </p>
                <p>
                  <strong>Duration:</strong> {pkg.duration}
                </p>
                <p>
                  <strong>Hotel:</strong> {pkg.hotel}
                </p>
                <p>
                  <strong>Transport:</strong> {pkg.transport}
                </p>
                <p>
                  <strong>Meals:</strong> {pkg.meals}
                </p>

                <br />

                <button onClick={() => setShowBookingForm(true)}>
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <p>Explore our packages for {destination} - {city}.</p>
          <p>Contact us for customized package details!</p>

          <br />

          <button onClick={() => setShowBookingForm(true)}>
            Continue to Book
          </button>
        </>
      )}

      <br />

      <button onClick={onBack}>← Back</button>
    </div>
  );
}

export default PackageDetails;

