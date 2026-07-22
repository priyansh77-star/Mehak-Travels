function Kerala({ setShowKerala, onBookNow }: { setShowKerala: () => void; onBookNow: () => void }) {
  return (
    <div className="home-container">
      <h1>🌴 Kerala Package</h1>

      <p>
        Beautiful beaches, backwaters and peaceful nature.
      </p>

      <h2>Package Includes</h2>

      <p>✔ 5 Days / 4 Nights</p>
      <p>✔ Hotel Stay</p>
      <p>✔ Daily Food (Breakfast + Dinner)</p>
      <p>✔ Transport Service</p>
      <p>✔ Guide Service</p>
      <p>✔ Houseboat Ride</p>

      <h2>Famous Places to Visit</h2>

      <p>📍 Alleppey Backwaters</p>
      <p>📍 Munnar Tea Gardens</p>
      <p>📍 Kochi Fort</p>
      <p>📍 Kumarakom</p>
      <p>📍 Thekkady Wildlife</p>
      <p>📍 Kovalam Beach</p>

      <h2>Price: ₹22,999 / Person</h2>

      <button onClick={onBookNow}>
        Book Now
      </button>

      <br /><br />

      <button onClick={setShowKerala}>
        ← Back To Destination
      </button>
    </div>
  );
}

export default Kerala;

