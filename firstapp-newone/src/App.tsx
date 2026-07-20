import { useState } from "react";
import "./App.css";

import Name from "./component/name";
import Age from "./component/age";
import Gender from "./component/gender";
import Email from "./component/email";
import TravelPackage from "./component/TravelPackage";
import NumberOfTraveller from "./component/NumberofTraveller";

import Login from "./pages/login";
import Home from "./pages/home";
import Navbar from "./Hero";


function App() {

  const [showForm, setShowForm] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [showHome, setShowHome] = useState(false);
  const [showTransport, setShowTransport] = useState(false);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [packageType, setPackageType] = useState("");
  const [noOfTraveller, setNoOfTraveller] = useState("");

  function submitForm() {
    setShowForm(false);
    setShowLogin(true);
  }

  function handleLoginSubmit(emailInput: string, password: string) {
    setShowLogin(false);
    setShowHome(true);

    fetch('http://localhost:5000/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        age,
        gender,
        email: emailInput,
        packageType,
        noOfTraveller,
        password,
      }),
    })
      .then((res) => res.json())
      .catch((err) => {
        console.error('Failed to save booking:', err);
      });
  }

  if (showForm) {
    return (
      <div className="form-container">
        <div className="form">

          <h2>Travel Booking Form</h2>

          <Name name={name} setName={setName} />
          <Age age={age} setAge={setAge} />
          <Gender gender={gender} setGender={setGender} />
          <Email email={email} setEmail={setEmail} />

          <TravelPackage
            packageType={packageType}
            setPackageType={setPackageType}
          />

          <NumberOfTraveller
            noOfTraveller={noOfTraveller}
            setNoOfTraveller={setNoOfTraveller}
          />

          <button onClick={submitForm}>
            Continue to Login
          </button>

        </div>
      </div>
    );
  }

  if (showLogin && !showHome) {
    return (
      <Login setShowHome={setShowHome} onSubmit={handleLoginSubmit} />
    );
  }

  

if (showTransport) {
  return (
    <>
      <Navbar />
      
    </>
  );
}

  if (showHome) {
    return (
      <>
        <Navbar />
        <Home setShowTransport={setShowTransport} />
      </>
    );
  }

  return null;
}

export default App;