import { useState, ChangeEvent, FormEvent } from "react";
import BookingSummary from "./Bookingsummary";
import { getCityPrices, getRoutePrice } from "./transportPrices";

const allCities = [
  "Delhi", "Mumbai", "Goa", "Jaipur", "Chandigarh", "Bangalore",
  "Manali", "Shimla", "Dharamshala", "Kullu", "Spiti", "Chamba",
  "Kerala", "Kochi", "Alleppey", "Munnar", "Kumarakom", "Thekkady", "Kovalam",
  "Chennai", "Coimbatore", "Madurai", "Ooty", "Kodaikanal", "Rameswaram",
  "Hyderabad", "Warangal", "Karimnagar", "Nizamabad", "Khammam",
  "Kolkata", "Darjeeling", "Siliguri", "Shantiniketan",
  "Lucknow", "Agra", "Varanasi", "Prayagraj", "Noida", "Ayodhya",
  "Patna", "Gaya", "Bhagalpur",
  "Bhubaneswar", "Puri", "Cuttack", "Konark",
  "Ahmedabad", "Surat", "Vadodara", "Rajkot", "Dwarka",
  "Amritsar", "Ludhiana", "Jalandhar", "Patiala",
  "Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain", "Khajuraho",
  "Pune", "Mahabaleshwar", "Nashik", "Aurangabad", "Nagpur",
  "Dehradun", "Nainital", "Mussoorie", "Rishikesh", "Haridwar", "Auli",
  "Ranchi", "Jamshedpur", "Dhanbad", "Deoghar",
  "Guwahati", "Tezpur", "Jorhat", "Silchar",
  "Gangtok", "Pelling", "Namchi", "Lachung",
  "Imphal", "Shillong", "Cherrapunji", "Aizawl", "Kohima", "Dimapur", "Agartala",
  "Srinagar", "Jammu", "Pahalgam", "Gulmarg", "Katra",
  "Leh", "Kargil", "Nubra",
  "Puducherry", "Port Blair", "Havelock",
  "Silvassa", "Daman", "Diu", "Kavaratti",
  "Visakhapatnam", "Vijayawada", "Tirupati", "Amaravati", "Guntur", "Nellore",
  "Itanagar", "Tawang", "Ziro", "Bomdila", "Pasighat",
  "Panaji", "Margao", "Vasco da Gama", "Mapusa", "Anjuna",
  "Gurugram", "Faridabad", "Hisar", "Karnal",
  "Bengaluru", "Mysuru", "Mangaluru", "Hubballi", "Coorg", "Hampi",
  "Udaipur", "Jodhpur", "Jaisalmer", "Bikaner", "Mount Abu",
  "Coimbatore", "Madurai", "Ooty",
  "Agra", "Varanasi", "Prayagraj",
  "Rishikesh", "Haridwar", "Auli",
  "New Delhi", "Old Delhi", "Dwarka", "Rohini", "Lajpat Nagar", "Karol Bagh",
];

// Re-export getCityPrices and getRoutePrice from shared utility
// (cityTransportPrices data is centralized in transportPrices.ts)

type BookingFormProps = {
  destination: string;
  city: string;
  selectedPackage?: { name: string; price: string; duration?: string };
  onBackToHome: () => void;
  onBackToPackages?: () => void;
};

type FormData = {
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
  packageName: string;
  packagePrice: string;
  packageNumericPrice: number;
};

function BookingForm({
  destination,
  city,
  selectedPackage,
  onBackToHome,
  onBackToPackages,
}: BookingFormProps) {
  const [showSummary, setShowSummary] = useState(false);
  const [returnDateError, setReturnDateError] = useState("");

  // Parse numeric price from package price string (e.g., "₹12,999" -> 12999)
  const parseNumericPrice = (priceStr: string): number => {
    return parseInt(priceStr.replace(/[₹,]/g, '').replace(/[^0-9]/g, ''), 10) || 0;
  };

  // Extract number of days from duration string (e.g., "4 Days / 3 Nights" -> 4)
  const getPackageDays = (): number => {
    if (!selectedPackage?.duration) return 1;
    const match = selectedPackage.duration.match(/(\d+)\s*Days/i);
    return match ? parseInt(match[1], 10) : 1;
  };

  const minTripDays = getPackageDays();

  // Calculate minimum return date based on travel date + package duration
  const getMinReturnDate = (travelDate: string): string => {
    if (!travelDate) return "";
    const date = new Date(travelDate);
    date.setDate(date.getDate() + (minTripDays - 1)); // e.g., for 4 days, return on 4th day
    return date.toISOString().split('T')[0];
  };

  // Get today's date in YYYY-MM-DD format for min attribute
  const getTodayString = (): string => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const [formData, setFormData] = useState<FormData>({
    fromDestination: "",
    toDestination: destination !== "General" ? city : "",
    fullName: "",
    email: "",
    phone: "",
    travelDate: "",
    returnDate: "",
    numberOfTravellers: 1,
    transport: "Flight",
    hotel: "Hotel by Us",
    packageName: selectedPackage?.name || "",
    packagePrice: selectedPackage?.price || "",
    packageNumericPrice: selectedPackage ? parseNumericPrice(selectedPackage.price) : 0,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updated = {
        ...prev,
        [name]:
          name === "numberOfTravellers"
            ? Number(value)
            : value,
      };

          // When travel date changes, auto-calculate return date based on package duration
      // Only when booking with a package (selectedPackage exists)
      if (name === "travelDate" && selectedPackage?.duration && value) {
        const autoReturnDate = getMinReturnDate(value);
        updated.returnDate = autoReturnDate;
      }

      return updated;
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedPackage) {
      // Package booking: validate return date against package duration
      const minReturn = getMinReturnDate(formData.travelDate);
      if (formData.returnDate < minReturn) {
        setReturnDateError(`Return date must be at least ${minTripDays} days after travel date (minimum: ${minReturn})`);
        return;
      }
    } else {
      // Normal booking: basic validation - return date must be after travel date
      if (formData.returnDate && formData.travelDate && formData.returnDate <= formData.travelDate) {
        setReturnDateError("Return date must be after travel date");
        return;
      }
    }
    setShowSummary(true);
  };

  if (showSummary) {
    return (
      <BookingSummary
        destination={destination}
        city={city}
        formData={formData}
        onBackToHome={onBackToHome}
        onBackToForm={() => setShowSummary(false)}
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

          <label>From Destination</label>
          <select
            name="fromDestination"
            value={formData.fromDestination}
            onChange={handleChange}
            required
          >
            <option value="">Select Departure City</option>
            {allCities.map((cityName) => (
              <option key={cityName} value={cityName}>{cityName}</option>
            ))}
          </select>

          {selectedPackage && (
            <div style={{ backgroundColor: "#e8f5e9", border: "1px solid #4caf50", borderRadius: "8px", padding: "12px", margin: "10px 0", textAlign: "center" }}>
              <p style={{ margin: 0, textAlign: "center" }}><strong>Selected Package:</strong> {selectedPackage.name}</p>
              <p style={{ margin: 0, textAlign: "center" }}><strong>Package Price:</strong> {selectedPackage.price}</p>
            </div>
          )}

          <label>To Destination</label>
          <select
            name="toDestination"
            value={formData.toDestination}
            onChange={handleChange}
            required
            disabled={destination !== "General"}
            style={destination !== "General" ? { backgroundColor: "#f0f0f0", cursor: "not-allowed" } : {}}
          >
            <option value="">Select Destination City</option>
            {allCities.map((cityName) => (
              <option key={cityName} value={cityName}>{cityName}</option>
            ))}
          </select>

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
            min={getTodayString()}
          />

<label>Return Date</label>
          <input
            type="date"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleChange}
            required
            disabled={!!selectedPackage}
            style={selectedPackage ? { backgroundColor: "#f0f0f0", cursor: "not-allowed" } : {}}
            min={selectedPackage && formData.travelDate ? getMinReturnDate(formData.travelDate) : (!!selectedPackage ? "" : getTodayString())}
          />
          {selectedPackage ? (
            <p style={{ fontSize: "12px", color: "#666", margin: "0 0 8px 0", textAlign: "center" }}>
              ℹ Return date is auto-calculated based on package duration ({minTripDays} days)
            </p>
          ) : null}
          {returnDateError && (
            <p style={{ color: "#d32f2f", fontSize: "13px", margin: "0 0 8px 0", textAlign: "center" }}>
              ⚠ {returnDateError}
            </p>
          )}

<label>Number of Travellers</label>
          <input
            type="number"
            name="numberOfTravellers"
            min={1}
            value={formData.numberOfTravellers}
            onChange={handleChange}
            required
          />

<label>Mode of Transport</label>
          <select
            name="transport"
            value={formData.transport}
            onChange={handleChange}
            required
          >
            <option value="Flight">✈ Flight - ₹{getRoutePrice(formData.fromDestination, formData.toDestination, "Flight").toLocaleString()}</option>
            <option value="Train">🚆 Train - ₹{getRoutePrice(formData.fromDestination, formData.toDestination, "Train").toLocaleString()}</option>
            <option value="Bus">🚌 Bus - ₹{getRoutePrice(formData.fromDestination, formData.toDestination, "Bus").toLocaleString()}</option>
          </select>

          {formData.fromDestination && formData.toDestination ? (
            <p style={{ color: "#1ee8ca", fontWeight: "bold", margin: "5px 0", textAlign: "center" }}>
              {formData.transport === "Flight" && `✈ Flight from ${formData.fromDestination} to ${formData.toDestination}: ₹${getRoutePrice(formData.fromDestination, formData.toDestination, "Flight").toLocaleString()}/person`}
              {formData.transport === "Train" && `🚆 Train from ${formData.fromDestination} to ${formData.toDestination}: ₹${getRoutePrice(formData.fromDestination, formData.toDestination, "Train").toLocaleString()}/person`}
              {formData.transport === "Bus" && `🚌 Bus from ${formData.fromDestination} to ${formData.toDestination}: ₹${getRoutePrice(formData.fromDestination, formData.toDestination, "Bus").toLocaleString()}/person`}
            </p>
          ) : formData.toDestination ? (
            <p style={{ color: "#1e73e8", fontWeight: "bold", margin: "5px 0", textAlign: "center" }}>
              {formData.transport === "Flight" && `✈ Flight to ${formData.toDestination}: ₹${getCityPrices(formData.toDestination).Flight.toLocaleString()}/person`}
              {formData.transport === "Train" && `🚆 Train to ${formData.toDestination}: ₹${getCityPrices(formData.toDestination).Train.toLocaleString()}/person`}
              {formData.transport === "Bus" && `🚌 Bus to ${formData.toDestination}: ₹${getCityPrices(formData.toDestination).Bus.toLocaleString()}/person`}
            </p>
          ) : null}

          <label>Hotel</label>
          <select
            name="hotel"
            value={formData.hotel}
            onChange={handleChange}
            required
          >
            <option value="Hotel by Us">Hotel by Us - Included</option>
            <option value="Deluxe Room">Deluxe Room - ₹2,000/night</option>
            <option value="Suite Room">Suite Room - ₹3,500/night</option>
          </select>

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