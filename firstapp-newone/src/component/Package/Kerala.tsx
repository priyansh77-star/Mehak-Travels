import { useState } from "react";

function Kerala({setShowKerala}:any){

  const [booked, setBooked] = useState(false);


  return(
    <div className="home-container">


      <h1>  Kerala Package </h1>


      <p>
        Beautiful beaches, backwaters and peaceful nature.
      </p>


      <h2>
        Package Details
      </h2>


      <p>✔ 5 Days / 4 Nights</p>
      <p>✔ Hotel Included</p>
      <p>✔ Food Included</p>
      <p>✔ Transport Included</p>


      <h2>
        Price: ₹22,999
      </h2>



      <button onClick={()=>setBooked(true)}>
        Book Now
      </button>



      {
        booked && (
          <h3>
            ✅ Kerala Trip Booked Successfully!
          </h3>
        )
      }



      <br/><br/>



      <button onClick={()=>setShowKerala(false)}>
        ← Back To Destination
      </button>


    </div>
  );

}

export default Kerala;