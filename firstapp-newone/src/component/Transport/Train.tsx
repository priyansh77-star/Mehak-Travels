function Train() {

  return (
    <div className="home-container">

      <h1>🚆 Train Booking</h1>

      <h2>Journey Details</h2>

      <label>From</label>
      <br />
      <select>
        <option>Select City</option>
        <option>Delhi</option>
        <option>Mumbai</option>
        <option>Ahmedabad</option>
        <option>Lucknow</option>
      </select>

      <br /><br />

      <label>To</label>
      <br />
      <select>
        <option>Select Destination</option>
        <option>Manali</option>
        <option>Goa</option>
        <option>Mumbai</option>
        <option>Kerala</option>
      </select>

      <br /><br />

      <label>Choose Train</label>
      <br />
      <select>
        <option>Select Train</option>
        <option>Vande Bharat Express</option>
        <option>Rajdhani Express</option>
        <option>Shatabdi Express</option>
        <option>Duronto Express</option>
      </select>

      <br /><br />

      <label>Travel Date</label>
      <br />
      <input type="date" />

      <br /><br />
      <label>Return Date</label>
      <br />
      <input type="date" />

      <br /><br />



      <label>Price</label>
      <br />
      <input type="" />

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
        Book Train
      </button>

    </div>
  );
}

export default Train;