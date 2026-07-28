function Packages() {
  return (
    <section>

      <h2>Travel Packages</h2>

      <div className="cards">

        <div className="card">
          <h3>Basic Package</h3>
          <p className="price">From ₹9,999</p>
          <p><strong>Duration:</strong> 3-4 Days / 2-3 Nights</p>
          <p><strong>Includes:</strong> Hotel (3 Star), Breakfast + Dinner, Local Sightseeing</p>
          <p className="note">🚌 Transport charges extra (based on departure city)</p>
          <button>Book Now</button>
        </div>

        <div className="card">
          <h3>Premium Package</h3>
          <p className="price">From ₹18,999</p>
          <p><strong>Duration:</strong> 5-6 Days / 4-5 Nights</p>
          <p><strong>Includes:</strong> Hotel (4/5 Star), All Meals, Premium Sightseeing, Guide</p>
          <p className="note">🚌 Transport charges extra (based on departure city)</p>
          <button>Book Now</button>
        </div>

      </div>

    </section>
  );
}

export default Packages;
