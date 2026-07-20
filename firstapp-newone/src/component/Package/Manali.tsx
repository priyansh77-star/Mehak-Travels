import { useState } from "react";

function Manali({ setShowManali }: any) {

  const [booked, setBooked] = useState(false);

  return (
    <div className="home-container">

      <h1>🏔️ Manali Package</h1>

      <p>
        Adventure, Nature and Peace — all in Manali.
      </p>

      <h2>Package Includes</h2>

      <p>✔ Hotel Stay</p>
      <p>✔ Daily Food</p>
      <p>✔ Local Sightseeing</p>
      <p>✔ Transport Service</p>
      <p>✔ Guide Service</p>
      <p>✔ Tracking</p>

      <h2>Price: ₹19,999</h2>

      <button onClick={() => setBooked(true)}>
        Book Now
      </button>

      {
        booked && (
          <h3>
            ✅ Manali Trip Booked Successfully!
          </h3>
        )
      }

      <br /><br />

      <button onClick={() => setShowManali(false)}>
        ← Back To Destination
      </button>

    </div>
  );
}

export default Manali;
