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

const destinationBackgrounds: Record<string, string> = {
  Manali: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy3cYuzyj4_u20T9rmdVMrj9sQ3RcuW8P-a7fXLtKHUw&s=10')",
  Goa: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiNiYKe3OziQyEEh6yoJltraLA0U2pLc6wgy2p9lmRqA&s=10')",
  Mumbai: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSskNpgdJ2WkjEovxWGAtQGtFcaBrGKYhAcS4o8wUge4A&s=10')",
  Kerala: "url('https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800')",
  // State backgrounds
  "Andhra Pradesh": "url('https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800')",
  "Arunachal Pradesh": "url('https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800')",
  Assam: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkq07ukQWbheT6er13-Lpf-N999YQwPZWZuDsytA6UlA&s=10')",
  Bihar: "url('https://images.unsplash.com/photo-1566837945700-30057527ade0?w=800')",
  Chhattisgarh: "url('https://images.unsplash.com/photo-1612160629320-3c5d1f6fc0b7?w=800')",
  Gujarat: "url('https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800')",
  Haryana: "url('https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?w=800')",
  "Himachal Pradesh": "url('https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800')",
  Jharkhand: "url('https://images.unsplash.com/photo-1580136579312-94651dfd596d?w=800')",
  Karnataka: "url('https://images.unsplash.com/photo-1596178060810-72680e16d5d1?w=800')",
  "Madhya Pradesh": "url('https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800')",
  Maharashtra: "url('https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=800')",
  Punjab: "url('https://images.unsplash.com/photo-1587847064884-3e6e1a1b5e5e?w=800')",
  Rajasthan: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgAaeI2EL2RydZnRwmIQ7r7ocOyT2B4k-otl1nSa1VOg&s=10')",
  "Tamil Nadu": "url('https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800')",
  "Uttar Pradesh": "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgxlw1LjXcoWWolVVt9dMDIOW5DoPMNTTgsKaf3oF8Ew&s=10')",
  Uttarakhand: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRejMD-M6bu6dBhvhO99yMv0X_CL24NFfCYz5R9r5kLug&s=10')",
  "West Bengal": "url('https://images.unsplash.com/photo-1599726689145-3d2e5a5e4e7e?w=800')",
};

function PackageDetails({ destination, city, onBack }: PackageDetailsProps) {
  const [showBookingForm, setShowBookingForm] = useState(false);

  // Determine background image based on destination or city name
  const bgKey = Object.keys(destinationBackgrounds).find(
    (key) =>
      key.toLowerCase() === destination.toLowerCase() ||
      key.toLowerCase() === city.toLowerCase()
  );
  const backgroundImage = bgKey ? destinationBackgrounds[bgKey] : "none";

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
    <div className="home-container" style={{ backgroundImage, backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed", minHeight: "100vh" }}>
      <div style={{ backgroundColor: "rgba(255,255,255,0.85)", padding: "30px", borderRadius: "12px", maxWidth: "900px", margin: "0 auto" }}>
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
    </div>
  );
}

export default PackageDetails;

