import { useState } from "react";

function JourneySearch() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="home-container">

      <h1>Journey Search</h1>

      <label>From</label>
      <br />
      <select value={from} onChange={(e) => setFrom(e.target.value)}>
        <option>Select City</option>
        <option>Delhi</option>
        <option>Mumbai</option>
        <option>Goa</option>
        <option>Jaipur</option>
        <option>Chandigarh</option>
        <option>Bangalore</option>
      </select>

      <br /><br />

      <label>To</label>
      <br />
      <select value={to} onChange={(e) => setTo(e.target.value)}>
        <option>Select Destination</option>
        <option>Delhi</option>
        <option>Mumbai</option>
        <option>Goa</option>
        <option>Jaipur</option>
        <option>Chandigarh</option>
        <option>Bangalore</option>
      </select>

      <br /><br />

      <label>Travel Date</label>
      <br />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <br /><br />

      <button>Search</button>

    </div>
  );
}

export default JourneySearch;