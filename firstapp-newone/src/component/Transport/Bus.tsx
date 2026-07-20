function Bus() {

  return (
    <div className="home-container">

      <h1>  Bus Booking </h1>

      <h2>Journey Details</h2>

      <label>From</label>
      <br />
      <select>
        <option>Select City</option>
        <option>Delhi</option>
        <option>Mumbai</option>
        <option>Jaipur</option>
        <option>Chandigarh</option>
      </select>

      <br /><br />

      <label>To</label>
      <br />
      <select>
        <option>Select Destination</option>
        <option>Manali</option>
        <option>Goa</option>
        <option>Shimla</option>
        <option>Dehradun</option>
      </select>

      <br /><br />

      <label>Choose Bus</label>
      <br />
      <select>
        <option>Select Bus</option>
        <option>Volvo AC Sleeper</option>
        <option>Volvo Semi Sleeper</option>
        <option>Luxury Coach</option>
        <option>Deluxe Bus</option>
      </select>

      <br /><br />

      <label>Travel Date</label>
      <br />
      <input type="date" />

      <br /><br />
      <label>Return  Date</label>
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
        Book Bus
      </button>

    </div>
  );
}

export default Bus;