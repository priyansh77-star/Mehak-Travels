function Manali({ setShowManali, onBookNow }: { setShowManali: () => void; onBookNow: () => void }) {
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
      <p>✔ Trekking</p>

      <h2>Famous Places to Visit</h2>

      <p>📍 Solang Valley</p>
      <p>📍 Rohtang Pass</p>
      <p>📍 Hadimba Temple</p>
      <p>📍 Mall Road</p>
      <p>📍 Manali Sanctuary</p>
      <p>📍 Jogini Falls</p>

      <h2>Price: ₹19,999 / Person</h2>

      <button onClick={onBookNow}>
        Book Now
      </button>

      <br /><br />

      <button onClick={setShowManali}>
        ← Back To Destination
      </button>
    </div>
  );
}

export default Manali;

