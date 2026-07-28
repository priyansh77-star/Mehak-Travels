import { useState } from "react";
import Navbar from "../component/Navbar";
import Package from "../component/Package/Packagedetails";

function Home() {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [showPackageDetails, setShowPackageDetails] = useState(false);
  const [showDirectBooking, setShowDirectBooking] = useState(false);
  const [packageDetailsTarget, setPackageDetailsTarget] = useState<{
    destination: string;
    city: string;
  }>({ destination: "", city: "" });

  // Booking Flow Steps: "form" -> "summary" -> "payment" -> "success"
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
      state: "Chhattisgarh",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0MQNjyr7LRcxMKOZS9MoZNiAU9HLvx2t5cm_EP82RYw&s=10",
      cities: ["Raipur", "Bilaspur", "Jagdalpur", "Korba", "Rajnandgaon"],
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
      state: "Haryana",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4swPG6LyjPuQn6Ps8WcmG8PDZb0X3TYfD2JlnOrNJjQ&s=10",
      cities: ["Gurugram", "Faridabad", "Chandigarh", "Hisar", "Karnal"],
    },
    {
      state: "Himachal Pradesh",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400",
      cities: ["Manali", "Shimla", "Dharamshala", "Kullu", "Spiti", "Chamba"],
    },
    {
      state: "Jharkhand",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnyGj7CtrhjKbc6HFhWj6AFUO5o0K8oQuHtLVs9GYrsg&s=10",
      cities: ["Ranchi", "Jamshedpur", "Dhanbad", "Deoghar", "Hazaribagh"],
    },
    {
      state: "Karnataka",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShi2rRL3NScaj9qlE4jKBhzYLM2JQJZUHIqD8An9uOnw&s=10",
      cities: ["Bengaluru", "Mysuru", "Mangaluru", "Hubballi", "Coorg", "Hampi"],
    },
    {
      state: "Kerala",
      image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=400",
      cities: ["Kochi", "Alleppey", "Munnar", "Kumarakom", "Thekkady", "Kovalam"],
    },
    {
      state: "Madhya Pradesh",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg6P12JjyPUHaGmEpWju74IvaASK25FZRsBCkttimd4Q&s=10",
      cities: ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain", "Khajuraho"],
    },
    {
      state: "Maharashtra",
      image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=400",
      cities: ["Mumbai", "Pune", "Mahabaleshwar", "Nashik", "Aurangabad", "Nagpur"],
    },
    {
      state: "Manipur",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400",
      cities: ["Imphal", "Bishnupur", "Thoubal", "Churachandpur", "Ukhrul", "Senapati"],
    },
    {
      state: "Meghalaya",
      image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=400",
      cities: ["Shillong", "Cherrapunji", "Tura", "Jowai", "Nongpoh", "Mawlynnong"],
    },
    {
      state: "Mizoram",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400",
      cities: ["Aizawl", "Lunglei", "Champhai", "Serchhip", "Kolasib", "Lawngtlai"],
    },
    {
      state: "Nagaland",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400",
      cities: ["Kohima", "Dimapur", "Mokokchung", "Tuensang", "Wokha", "Zunheboto"],
    },
    {
      state: "Odisha",
      image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=400",
      cities: ["Bhubaneswar", "Puri", "Cuttack", "Rourkela", "Sambalpur", "Konark"],
    },
    {
      state: "Punjab",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6XAm9wfR5iMQfXUhlq3aK9YgsXP2jUbes68daIMB0nA&s",
      cities: ["Amritsar", "Ludhiana", "Jalandhar", "Chandigarh", "Patiala"],
    },
    {
      state: "Rajasthan",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ3Y2ebTaO1Rx_UOXy560q5kPFY8qJcA4iIVGEA3axUQ&s",
      cities: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer", "Bikaner", "Mount Abu"],
    },
    {
      state: "Sikkim",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400",
      cities: ["Gangtok", "Pelling", "Namchi", "Ravangla", "Yuksom", "Lachung"],
    },
    {
      state: "Tamil Nadu",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPahOiKaAWOrpNwSTUg_xUZYer_PHFdBWOk4rXTN3wYQ&s=10",
      cities: ["Chennai", "Coimbatore", "Madurai", "Ooty", "Kodaikanal", "Rameswaram"],
    },
    {
      state: "Telangana",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiJRZIE6vhEAzfbW6mxd0dmhoxN51Dk8N8O_QXqRmO9w&s",
      cities: ["Hyderabad", "Warangal", "Karimnagar", "Nizamabad", "Khammam", "Ramagundam"],
    },
    {
      state: "Tripura",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400",
      cities: ["Agartala", "Udaipur", "Dharmanagar", "Kailashahar", "Belonia", "Sabroom"],
    },
    {
      state: "Uttar Pradesh",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400",
      cities: ["Lucknow", "Agra", "Varanasi", "Prayagraj", "Noida", "Ayodhya"],
    },
    {
      state: "Uttarakhand",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToQHjYkWeNjN3Z7mgdqmo1A2p4HyyHLkNvYshuaj_vUw&s=10",
      cities: ["Dehradun", "Nainital", "Mussoorie", "Rishikesh", "Haridwar", "Auli"],
    },
    {
      state: "West Bengal",
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/lord-buddha-statue-2-kalimpong-wb-city-hero?qlt=82&ts=1726645084728",
      cities: ["Kolkata", "Darjeeling", "Durgapur", "Siliguri", "Shantiniketan", "Kalimpong"],
    },
    {
      state: "Delhi",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXQ3EmmxFPmj3QUtXlHyWGA2P1DnBRMJQuF0PzPd16TQ&s=10",
      cities: ["New Delhi", "Old Delhi", "Dwarka", "Rohini", "Lajpat Nagar", "Karol Bagh"],
    },
    {
      state: "Jammu & Kashmir",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSKaUOllBfDNOeS-tIi1w3MtHEnz-xCTdDFhpwZku5Qg&s=10",
      cities: ["Srinagar", "Jammu", "Pahalgam", "Gulmarg", "Sonamarg", "Katra"],
    },
    {
      state: "Ladakh",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400",
      cities: ["Leh", "Kargil", "Nubra", "Zanskar", "Dras", "Padum"],
    },
    {
      state: "Puducherry",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1sJI2rXSnjTDYqnj4B3MNjVplhgwWf1jEkVrIUMp9jA&s=10",
      cities: ["Puducherry", "Karaikal", "Yanam", "Mahe"],
    },
    {
      state: "Andaman & Nicobar",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400",
      cities: ["Port Blair", "Havelock", "Neil Island", "Diglipur"],
    },
    {
      state: "Chandigarh",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400",
      cities: ["Chandigarh", "Mohali", "Panchkula"],
    },
    {
      state: "Dadra & Nagar Haveli and Daman & Diu",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400",
      cities: ["Silvassa", "Daman", "Diu"],
    },
    {
      state: "Lakshadweep",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKrhfskL_N1XqqW3RHMjGWC_UOZLhPbpjTMImNITF1dQ&s=10",
      cities: ["Kavaratti", "Minicoy", "Agatti", "Bangaram"],
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

  const renderContent = () => {
    if (showDirectBooking) {
      return (
        <div className="home-content" style={{ padding: "40px 20px", display: "flex", justifyContent: "center" }}>
          <div style={{ background: "white", padding: "30px", borderRadius: "10px", width: "100%", maxWidth: "520px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)", color: "#333" }}>
            
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
                    {!bookingData.departure || !bookingData.destinationState ? (
                      <small style={{ color: "#777", marginTop: "4px", display: "block" }}>* Select departure and destination states to view transport prices.</small>
                    ) : null}
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
                  <p><strong>Base Package / Person ({bookingData.departure} to {bookingData.destinationState}):</strong> ₹{calculatedPrice.basePerPerson}</p>
                  <p><strong>Transport Fee / Person ({bookingData.transportMode}):</strong> ₹{calculatedPrice.transportExtra}</p>
                  <h3 style={{ color: "#ff4757", marginTop: "5px" }}>Total Price: ₹{calculatedPrice.total}</h3>
                </div>

                <div style={{ display: "flex", gap: "10px" }}>
                  <button onClick={() => setBookingStep("payment")} style={{ flex: 1, padding: "12px", background: "#2563eb", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}>Proceed to Payment</button>
                  <button onClick={() => setBookingStep("form")} style={{ padding: "12px", background: "#ccc", color: "#333", border: "none", borderRadius: "8px", cursor: "pointer" }}>Edit Form</button>
                </div>
              </>
            )}

            {/* Step 3: Integrated Custom Payment Page UI */}
            {bookingStep === "payment" && (
              <div>
                <h2 style={{ marginTop: 0, color: "#0f172a" }}>Mehak Travels Payment</h2>
                <div style={{ margin: "16px 0", padding: "12px", background: "#eff6ff", borderRadius: "8px", color: "#1d4ed8" }}>
                  <strong>Destination:</strong> {bookingData.destinationState}<br />
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
                
                <button onClick={() => setBookingStep("success")} style={{ marginTop: "18px", width: "100%", padding: "12px", border: "none", borderRadius: "8px", background: "#2563eb", color: "white", fontSize: "16px", cursor: "pointer", fontWeight: "bold" }}>Pay Now</button>
                <button onClick={() => setBookingStep("summary")} style={{ marginTop: "10px", width: "100%", padding: "10px", border: "none", borderRadius: "8px", background: "#ccc", color: "#333", cursor: "pointer" }}>Back to Summary</button>
              </div>
            )}

            {bookingStep === "success" && (
              <div style={{ textAlign: "center", padding: "10px 0" }}>
                <div style={{ fontSize: "50px", color: "green", marginBottom: "10px" }}>✔</div>
                <h2 style={{ color: "green", marginBottom: "10px" }}>Payment Successful</h2>
                <p style={{ color: "#334155", marginBottom: "20px" }}>Your trip booking is confirmed. Thank you, {bookingData.name}!</p>
                <button onClick={resetAll} style={{ padding: "12px 25px", background: "#ff4757", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}>Back to Home</button>
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
            backgroundAttachment: "fixed",
            minHeight: "100vh",
            color: "white"
          }}
        >
          <div className="home-container">
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <h1 style={{ fontSize: "40px", margin: "0 0 10px 0", textShadow: "2px 2px 6px rgba(0,0,0,0.8)" }}>
                {selectedState}
              </h1>
              <p style={{ fontSize: "18px", margin: 0, textShadow: "1px 1px 4px rgba(0,0,0,0.8)" }}>
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

            <button 
              onClick={() => setSelectedState(null)} 
              style={{ marginTop: "30px", padding: "12px 25px", cursor: "pointer", fontWeight: "bold" }}
            >
              Back to Home
            </button>
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
          <h1 style={{ fontSize: "45px", margin: "0 0 15px 0", textShadow: "2px 2px 6px rgba(0,0,0,0.8)" }}>
            Welcome To Mehak Travels
          </h1>
          <h2 style={{ fontSize: "24px", margin: "0 0 20px 0", fontWeight: "normal", textShadow: "1px 1px 4px rgba(0,0,0,0.8)" }}>
            Explore Your Dream Destination
          </h2>
          <p style={{ maxWidth: "600px", margin: "0 auto 25px auto", fontSize: "16px", textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}>
            Discover the best places to visit with exciting Mehak Travels packages at affordable prices. Plan your trip with us and make your journey memorable.
          </p>
          <button 
            className="book-btn" 
            onClick={() => setShowDirectBooking(true)}
            style={{ padding: "12px 30px", fontSize: "16px", fontWeight: "bold", cursor: "pointer", background: "#ff4757", color: "white", border: "none", borderRadius: "5px" }}
          >
            Book Now
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
            {stateCities.map((item, index) => (
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
      <Navbar />
      {renderContent()}
    </div>
  );
}

export default Home;