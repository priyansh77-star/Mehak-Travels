import { useState } from "react";

function Mumbai({setShowMumbai}:any){

  const [booked, setBooked] = useState(false);


  return(
    <div className="home-container">


      <h1>🌆 Mumbai Package</h1>


      <p>
        City life, beaches and famous places.
      </p>


      <h2>
        Package Details
      </h2>


      <p>✔ 4 Days / 3 Nights</p>
      <p>✔ Hotel Included</p>
      <p>✔ Food Included</p>
      <p>✔ Transport Included</p>


      <h2>
        Price: ₹29,999
      </h2>



      <button onClick={()=>setBooked(true)}>
        Book Now
      </button>



      {
        booked && (
          <h3>
             Mumbai Trip Booked Successfully!
          </h3>
        )
      }



      <br/><br/>



      <button onClick={()=>setShowMumbai(false)}>
        ← Back To Destination
      </button>


    </div>
  );

}

export default Mumbai;