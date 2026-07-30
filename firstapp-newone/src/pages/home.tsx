import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Package from "../component/Package/Packagedetails";

interface HomeProps {
  onNavigate: (page: "home" | "profile") => void;
  currentPage: string;
  user: { name: string; email: string } | null;
}

function Home({ onNavigate, currentPage, user }: HomeProps) {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [showPackageDetails, setShowPackageDetails] = useState(false);
  const [showDirectBooking, setShowDirectBooking] = useState(false);
  const [packageDetailsTarget, setPackageDetailsTarget] = useState<{
    destination: string;
    city: string;
  }>({ destination: "", city: "" });

  const [bookingStep, setBookingStep] = useState<"form" | "summary" | "payment" | "success">("form");

  const [bookingData, setBookingData] = useState({
    name: "",
    age: "",
    departure: "",
    destinationState: "",
    phone: "",
    date: "",
    travelers: "1",
    transportMode: "Bus",
  });

  const [bookingError, setBookingError] = useState("");
  const [calculatedPrice, setCalculatedPrice] = useState({ basePerPerson: 0, transportExtra: 0, total: 0 });
  const [searchQuery, setSearchQuery] = useState("");

  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi",
    "Jammu & Kashmir", "Ladakh", "Puducherry", "Andaman & Nicobar",
    "Chandigarh", "Dadra & Nagar Haveli and Daman & Diu", "Lakshadweep"
  ];

  const stateCities = [
    {
      state: "Andhra Pradesh",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoTj3BCZ-ZXz1QY3KPsaP32pSnzC0YO3BzJ37ydfe97Q&s=10",
      cities: ["Visakhapatnam", "Vijayawada", "Tirupati", "Amaravati", "Guntur", "Nellore"],
    },
    {
      state: "Arunachal Pradesh",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400",
      cities: ["Itanagar", "Tawang", "Ziro", "Bomdila", "Pasighat"],
    },
    {
      state: "Assam",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYk-D74SUQJIEilCGHsGcVOEaz2aXQ3fuO4wgBPelEdg&s=10",
      cities: ["Guwahati", "Tezpur", "Jorhat", "Silchar", "Haflong"],
    },
    {
      state: "Bihar",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8muzauh0htP4QHEUSkJ5E4xSTbzkmIf8QVFTU6no0qg&s=10",
      cities: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga"],
    },
    {
      state: "Goa",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400",
      cities: ["Panaji", "Margao", "Vasco da Gama", "Mapusa", "Anjuna"],
    },
    {
      state: "Gujarat",
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400",
      cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Dwarka"],
    },
    {
      state: "Himachal Pradesh",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400",
      cities: ["Manali", "Shimla", "Dharamshala", "Kullu", "Spiti", "Chamba"],
    },
    {
      state: "Kerala",
      image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=400",
      cities: ["Kochi", "Alleppey", "Munnar", "Kumarakom", "Thekkady", "Kovalam"],
    },
    {
      state: "Maharashtra",
      image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=400",
      cities: ["Mumbai", "Pune", "Mahabaleshwar", "Nashik", "Aurangabad", "Nagpur"],
    },
    {
      state: "Rajasthan",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ3Y2ebTaO1Rx_UOXy560q5kPFY8qJcA4iIVGEA3axUQ&s",
      cities: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer", "Bikaner", "Mount Abu"],
    },
  ];

  const destinations = [
    {
      name: "Manali",
      destKey: "Himachal Pradesh",
      cityKey: "Manali",
      desc: "Adventure, Nature and Peace. All in Manali.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy3cYuzyj4_u20T9rmdVMrj9sQ3RcuW8P-a7fXLtKHUw&s=10",
    },
    {
      name: "Goa",
      destKey: "Goa",
      cityKey: "Goa",
      desc: "Beautiful beaches, nightlife and relaxed coastal vibes.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiNiYKe3OziQyEEh6yoJltraLA0U2pLc6wgy2p9lmRqA&s=10",
    },
    {
      name: "Mumbai",
      destKey: "Maharashtra",
      cityKey: "Mumbai",
      desc: "City life, beaches and famous places.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSskNpgdJ2WkjEovxWGAtQGtFcaBrGKYhAcS4o8wUge4A&s=10",
    },
  ];

  const resetAll = () => {
    setSelectedState(null);
    setShowPackageDetails(false);
    setShowDirectBooking(false);
    setBookingError("");
    setBookingStep("form");
    setBookingData({
      name: "",
      age: "",
      departure: "",
      destinationState: "",
      phone: "",
      date: "",
      travelers: "1",
      transportMode: "Bus",
    });
    setPackageDetailsTarget({ destination: "", city: "" });
  };

  const showPackagesFor = (destination: string, city: string) => {
    setPackageDetailsTarget({ destination, city });
    setShowPackageDetails(true);
  };

  const calculatePricing = (depState: string, destState: string, transport: string) => {
    let base = 3500;
    const routeString = `${depState}-${destState}`;
    if (depState && destState) {
      for (let i = 0; i < routeString.length; i++) {
        base += routeString.charCodeAt(i) * 12;
      }
    }
    base = Math.floor(base / 100) * 100;

    let transportCost = 1200;
    if (transport === "Train") transportCost = 2200;
    if (transport === "Flight") transportCost = 5500;

    if (depState && destState) {
      const extraHash = (depState.length + destState.length) * 25;
      transportCost += extraHash;
    }

    return { basePerPerson: base, transportExtra: transportCost };
  };

  const getTransportOptionPrice = (mode: string) => {
    if (!bookingData.departure || !bookingData.destinationState) return null;
    const pricing = calculatePricing(bookingData.departure, bookingData.destinationState, mode);
    return pricing.transportExtra;
  };

  const handleFormNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (bookingData.departure === bookingData.destinationState) {
      setBookingError("Departure and Destination states cannot be the same!");
      return;
    }
    setBookingError("");

    const pricing = calculatePricing(bookingData.departure, bookingData.destinationState, bookingData.transportMode);
    const count = parseInt(bookingData.travelers) || 1;
    const total = (pricing.basePerPerson + pricing.transportExtra) * count;

    setCalculatedPrice({
      basePerPerson: pricing.basePerPerson,
      transportExtra: pricing.transportExtra,
      total: total,
    });

    setBookingStep("summary");
  };

  // Direct transition to success screen without calling backend server
  const handlePaymentSuccess = () => {
    setBookingError("");
    setBookingStep("success");
  };

  const filteredStates = stateCities.filter((item) =>
    item.state.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderContent = () => {
    if (showDirectBooking) {
      return (
        <div className="home-content" style={{ padding: "40px 20px", display: "flex", justifyContent: "center" }}>
          <div style={{ background: "white", padding: "30px", borderRadius: "10px", width: "100%", maxWidth: "520px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)", color: "#333" }}>
            
            {/* Step 1: Form */}
            {bookingStep === "form" && (
              <>
                <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Book Your Trip</h2>
                <form onSubmit={handleFormNext} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                  {bookingError && <p style={{ color: "red", fontSize: "14px", margin: 0, fontWeight: "bold" }}>{bookingError}</p>}
                  
                  <div>
                    <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Full Name:</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={bookingData.name}
                      onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                      style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Age:</label>
                    <input
                      type="number"
                      required
                      min="1"
                      max="120"
                      placeholder="Enter your age"
                      value={bookingData.age}
                      onChange={(e) => setBookingData({ ...bookingData, age: e.target.value })}
                      style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Departure State:</label>
                    <select
                      required
                      value={bookingData.departure}
                      onChange={(e) => setBookingData({ ...bookingData, departure: e.target.value })}
                      style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
                    >
                      <option value="">-- Select Departure State --</option>
                      {indianStates.map((st, i) => (
                        <option key={i} value={st}>{st}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Destination State:</label>
                    <select
                      required
                      value={bookingData.destinationState}
                      onChange={(e) => setBookingData({ ...bookingData, destinationState: e.target.value })}
                      style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
                    >
                      <option value="">-- Select Destination State --</option>
                      {indianStates.map((st, i) => (
                        <option key={i} value={st}>{st}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Number of Travelers:</label>
                    <input
                      type="number"
                      required
                      min="1"
                      max="50"
                      value={bookingData.travelers}
                      onChange={(e) => setBookingData({ ...bookingData, travelers: e.target.value })}
                      style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Mode of Transport:</label>
                    <select
                      required
                      value={bookingData.transportMode}
                      onChange={(e) => setBookingData({ ...bookingData, transportMode: e.target.value })}
                      style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
                    >
                      <option value="Bus">
                        Bus (Standard) {getTransportOptionPrice("Bus") !== null ? `— (+₹${getTransportOptionPrice("Bus")}/person)` : ""}
                      </option>
                      <option value="Train">
                        Train (Comfort) {getTransportOptionPrice("Train") !== null ? `— (+₹${getTransportOptionPrice("Train")}/person)` : ""}
                      </option>
                      <option value="Flight">
                        Flight (Fast & Premium) {getTransportOptionPrice("Flight") !== null ? `— (+₹${getTransportOptionPrice("Flight")}/person)` : ""}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Phone Number:</label>
                    <input
                      type="tel"
                      required
                      placeholder="Enter phone number"
                      value={bookingData.phone}
                      onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                      style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Travel Date:</label>
                    <input
                      type="date"
                      required
                      value={bookingData.date}
                      onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                      style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
                    />
                  </div>

                  <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                    <button type="submit" style={{ flex: 1, padding: "12px", background: "#ff4757", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" }}>Proceed to Summary</button>
                    <button type="button" onClick={resetAll} style={{ padding: "12px", background: "#ccc", color: "#333", border: "none", borderRadius: "5px", cursor: "pointer" }}>Cancel</button>
                  </div>
                </form>
              </>
            )}

            {/* Step 2: Summary */}
            {bookingStep === "summary" && (
              <>
                <h2 style={{ textAlign: "center", marginBottom: "15px" }}>Booking Summary</h2>
                <div style={{ background: "#f8f9fa", padding: "15px", borderRadius: "8px", marginBottom: "20px", fontSize: "15px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <p><strong>Name:</strong> {bookingData.name} ({bookingData.age} yrs)</p>
                  <p><strong>Phone:</strong> {bookingData.phone}</p>
                  <p><strong>Route:</strong> {bookingData.departure} ➔ {bookingData.destinationState}</p>
                  <p><strong>Travel Date:</strong> {bookingData.date}</p>
                  <p><strong>Travelers:</strong> {bookingData.travelers} Persons</p>
                  <p><strong>Transport Mode:</strong> {bookingData.transportMode}</p>
                  <hr style={{ border: "0", borderTop: "1px solid #ddd", margin: "5px 0" }} />
                  <p><strong>Base Package / Person:</strong> ₹{calculatedPrice.basePerPerson}</p>
                  <p><strong>Transport Fee / Person:</strong> ₹{calculatedPrice.transportExtra}</p>
                  <h3 style={{ color: "#ff4757", marginTop: "5px" }}>Total Price: ₹{calculatedPrice.total}</h3>
                </div>

                <div style={{ display: "flex", gap: "10px" }}>
                  <button onClick={() => setBookingStep("payment")} style={{ flex: 1, padding: "12px", background: "#2563eb", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}>Proceed to Payment</button>
                  <button onClick={() => setBookingStep("form")} style={{ padding: "12px", background: "#ccc", color: "#333", border: "none", borderRadius: "8px", cursor: "pointer" }}>Edit Form</button>
                </div>
              </>
            )}

            {/* Step 3: Payment */}
            {bookingStep === "payment" && (
              <div>
                <h2 style={{ textAlign: "center", marginBottom: "15px" }}>Payment Details</h2>
                <div style={{ background: "#f8f9fa", padding: "10px 15px", borderRadius: "8px", marginBottom: "15px" }}>
                  <strong>Total Amount:</strong> ₹{calculatedPrice.total}
                </div>
                
                <label style={{ display: "block", marginTop: "12px", fontWeight: "600", color: "#334155" }}>Cardholder Name</label>
                <input type="text" placeholder="John Doe" style={{ width: "100%", padding: "10px", marginTop: "6px", border: "1px solid #cbd5e1", borderRadius: "8px", boxSizing: "border-box" }} />
                
                <label style={{ display: "block", marginTop: "12px", fontWeight: "600", color: "#334155" }}>Card Number</label>
                <input type="text" placeholder="4242 4242 4242 4242" style={{ width: "100%", padding: "10px", marginTop: "6px", border: "1px solid #cbd5e1", borderRadius: "8px", boxSizing: "border-box" }} />
                
                <label style={{ display: "block", marginTop: "12px", fontWeight: "600", color: "#334155" }}>Expiry</label>
                <input type="text" placeholder="MM/YY" style={{ width: "100%", padding: "10px", marginTop: "6px", border: "1px solid #cbd5e1", borderRadius: "8px", boxSizing: "border-box" }} />
                
                <label style={{ display: "block", marginTop: "12px", fontWeight: "600", color: "#334155" }}>CVV</label>
                <input type="password" maxLength={4} placeholder="123" style={{ width: "100%", padding: "10px", marginTop: "6px", border: "1px solid #cbd5e1", borderRadius: "8px", boxSizing: "border-box" }} />
                
                <button onClick={handlePaymentSuccess} style={{ marginTop: "18px", width: "100%", padding: "12px", border: "none", borderRadius: "8px", background: "#2563eb", color: "white", fontSize: "16px", cursor: "pointer", fontWeight: "bold" }}>Pay Now</button>
                <button onClick={() => setBookingStep("summary")} style={{ marginTop: "10px", width: "100%", padding: "10px", border: "none", borderRadius: "8px", background: "#ccc", color: "#333", cursor: "pointer" }}>Back to Summary</button>
              </div>
            )}

            {/* Step 4: Success */}
            {bookingStep === "success" && (
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "50px", color: "green", marginBottom: "10px" }}>✔</div>
                <h2 style={{ color: "green", marginBottom: "10px" }}>Payment Successful</h2>
                <p style={{ color: "#334155", marginBottom: "20px" }}>Your trip booking is confirmed. Thank you, {bookingData.name || "Customer"}!</p>
                <button onClick={resetAll} style={{ padding: "10px 20px", background: "#2563eb", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Back to Home</button>
              </div>
            )}

          </div>
        </div>
      );
    }

    if (showPackageDetails) {
      return (
        <div className="home-content">
          <Package
            destination={packageDetailsTarget.destination}
            city={packageDetailsTarget.city}
            onBack={resetAll}
          />
        </div>
      );
    }

    if (selectedState) {
      const stateObj = stateCities.find((item) => item.state === selectedState);

      return (
        <div 
          className="home-content"
          style={{
            backgroundImage: stateObj ? `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${stateObj.image})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
            color: "white"
          }}
        >
          <div className="home-container">
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <h1 style={{ fontSize: "40px", margin: "0 0 10px 0" }}>
                {selectedState}
              </h1>
              <p style={{ fontSize: "18px", margin: 0 }}>
                Select any city below to explore available tour packages.
              </p>
            </div>

            <div className="destination-container">
              {stateObj?.cities.map((city, index) => (
                <div
                  className="destination-card"
                  key={index}
                  onClick={() => showPackagesFor(selectedState, city)}
                  style={{ background: "rgba(255, 255, 255, 0.9)", color: "#333" }}
                >
                  <h3>{city}</h3>
                  <p>Click here to see packages</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="home-content">
        <div 
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "80px 20px",
            textAlign: "center",
            color: "white",
            marginBottom: "30px",
            borderRadius: "0 0 15px 15px"
          }}
        >
          <h1 style={{ fontSize: "45px", margin: "0 0 15px 0" }}>
            Welcome To Mehak Travels
          </h1>
          <button 
            onClick={() => setShowDirectBooking(true)}
            style={{ marginTop: "15px", padding: "12px 24px", fontSize: "16px", background: "#ff4757", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}
          >
            Book Custom Trip Directly
          </button>
        </div>

        <div className="home-container">
          <h2 className="popular-heading">Popular Destinations</h2>

          <div className="destination-container">
            {destinations.map((item, index) => (
              <div
                key={index}
                className="destination-card"
                onClick={() => showPackagesFor(item.destKey, item.cityKey)}
              >
                <img src={item.image} alt={item.name} className="destination-image" />
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="popular-heading">Explore States of India</h2>

          <div className="destination-container">
            {(searchQuery ? filteredStates : stateCities).map((item, index) => (
              <div
                key={index}
                className="destination-card"
                onClick={() => setSelectedState(item.state)}
              >
                <img src={item.image} alt={item.state} className="destination-image" />
                <h3>{item.state}</h3>
                <p>{item.cities.slice(0, 3).join(", ")}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="app-layout">
      <Navbar onNavigate={onNavigate} currentPage={currentPage} searchQuery={searchQuery} onSearchChange={setSearchQuery} showSearch={true} onHomeClick={resetAll} />
      {renderContent()}
    </div>
  );
}

export default Home;