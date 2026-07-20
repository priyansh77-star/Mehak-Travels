
import Flight from "./Flight";
import Train from "./Train";
import Bus from "./Bus";

function Transport() {
  return (
    <div className="transport-container">

      <h2>Select Mode of Transport</h2>

      <Flight />

      <Train />

      <Bus />

    </div>
  );
}

export default Transport;
