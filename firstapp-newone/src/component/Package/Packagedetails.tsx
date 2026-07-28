import React, { useState } from "react";

// 🌍 All-India Departure Cities Master Data (Dynamic Transport Pricing)
const allIndiaDepartureCities: { [key: string]: { flight: number; train: number; bus: number } } = {
  "Delhi": { flight: 4500, train: 2500, bus: 1500 },
  "Mumbai": { flight: 5000, train: 2800, bus: 1600 },
  "Bengaluru": { flight: 6500, train: 3500, bus: 2200 },
  "Chennai": { flight: 6800, train: 3600, bus: 2300 },
  "Kolkata": { flight: 6000, train: 3200, bus: 2000 },
  "Hyderabad": { flight: 6200, train: 3300, bus: 2100 },
  "Ahmedabad": { flight: 4800, train: 2600, bus: 1500 },
  "Jaipur": { flight: 4000, train: 2200, bus: 1200 },
  "Lucknow": { flight: 4200, train: 2000, bus: 1300 },
  "Patna": { flight: 5500, train: 2900, bus: 1800 },
  "Bhopal": { flight: 4600, train: 2400, bus: 1400 },
  "Chandigarh": { flight: 3800, train: 2100, bus: 1100 },
  "Srinagar": { flight: 5800, train: 3500, bus: 2400 },
  "Ranchi": { flight: 5600, train: 3000, bus: 1900 },
  "Bhubaneswar": { flight: 6100, train: 3200, bus: 2100 },
  "Raipur": { flight: 5300, train: 2800, bus: 1700 },
  "Thiruvananthapuram": { flight: 7200, train: 4000, bus: 2500 },
  "Dehradun": { flight: 3500, train: 1800, bus: 1000 },
  "Shimla": { flight: 3600, train: 1900, bus: 900 },
  "Guwahati": { flight: 6400, train: 3800, bus: 2600 },
  "Gangtok": { flight: 6600, train: 3900, bus: 2700 },
  "Panaji": { flight: 5200, train: 2700, bus: 1600 },
  "Visakhapatnam": { flight: 6300, train: 3400, bus: 2200 }
};

interface PackageOption {
  basicTitle: string;
  basicDesc: string;
  basicPlaces: string[];
  basicPrice: number;
  standardTitle: string;
  standardDesc: string;
  standardPlaces: string[];
  standardPrice: number;
}

// 🏛️ City-Specific Master Packages with True Local Landmarks
const cityPackagesMap: { [key: string]: PackageOption } = {
  // --- UTTAR PRADESH CITIES ---
  "agra": {
    basicTitle: "Agra Taj & Fort Express",
    basicDesc: "Witness the magnificent symbol of love and historic Mughal architectures.",
    basicPlaces: ["Taj Mahal", "Agra Fort", "Mehtab Bagh"],
    basicPrice: 4100,
    standardTitle: "Agra Royal Heritage & Fatehpur Sikri Retreat",
    standardDesc: "An immersive historical journey across ancient Mughal capitals and marble crafts.",
    standardPlaces: ["Fatehpur Sikri", "Itimad-ud-Daulah (Baby Taj)", "Akbar's Tomb Sikandra", "Kinari Bazaar"],
    standardPrice: 6700
  },
  "varanasi": {
    basicTitle: "Varanasi Ghats & Spiritual Trails",
    basicDesc: "Experience the timeless spiritual energy, holy river chants, and ancient alleyways.",
    basicPlaces: ["Dashashwamedh Ghat Ganga Aarti", "Kashi Vishwanath Temple", "Assi Ghat"],
    basicPrice: 4300,
    standardTitle: "Varanasi Deep Cultural & Sarnath Expedition",
    standardDesc: "Explore sacred Buddhist grounds, ancient silk weaving centers, and serene boat sunrise rides.",
    standardPlaces: ["Sarnath Deer Park & Museum", "Manikarnika Ghat", "Boat Ride at Sunrise", "Banaras Hindu University campus"],
    standardPrice: 7000
  },
  "lucknow": {
    basicTitle: "Lucknow Nawabi Heritage & Food Tour",
    basicDesc: "Taste world-famous Awadhi cuisine and explore grand Nawabi monuments.",
    basicPlaces: ["Bara Imambara", "Rumi Darwaza", "Chhota Imambara"],
    basicPrice: 3900,
    standardTitle: "Lucknow Royal Architecture & Chowk Bazaar Explorer",
    standardDesc: "Dive deep into the city of tehzeeb, historic British residency ruins, and chikankari shopping.",
    standardPlaces: ["The Residency Lucknow", "Hazratganj Market", "Ambedkar Memorial Park", "Aminabad Street Food Hub"],
    standardPrice: 6400
  },

  // --- RAJASTHAN CITIES ---
  "jaipur": {
    basicTitle: "Jaipur Pink City Heritage Tour",
    basicDesc: "Explore majestic hilltop forts, pink sandstone palaces, and vibrant bazaars.",
    basicPlaces: ["Amber Fort", "Hawa Mahal", "City Palace Jaipur"],
    basicPrice: 4500,
    standardTitle: "Jaipur Royal Palaces & Astronomical Wonders",
    standardDesc: "A complete royal experience covering ancient observatories, water palaces, and local handicrafts.",
    standardPlaces: ["Jantar Mantar", "Jal Mahal", "Nahargarh Fort Sunset View", "Johri Bazaar"],
    standardPrice: 7200
  },
  "udaipur": {
    basicTitle: "Udaipur City of Lakes Getaway",
    basicDesc: "Romantic boat rides, sparkling lakes, and majestic marble palaces.",
    basicPlaces: ["Lake Pichola Boat Ride", "City Palace Udaipur", "Saheliyon-ki-Bari"],
    basicPrice: 4900,
    standardTitle: "Udaipur Royal Lakeside & Monsoon Retreat",
    standardDesc: "Experience stunning hilltop fort views, vintage car collections, and cultural folk dance shows.",
    standardPlaces: ["Monsoon Palace (Sajjangarh)", "Jag Mandir", "Bagore Ki Haveli", "Fateh Sagar Lake"],
    standardPrice: 7800
  },

  // --- GOA CITIES ---
  "north goa": {
    basicTitle: "North Goa Beach & Party Vibe",
    basicDesc: "Enjoy buzzing sandy shores, beach shacks, and historic Portuguese forts.",
    basicPlaces: ["Calangute Beach", "Baga Beach", "Aguada Fort"],
    basicPrice: 4600,
    standardTitle: "North Goa Ultimate Water Sports & Flea Market Tour",
    standardDesc: "Thrilling water adventures, vibrant night markets, and coastal sightseeing.",
    standardPlaces: ["Anjuna Beach & Flea Market", "Chapora Fort", "Vagator Beach", "Watersports at Candolim"],
    standardPrice: 7300
  },
  "south goa": {
    basicTitle: "South Goa Serene Shores Retreat",
    basicDesc: "Relax on peaceful, pristine white-sand beaches with tranquil surroundings.",
    basicPlaces: ["Palolem Beach", "Colva Beach", "Cabo de Rama Fort"],
    basicPrice: 4700,
    standardTitle: "South Goa Heritage Churches & Spice Plantations",
    standardDesc: "Discover ancient UNESCO World Heritage cathedrals and aromatic spice plantations.",
    standardPlaces: ["Basilica of Bom Jesus Old Goa", "Se Cathedral", "Sahakari Spice Farm", "Bogmalo Beach"],
    standardPrice: 7400
  },

  // --- HIMACHAL PRADESH CITIES ---
  "manali": {
    basicTitle: "Manali Snow Valley & Pine Forests",
    basicDesc: "Breathe cool mountain air, explore ancient wooden temples, and river valleys.",
    basicPlaces: ["Solang Valley Adventure", "Hadimba Temple", "Mall Road Manali"],
    basicPrice: 4800,
    standardTitle: "Manali High Altitude Tunnel & Waterfall Expedition",
    standardDesc: "Journey through engineering marvel tunnels and stunning alpine waterfalls.",
    standardPlaces: ["Atal Tunnel", "Sissu Waterfall", "Jogini Waterfalls", "Vashisht Hot Sulphur Springs"],
    standardPrice: 7600
  },
  "shimla": {
    basicTitle: "Shimla Colonial Ridge & Mall Road Tour",
    basicDesc: "Walk down British-era colonial streets and enjoy panoramic valley views.",
    basicPlaces: ["The Ridge Shimla", "Mall Road", "Christ Church Shimla"],
    basicPrice: 4400,
    standardTitle: "Shimla Himalayan Toy Train & Peak Panorama",
    standardDesc: "Experience historic mountain railways, high-altitude temples, and dense pine forests.",
    standardPlaces: ["Jakhoo Hanuman Temple", "Kufri Snow Point", "Viceregal Lodge", "Scandal Point"],
    standardPrice: 7100
  },

  // --- KERALA CITIES ---
  "munnar": {
    basicTitle: "Munnar Green Tea Gardens Trail",
    basicDesc: "Endless rolling green tea plantations, misty mountains, and waterfalls.",
    basicPlaces: ["Eravikulam National Park", "Tea Museum Munnar", "Mattupetty Dam"],
    basicPrice: 5100,
    standardTitle: "Munnar High Peaks & Spice Plantations Explorer",
    standardDesc: "An immersive nature escape through viewpoints, trekking hills, and spice gardens.",
    standardPlaces: ["Anamudi Peak View", "Top Station", "Attukad Waterfalls", "Pothamedu Viewpoint"],
    standardPrice: 8000
  },
  "kochi": {
    basicTitle: "Kochi Coastal Heritage & Harbor Tour",
    basicDesc: "Historic spice trading ports, giant Chinese fishing nets, and old quarters.",
    basicPlaces: ["Chinese Fishing Nets", "Fort Kochi Beach", "Mattancherry Palace"],
    basicPrice: 4600,
    standardTitle: "Kochi Backwater Gateway & Cultural Art Tour",
    standardDesc: "Experience traditional Kathakali dance shows, historic churches, and serene backwater cruises.",
    standardPlaces: ["St. Francis Church", "Paradesi Synagogue", "Marine Drive Kochi", "Kerala Folklore Museum"],
    standardPrice: 7400
  }
};

export interface PackageDetail {
  state?: string;
  destination?: string;
  city?: string;
  onBack: () => void;
}

export default function PackageDetails({ state, destination, city, onBack }: PackageDetail) {
  const [step, setStep] = useState<number>(1);
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  
  const [departureCity, setDepartureCity] = useState<string>("Delhi");
  const [transportMode, setTransportMode] = useState<"flight" | "train" | "bus">("flight");
  const [passengers, setPassengers] = useState<number>(1);
  
  const [travelDate, setTravelDate] = useState<string>("");
  const [returnDate, setReturnDate] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("upi");

  // Clean and identify target selection (prioritizing city if provided, else destination/state)
  const rawInput = (city || destination || state || "Goa").trim();
  const lowerInput = rawInput.toLowerCase();

  // Fetch true city-specific package data or generate unique dynamic package if city isn't pre-mapped
  const matchedData = cityPackagesMap[lowerInput] || {
    basicTitle: `${rawInput} Essential City Explorer`,
    basicDesc: `Discover the prime cultural attractions, monuments, and local markets of ${rawInput}.`,
    basicPlaces: [`${rawInput} Central Square`, `${rawInput} Heritage Museum`, `${rawInput} Main Street Market`],
    basicPrice: 4200,
    standardTitle: `${rawInput} Grand Scenic & Landmark Retreat`,
    standardDesc: `An exclusive immersive experience exploring the best scenic viewpoints and iconic sites of ${rawInput}.`,
    standardPlaces: [`${rawInput} Royal Monument`, `${rawInput} Panorama Viewpoint`, `${rawInput} Botanical Park`, `${rawInput} Sacred Shrine`],
    standardPrice: 6900
  };

  const availablePackages = [
    {
      id: `${lowerInput}-basic`,
      title: matchedData.basicTitle,
      destination: rawInput,
      category: "Basic",
      description: `${matchedData.basicDesc} Transport prices depend dynamically on your departure city and selected mode.`,
      coveredPlaces: matchedData.basicPlaces,
      basePrice: matchedData.basicPrice,
      departureCities: allIndiaDepartureCities
    },
    {
      id: `${lowerInput}-standard`,
      title: matchedData.standardTitle,
      destination: rawInput,
      category: "Standard",
      description: `${matchedData.standardDesc} Transport prices depend dynamically on your departure city and selected mode.`,
      coveredPlaces: matchedData.standardPlaces,
      basePrice: matchedData.standardPrice,
      departureCities: allIndiaDepartureCities
    }
  ];

  const localSightseeingCost = 2000;
  const transportFare = selectedPackage 
    ? (selectedPackage.departureCities[departureCity]?.[transportMode] || 2500) 
    : 0;
  
  const basePerPerson = selectedPackage ? selectedPackage.basePrice + transportFare + localSightseeingCost : 0;
  const grandTotal = basePerPerson * passengers;

  return (
    <div className="package-flow-container" style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      
      <button onClick={onBack} style={{ marginBottom: "15px", cursor: "pointer" }}>
        Back to Home
      </button>

      {/* ================= STEP 1: PACKAGE SELECTION ================= */}
      {step === 1 && (
        <div className="step-page">
          <h2>Tour Packages for {rawInput}</h2>
          <p>Choose from our specially curated packages featuring famous local spots of {rawInput}:</p>
          
          <div className="packages-grid" style={{ display: "grid", gap: "20px", marginTop: "15px" }}>
            {availablePackages.map((pkg) => (
              <div key={pkg.id} style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px", background: "#f9f9f9" }}>
                <h3>{pkg.title} ({pkg.category})</h3>
                <p style={{ color: "#555", fontSize: "14px", fontStyle: "italic" }}>{pkg.description}</p>
                <p style={{ margin: "8px 0" }}><strong>Famous Places Covered:</strong> {pkg.coveredPlaces.join(", ")}</p>
                <p><strong>Base Package Price:</strong> ₹{pkg.basePrice}</p>
                
                <button 
                  onClick={() => {
                    setSelectedPackage(pkg);
                    setStep(2);
                  }}
                  style={{ background: "#007bff", color: "white", border: "none", padding: "8px 15px", borderRadius: "4px", cursor: "pointer", marginTop: "10px" }}
                >
                  Select and Book Package
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= STEP 2: TRAVEL DETAILS FORM ================= */}
      {step === 2 && selectedPackage && (
        <div className="step-page">
          <h2>Configure Travel Details</h2>
          <h3>Selected Package: {selectedPackage.title}</h3>

          {/* 🔒 Auto-fixed Destination Display Box */}
          <div style={{ background: "#e8f4fd", border: "1px solid #bbeeff", padding: "12px", borderRadius: "6px", margin: "15px 0" }}>
            <label style={{ fontSize: "13px", color: "#0056b3", display: "block", fontWeight: "bold" }}>
              LOCKED DESTINATION CITY (Auto-Selected)
            </label>
            <span style={{ fontSize: "18px", color: "#333", fontWeight: "600" }}>📍 {rawInput}</span>
            <p style={{ fontSize: "12px", color: "#555", margin: "4px 0 0 0" }}>
              Your destination city is automatically fixed based on your selection. Only your departure point can be configured below.
            </p>
          </div>

          <div style={{ margin: "15px 0" }}>
            <label><strong>Departure City (Where are you traveling from?):</strong></label>
            <select 
              value={departureCity} 
              onChange={(e) => setDepartureCity(e.target.value)}
              style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px" }}
            >
              {Object.keys(selectedPackage.departureCities).map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div style={{ margin: "15px 0" }}>
            <label><strong>Select Mode of Transport:</strong></label>
            <div style={{ display: "flex", gap: "12px", marginTop: "8px", flexWrap: "wrap" }}>
              
              <label style={{ border: transportMode === 'flight' ? '2px solid #007bff' : '1px solid #ccc', padding: '10px', borderRadius: '6px', cursor: 'pointer' }}>
                <input 
                  type="radio" 
                  name="transport" 
                  checked={transportMode === 'flight'} 
                  onChange={() => setTransportMode('flight')} 
                />
                Flight (₹{selectedPackage.departureCities[departureCity]?.flight})
              </label>

              <label style={{ border: transportMode === 'train' ? '2px solid #007bff' : '1px solid #ccc', padding: '10px', borderRadius: '6px', cursor: 'pointer' }}>
                <input 
                  type="radio" 
                  name="transport" 
                  checked={transportMode === 'train'} 
                  onChange={() => setTransportMode('train')} 
                />
                Train (₹{selectedPackage.departureCities[departureCity]?.train})
              </label>

              <label style={{ border: transportMode === 'bus' ? '2px solid #007bff' : '1px solid #ccc', padding: '10px', borderRadius: '6px', cursor: 'pointer' }}>
                <input 
                  type="radio" 
                  name="transport" 
                  checked={transportMode === 'bus'} 
                  onChange={() => setTransportMode('bus')} 
                />
                Bus (₹{selectedPackage.departureCities[departureCity]?.bus})
              </label>
            </div>
            <p style={{ fontSize: "12px", color: "#666", marginTop: "5px" }}>* Transport fares update dynamically based on your chosen departure city.</p>
          </div>

          <div style={{ margin: "15px 0" }}>
            <label><strong>Number of Passengers:</strong></label>
            <input 
              type="number" 
              min="1" 
              value={passengers} 
              onChange={(e) => setPassengers(Number(e.target.value))}
              style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px" }}
            />
          </div>

          <div style={{ display: "flex", gap: "15px", margin: "15px 0" }}>
            <div style={{ flex: 1 }}>
              <label><strong>Travel Date (Departure):</strong></label>
              <input 
                type="date" 
                value={travelDate} 
                onChange={(e) => {
                  const newTravelDate = e.target.value;
                  setTravelDate(newTravelDate);
                  setReturnDate(newTravelDate);
                }}
                style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px" }}
              />
            </div>

            <div style={{ flex: 1 }}>
              <label><strong>Return Date (Locked and Validated):</strong></label>
              <input 
                type="date" 
                min={travelDate || ""} 
                value={returnDate} 
                onChange={(e) => {
                  const newReturnDate = e.target.value;
                  if (travelDate && newReturnDate < travelDate) {
                    alert("Validation Blocked: Return date cannot be earlier than travel date!");
                    setReturnDate(travelDate);
                  } else {
                    setReturnDate(newReturnDate);
                  }
                }}
                style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px" }}
              />
            </div>
          </div>

          <div style={{ background: "#eef2f7", padding: "12px", borderRadius: "6px", margin: "15px 0" }}>
            <p>Per Person Cost: <strong>₹{basePerPerson}</strong></p>
            <h3>Total Blocked Price ({passengers} Passengers): ₹{grandTotal}</h3>
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={() => setStep(1)} style={{ padding: "10px 20px", cursor: "pointer" }}>Back</button>
            <button 
              onClick={() => {
                if (!travelDate || !returnDate) {
                  alert("Please select both Travel and Return dates to proceed.");
                  return;
                }
                if (returnDate < travelDate) {
                  alert("Validation Error: Return date cannot be earlier than travel date.");
                  return;
                }
                setStep(3);
              }} 
              style={{ background: "#28a745", color: "white", border: "none", padding: "10px 20px", borderRadius: "4px", cursor: "pointer" }}
            >
              Confirm and Block Booking
            </button>
          </div>
        </div>
      )}

      {/* ================= STEP 3: BOOKING SUMMARY ================= */}
      {step === 3 && selectedPackage && (
        <div className="step-page">
          <h2>Blocked Booking Summary</h2>
          <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "8px", background: "#fff" }}>
            <p><strong>Destination City (Locked):</strong> 🏙️ {selectedPackage.destination}</p>
            <p><strong>Package Name:</strong> {selectedPackage.title}</p>
            <p><strong>Departure City:</strong> 🚀 {departureCity}</p>
            <p><strong>Transport Mode:</strong> {transportMode.toUpperCase()} (₹{transportFare})</p>
            <p><strong>Famous Places Covered:</strong> {selectedPackage.coveredPlaces.join(", ")}</p>
            <p><strong>Passengers:</strong> {passengers}</p>
            <p><strong>Travel Date:</strong> {travelDate}</p>
            <p><strong>Return Date:</strong> {returnDate}</p>
            <hr style={{ margin: "15px 0" }} />
            <h3>Final Blocked Amount: ₹{grandTotal}</h3>
          </div>

          <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <button onClick={() => setStep(2)} style={{ padding: "10px 20px", cursor: "pointer" }}>Back</button>
            <button 
              onClick={() => setStep(4)} 
              style={{ background: "#007bff", color: "white", border: "none", padding: "10px 20px", borderRadius: "4px", cursor: "pointer" }}
            >
              Proceed to Secure Payment
            </button>
          </div>
        </div>
      )}

      {/* ================= STEP 4: PAYMENT PAGE ================= */}
      {step === 4 && selectedPackage && (
        <div className="step-page">
          <h2>Payment Gateway</h2>
          <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "8px", background: "#fdfdfd", marginBottom: "20px" }}>
            <h3>Amount to Pay: ₹{grandTotal}</h3>
            <p>Select your payment mode:</p>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "10px" }}>
              <label style={{ cursor: "pointer" }}>
                <input type="radio" name="payment" value="upi" checked={paymentMethod === "upi"} onChange={(e) => setPaymentMethod(e.target.value)} /> UPI / QR Code (GPay, PhonePe, Paytm)
              </label>
              
              {/* Highlighted Card Option */}
              <label style={{ cursor: "pointer", background: "#e2e8f0", padding: "10px", borderRadius: "6px", border: "1px solid #cbd5e1" }}>
                <input type="radio" name="payment" value="card" checked={paymentMethod === "card"} onChange={(e) => setPaymentMethod(e.target.value)} /> Credit or Debit Card
              </label>

              <label style={{ cursor: "pointer" }}>
                <input type="radio" name="payment" value="netbanking" checked={paymentMethod === "netbanking"} onChange={(e) => setPaymentMethod(e.target.value)} /> Net Banking
              </label>
            </div>
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={() => setStep(3)} style={{ padding: "10px 20px", cursor: "pointer" }}>Back</button>
            <button 
              onClick={() => setStep(5)} 
              style={{ background: "#28a745", color: "white", border: "none", padding: "10px 20px", borderRadius: "4px", cursor: "pointer" }}
            >
              Pay ₹{grandTotal} and Confirm
            </button>
          </div>
        </div>
      )}

      {/* ================= STEP 5: SUCCESS & CONFIRMATION ================= */}
      {step === 5 && (
        <div className="step-page" style={{ textAlign: "center", padding: "30px" }}>
          <h2 style={{ color: "#28a745" }}>Booking Blocked and Confirmed Successfully!</h2>
          <p>Payment processed via <strong>{paymentMethod.toUpperCase()}</strong>.</p>
          <p>Your trip to <strong>{selectedPackage?.destination}</strong> from <strong>{departureCity}</strong> via <strong>{transportMode}</strong> is locked.</p>
          <p><strong>Travel Date:</strong> {travelDate} | <strong>Return Date:</strong> {returnDate}</p>
          <p style={{ color: "#555", fontSize: "14px" }}>All famous spots ({selectedPackage?.coveredPlaces.join(", ")}) are added to your itinerary.</p>
          
          <button 
            onClick={onBack} 
            style={{ background: "#007bff", color: "white", border: "none", padding: "10px 20px", borderRadius: "4px", cursor: "pointer", marginTop: "20px" }}
          >
            Go Back to Home
          </button>
        </div>
      )}

    </div>
  );
}