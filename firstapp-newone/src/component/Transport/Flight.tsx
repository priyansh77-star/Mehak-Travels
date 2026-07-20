function Flight() {

  return (

    <div className="home-container">

      <h1> Flight Booking</h1>

      <h2>Journey Details</h2>

      <label>From</label>
      <br />
      <select>
        <option>Delhi</option>
        <option>Mumbai</option>
        <option>Bangalore</option>
        <option>Chandigarh</option>
        <option>Kolkata</option>
      </select>

      <br /><br />

      <label>To</label>
      <br />
      <select>
        <option>Manali</option>
        <option>Kerala</option>
        <option>Mumbai</option>
        <option>Goa</option>
        <option>Bali</option>
        <option>Dubai</option>
      </select>
      <label>Choose Flight</label>
<br />
<select>
  <option>Select Flight</option>
  <option>IndiGo - 6E201</option>
  <option>Air India - AI302</option>
  <option>SpiceJet - SG405</option>
  <option>Akasa Air - QP501</option>
  <option>Vistara - UK707</option>
</select>


      <br /><br />

      <label>Travel Date</label>
      <br />
      <input type="date" />

      <br /><br />

      <label>Passengers</label>
      <br />
      <input
        type="number"
        min="1"
        placeholder="Enter Number of Passengers"
      />

      <br /><br />

      <button className="package-btn">
        Book Flight
      </button>

    </div>

  );
}

export default Flight;