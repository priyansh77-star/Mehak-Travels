function Mumbai({ setShowMumbai, onBookNow }: { setShowMumbai: () => void; onBookNow: () => void }) {
  return (
    <div className="home-container">
      <h1>🌆 Mumbai Package</h1>

      <p>
        City life, beaches and famous places — all in Mumbai.
      </p>

      <h2>Package Includes</h2>

      <p>✔ Hotel Stay</p>
      <p>✔ Daily Food (Breakfast + Dinner)</p>
      <p>✔ Local Sightseeing</p>
      <p>✔ Transport Service</p>
      <p>✔ Guide Service</p>
      <p>✔ Pickup & Drop</p>

      <h2>Famous Places to Visit</h2>

      <p>📍 Gateway of India</p>
      <p>📍 Marine Drive</p>
      <p>📍 Juhu Beach</p>
      <p>📍 Siddhivinayak Temple</p>
      <p>📍 Colaba Causeway</p>
      <p>📍 Elephanta Caves</p>

      <h2>Price: ₹29,999 / Person</h2>

      <button onClick={onBookNow}>
        Book Now
      </button>

      <br /><br />

      <button onClick={setShowMumbai}>
        ← Back To Destination
      </button>
    </div>
  );
}

export default Mumbai;

