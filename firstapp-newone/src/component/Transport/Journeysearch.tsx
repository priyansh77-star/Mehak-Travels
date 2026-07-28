import { useState } from "react";

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
];

const transportOptions = [
  { mode: "Flight", price: 6500, icon: "✈", duration: "2-3 hrs" },
  { mode: "Train", price: 1800, icon: "🚆", duration: "8-12 hrs" },
  { mode: "Bus", price: 1200, icon: "🚌", duration: "10-14 hrs" },
];

function JourneySearch() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    if (from && to && date) {
      setSearched(true);
    }
  };

  // Go back to search form
  if (searched) {
    return (
      <div className="home-container">
        <h1>Available Transport Options</h1>
        <p>
          <b>From:</b> {from} &nbsp; <b>To:</b> {to} &nbsp; <b>Date:</b> {date}
        </p>

        <div className="destination-container" style={{ marginTop: "30px" }}>
          {transportOptions.map((option, index) => (
            <div key={index} className="destination-card" style={{ width: "280px", padding: "30px" }}>
              <h2 style={{ fontSize: "48px", marginBottom: "10px" }}>{option.icon}</h2>
              <h3>{option.mode}</h3>
              <p style={{ fontSize: "20px", fontWeight: "bold", color: "#1e73e8", margin: "12px 0" }}>
                ₹{option.price.toLocaleString()}
              </p>
              <p>Duration: {option.duration}</p>
              <p>Per Person</p>
              <br />
              <button onClick={() => alert(`Booking ${option.mode} from ${from} to ${to} on ${date} - ₹${option.price}`)}>
                Book {option.mode}
              </button>
            </div>
          ))}
        </div>

        <br />
        <button onClick={() => setSearched(false)}>← Back to Search</button>
      </div>
    );
  }

  return (
    <div className="home-container">

      <h1>Journey Search</h1>

      <label>From</label>
      <br />
      <select value={from} onChange={(e) => setFrom(e.target.value)}>
        <option value="">Select City</option>
        {allCities.map((city) => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>

      <br /><br />

      <label>To</label>
      <br />
      <select value={to} onChange={(e) => setTo(e.target.value)}>
        <option value="">Select Destination</option>
        {allCities.map((city) => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>

      <br /><br />

      <label>Travel Date</label>
      <br />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <br /><br />

      <button onClick={handleSearch}>Search</button>

    </div>
  );
}

export default JourneySearch;
