function Flight() {

  return (

    <div className="home-container">

      <h1> Flight Booking</h1>

      <h2>Journey Details</h2>

      <label>From</label>
      <br />
      <select>
        <option>Select City</option>
        <option>Delhi</option>
        <option>Mumbai</option>
        <option>Bangalore</option>
        <option>Chandigarh</option>
        <option>Kolkata</option>
        <option>Chennai</option>
        <option>Hyderabad</option>
        <option>Jaipur</option>
        <option>Lucknow</option>
        <option>Ahmedabad</option>
        <option>Pune</option>
        <option>Guwahati</option>
        <option>Bhubaneswar</option>
        <option>Kochi</option>
        <option>Amritsar</option>
        <option>Patna</option>
        <option>Raipur</option>
        <option>Nagpur</option>
        <option>Indore</option>
        <option>Bhopal</option>
        <option>Dehradun</option>
        <option>Ranchi</option>
        <option>Varanasi</option>
        <option>Agra</option>
        <option>Udaipur</option>
        <option>Goa</option>
        <option>Manali</option>
        <option>Shimla</option>
        <option>Munnar</option>
        <option>Alleppey</option>
      </select>

      <br /><br />

      <label>To</label>
      <br />
      <select>
        <option>Select Destination</option>
        <option>Delhi</option>
        <option>Mumbai</option>
        <option>Bangalore</option>
        <option>Chandigarh</option>
        <option>Kolkata</option>
        <option>Chennai</option>
        <option>Hyderabad</option>
        <option>Jaipur</option>
        <option>Lucknow</option>
        <option>Ahmedabad</option>
        <option>Pune</option>
        <option>Guwahati</option>
        <option>Bhubaneswar</option>
        <option>Kochi</option>
        <option>Amritsar</option>
        <option>Patna</option>
        <option>Raipur</option>
        <option>Nagpur</option>
        <option>Indore</option>
        <option>Bhopal</option>
        <option>Dehradun</option>
        <option>Ranchi</option>
        <option>Varanasi</option>
        <option>Agra</option>
        <option>Udaipur</option>
        <option>Goa</option>
        <option>Manali</option>
        <option>Shimla</option>
        <option>Munnar</option>
        <option>Alleppey</option>
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
