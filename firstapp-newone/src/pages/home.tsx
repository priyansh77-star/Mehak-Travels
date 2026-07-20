import { useState } from "react";

import Manali from "../component/Package/Manali";
import Kerala from "../component/Package/Kerala";
import Mumbai from "../component/Package/Mumbai";

function Home({ setShowTransport }: any) {

  const [showManali, setShowManali] = useState(false);
  const [showKerala, setShowKerala] = useState(false);
  const [showMumbai, setShowMumbai] = useState(false);

  const destinations = [
    {
      name: "Manali",
      desc: "Adventure, Nature and Peace. All in Manali.",
      price: "₹19,999 per person"
    },

    {
      name: "Kerala",
      desc: "Beautiful beaches and amazing backwaters.",
      price: "₹22,999 per person"
    },

    {
      name: "Mumbai",
      desc: "City life, beaches and famous places.",
      price: "₹29,999 per person"
    }
  ];

  if (showManali) {
    return <Manali />;
  }

  if (showKerala) {
    return <Kerala />;
  }

  if (showMumbai) {
    return <Mumbai />;
  }

  return (
    <div className="home-container">

      <h1>Welcome To Travel App</h1>

      <h2>Explore Your Dream Destination</h2>

      <p>
        Discover the best places to travel with exciting packages
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

              if (item.name === "Manali") {
                setShowManali(true);
              }

              if (item.name === "Kerala") {
                setShowKerala(true);
              }

              if (item.name === "Mumbai") {
                setShowMumbai(true);
              }

            }}
          >

            <h3>{item.name}</h3>

            <p>{item.desc}</p>

            <b>Starting From {item.price}</b>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Home;