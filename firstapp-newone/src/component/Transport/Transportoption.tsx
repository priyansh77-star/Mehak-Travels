function TransportOptions() {
  return (
    <div className="home-container">

      <h1>Select Transport</h1>

      <div className="destination-card">
        <h2>✈ Flight</h2>
        <p>Price : ₹6500</p>
        <button>Book Flight</button>
      </div>

      <br />

      <div className="destination-card">
        <h2>🚆 Train</h2>
        <p>Price : ₹1800</p>
        <button>Book Train</button>
      </div>

      <br />

      <div className="destination-card">
        <h2>🚌 Bus</h2>
        <p>Price : ₹1200</p>
        <button>Book Bus</button>
      </div>

    </div>
  );
}

export default TransportOptions;