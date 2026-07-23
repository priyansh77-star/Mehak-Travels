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

function App() {
  // Navigation state: tracks which screen is active
 const [currentPage, setCurrentPage] = useState<"login" | "form" | "home">("login");

  // Form input states
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [packageType, setPackageType] = useState<string>("");
  const [noOfTraveller, setNoOfTraveller] = useState<string>("");

  // Stores credentials from login page
  const [loginPassword, setLoginPassword] = useState<string>("");

  // Step 1: Handle login - save email, password and go to booking form
  function handleLoginSubmit(emailInput: string, password: string) {
    setEmail(emailInput);
    setLoginPassword(password);
    setCurrentPage("form");
  }

  // Step 2: Submit booking form data to backend, then go to home
  function submitForm() {
    if (!name || !email) {
      alert("Please fill in at least your Name and Email!");
      return;
    }

    fetch("http://localhost:5000/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        age,
        gender,
        email,
        packageType,
        noOfTraveller,
        password: loginPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Booking saved successfully:", data);
        setCurrentPage("home");
      })
      .catch((err) => {
        console.error("Failed to save booking:", err);
        setCurrentPage("home");
      });
  }

  // Render 1: Booking Form Screen
  if (currentPage === "form") {
    return (
      <div className="form-container">
        <div className="form">
          <h2>Mehak Travels Booking Form</h2>

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

          <button onClick={submitForm}>Submit Booking</button>
        </div>
      </div>
    );
  }

  // Render 2: Login Screen
  if (currentPage === "login") {
    return (
      <Login
        onSubmit={handleLoginSubmit}
      />
    );
  }

  // Render 3: Home Page
  if (currentPage === "home") {
    return <Home />;
  }

  return null;
}

export default App;
