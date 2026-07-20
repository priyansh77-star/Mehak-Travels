import { useState, useEffect } from "react";

import Manali from "../component/Package/Manali";
import Kerala from "../component/Package/Kerala";
import Mumbai from "../component/Package/Mumbai";

const fallbackServices = [
  "Hotel",
  "Car",
  "Food",
  "Flight",
  "Train",
  "Guide",
  "Sight Seeing",
  "Travel Insurance",
];

function Home({ setShowTransport }: any) {

  const [showManali, setShowManali] = useState(false);
  const [showKerala, setShowKerala] = useState(false);
  const [showMumbai, setShowMumbai] = useState(false);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [showPayment, setShowPayment] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({ destination: "", city: "" });
  const [services, setServices] = useState<string[]>(fallbackServices);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const stateCities = [
    {
      state: "Andhra Pradesh",
      cities: ["Visakhapatnam", "Vijayawada", "Tirupati", "Amaravati", "Guntur", "Nellore"],
    },
    {
      state: "Arunachal Pradesh",
      cities: ["Itanagar", "Tawang", "Ziro", "Bomdila", "Pasighat"],
    },
    {
      state: "Assam",
      cities: ["Guwahati", "Tezpur", "Jorhat", "Silchar", "Haflong"],
    },
    {
      state: "Bihar",
      cities: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga"],
    },
    {
      state: "Chhattisgarh",
      cities: ["Raipur", "Bilaspur", "Jagdalpur", "Korba", "Rajnandgaon"],
    },
    {
      state: "Goa",
      cities: ["Panaji", "Margao", "Vasco da Gama", "Mapusa", "Anjuna"],
    },
    {
      state: "Gujarat",
      cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Dwarka"],
    },
    {
      state: "Haryana",
      cities: ["Gurugram", "Faridabad", "Chandigarh", "Hisar", "Karnal"],
    },
    {
      state: "Himachal Pradesh",
      cities: ["Manali", "Shimla", "Dharamshala", "Kullu", "Spiti", "Chamba"],
    },
    {
      state: "Jharkhand",
      cities: ["Ranchi", "Jamshedpur", "Dhanbad", "Deoghar", "Hazaribagh"],
    },
    {
      state: "Karnataka",
      cities: ["Bengaluru", "Mysuru", "Mangaluru", "Hubballi", "Coorg", "Hampi"],
    },
    {
      state: "Kerala",
      cities: ["Kochi", "Alleppey", "Munnar", "Kumarakom", "Thekkady", "Kovalam"],
    },
    {
      state: "Madhya Pradesh",
      cities: ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain", "Khajuraho"],
    },
    {
      state: "Maharashtra",
      cities: ["Mumbai", "Pune", "Mahabaleshwar", "Nashik", "Aurangabad", "Nagpur"],
    },
    {
      state: "Manipur",
      cities: ["Imphal", "Bishnupur", "Ukhrul", "Churachandpur", "Moreh"],
    },
    {
      state: "Meghalaya",
      cities: ["Shillong", "Cherrapunji", "Dawki", "Mawlynnong", "Tura"],
    },
    {
      state: "Mizoram",
      cities: ["Aizawl", "Lunglei", "Saiha", "Champhai", "Serchhip"],
    },
    {
      state: "Nagaland",
      cities: ["Kohima", "Dimapur", "Mokokchung", "Mon", "Phek"],
    },
    {
      state: "Odisha",
      cities: ["Bhubaneswar", "Puri", "Cuttack", "Konark", "Sundargarh"],
    },
    {
      state: "Punjab",
      cities: ["Amritsar", "Ludhiana", "Jalandhar", "Chandigarh", "Patiala"],
    },
    {
      state: "Rajasthan",
      cities: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer", "Bikaner", "Mount Abu"],
    },
    {
      state: "Sikkim",
      cities: ["Gangtok", "Pelling", "Lachung", "Yuksom", "Namchi"],
    },
    {
      state: "Tamil Nadu",
      cities: ["Chennai", "Coimbatore", "Madurai", "Ooty", "Kodaikanal", "Rameswaram"],
    },
    {
      state: "Telangana",
      cities: ["Hyderabad", "Warangal", "Karimnagar", "Nizamabad", "Khammam"],
    },
    {
      state: "Tripura",
      cities: ["Agartala", "Udaipur", "Kailasahar", "Dharmanagar", "Belonia"],
    },
    {
      state: "Uttar Pradesh",
      cities: ["Lucknow", "Agra", "Varanasi", "Prayagraj", "Noida", "Ayodhya"],
    },
    {
      state: "Uttarakhand",
      cities: ["Dehradun", "Nainital", "Mussoorie", "Rishikesh", "Haridwar", "Auli"],
    },
    {
      state: "West Bengal",
      cities: ["Kolkata", "Darjeeling", "Durgapur", "Siliguri", "Shantiniketan", "Kalimpong"],
    },
  ];

  const destinations = [
    {
      name: "Manali",
      desc: "Adventure, Nature and Peace. All in Manali.",
      price: "₹19,999 per person"
    },

    {
      name: "Goa",
      desc: "Beautiful beaches, nightlife and relaxed coastal vibes.",
      price: "₹24,999 per person"
    },

    {
      name: "Mumbai",
      desc: "City life, beaches and famous places.",
      price: "₹29,999 per person"
    }
  ];

  useEffect(() => {
    fetch("http://localhost:5000/api/services")
      .then(async (res) => {
        if (!res.ok) throw new Error("Failed to load services");
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setServices(data);
        } else {
          setServices(fallbackServices);
        }
      })
      .catch(() => setServices(fallbackServices));
  }, []);

  const startPayment = (destination: string, city: string) => {
    setPaymentDetails({ destination, city });
    setShowServices(true);
  };

  if (showManali) {
    return <Manali setShowManali={setShowManali} />;
  }

  if (showKerala) {
    return <Kerala setShowKerala={setShowKerala} />;
  }

  if (showMumbai) {
    return <Mumbai setShowMumbai={setShowMumbai} />;
  }

  if (showConfirmation) {
    return (
      <div className="home-container">
        <div className="destination-card" style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
          <h2>Payment Confirmed</h2>
          <p>Your booking for {paymentDetails.city} in {paymentDetails.destination} has been confirmed successfully.</p>
          <p>For more queries, contact us at <strong>8882530488</strong> or email us at <strong>mehaktravels21@gmail.com</strong>.</p>
          <button
            style={{ marginTop: "12px" }}
            onClick={() => {
              setShowConfirmation(false);
              setShowServices(false);
              setShowPayment(false);
              setSelectedServices([]);
              setPaymentDetails({ destination: "", city: "" });
            }}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  if (showPayment) {
    return (
      <div className="home-container">
        <h2>Payment</h2>
        <p>Complete your booking for {paymentDetails.city} in {paymentDetails.destination}.</p>

        <div className="destination-card" style={{ maxWidth: "420px", margin: "0 auto" }}>
          <h3>Trip Summary</h3>
          <p><strong>Destination:</strong> {paymentDetails.destination}</p>
          <p><strong>City:</strong> {paymentDetails.city}</p>
          <p><strong>Selected Services:</strong> {selectedServices.length ? selectedServices.join(", ") : "None"}</p>
          <label>Cardholder Name</label>
          <input type="text" placeholder="John Doe" style={{ width: "100%", padding: "8px", marginTop: "6px" }} />
          <label>Card Number</label>
          <input type="text" placeholder="4242 4242 4242 4242" style={{ width: "100%", padding: "8px", marginTop: "6px" }} />
          <label>Expiry</label>
          <input type="text" placeholder="MM/YY" style={{ width: "100%", padding: "8px", marginTop: "6px" }} />
          <label>CVV</label>
          <input type="text" placeholder="123" style={{ width: "100%", padding: "8px", marginTop: "6px" }} />
          <button
            style={{ marginTop: "12px", width: "100%" }}
            onClick={() => {
              setShowConfirmation(true);
              setShowPayment(false);
            }}
          >
            Pay Now
          </button>
        </div>

        <button
          style={{ marginTop: "16px" }}
          onClick={() => {
            setShowServices(false);
            setShowPayment(false);
            setSelectedServices([]);
            setPaymentDetails({ destination: "", city: "" });
          }}
        >
          Back
        </button>
      </div>
    );
  }

  if (showServices) {
    return (
      <div className="home-container">
        <h2>Select Services</h2>
        <p>Choose the services you want for your trip to {paymentDetails.city} in {paymentDetails.destination}.</p>

        <div className="destination-card" style={{ maxWidth: "520px", margin: "0 auto", textAlign: "left" }}>
          <label htmlFor="service-select" style={{ display: "block", marginBottom: "8px" }}>
            Available Services
          </label>
          <select
            id="service-select"
            multiple
            value={selectedServices}
            onChange={(event) => {
              const chosen = Array.from(event.target.selectedOptions, (option) => option.value);
              setSelectedServices(chosen);
            }}
            style={{ width: "100%", minHeight: "140px", padding: "8px" }}
          >
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          <p style={{ fontSize: "0.9rem", color: "#666" }}>Hold Ctrl/Cmd to select multiple services.</p>

          <button
            style={{ marginTop: "12px", width: "100%" }}
            onClick={() => {
              setShowServices(false);
              setShowPayment(true);
            }}
          >
            Continue to Payment
          </button>
        </div>

        <button
          style={{ marginTop: "16px" }}
          onClick={() => {
            setShowServices(false);
            setShowPayment(false);
            setSelectedServices([]);
            setPaymentDetails({ destination: "", city: "" });
          }}
        >
          Back
        </button>
      </div>
    );
  }

  if (selectedState) {
    return (
      <div className="home-container">
        <h2>Cities in {selectedState}</h2>
        <p>Select a city to explore your next trip.</p>
        <div className="destination-container">
          {stateCities
            .find((item) => item.state === selectedState)
            ?.cities.map((city, index) => (
              <div
                className="destination-card"
                key={index}
                onClick={() => {
                  startPayment(selectedState || "India", city);
                }}
              >
                <h3>{city}</h3>
                <p>Explore {city} in {selectedState}</p>
              </div>
            ))}
        </div>
        <button
          onClick={() => {
            setSelectedState(null);
            setShowServices(false);
            setShowPayment(false);
            setSelectedServices([]);
            setPaymentDetails({ destination: "", city: "" });
          }}
        >
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="home-container">

      <h1>Welcome To Mehak Travels</h1>

      <h2>Explore Your Dream Destination</h2>

      <p>
        Discover the best places to visit with exciting Mehak Travels packages
        at affordable prices. Plan your trip with us and make your
        journey memorable.
      </p>

      <button onClick={() => setShowTransport(true)}>
        Book Now
      </button>

      <h2 className="popular-heading">
        Popular Destinations
      </h2>

      <div className="destination-container">

        {destinations.map((item, index) => (

          <div
            className="destination-card"
            key={index}
            onClick={() => {
              startPayment(item.name, item.name);
            }}
          >

            <h3>{item.name}</h3>

            <p>{item.desc}</p>

            <b>Starting From {item.price}</b>

          </div>

        ))}

      </div>

      <h2 className="popular-heading">
        Explore States of India
      </h2>

      <div className="destination-container">
        {stateCities.map((item, index) => (
          <div
            className="destination-card"
            key={index}
            onClick={() => setSelectedState(item.state)}
          >
            <h3>{item.state}</h3>
            <p>{item.cities.join(", ")}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Home;