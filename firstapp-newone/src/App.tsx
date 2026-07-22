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
  const [currentPage, setCurrentPage] = useState<"form" | "login" | "home">("form");

  // Form input states
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [packageType, setPackageType] = useState<string>("");
  const [noOfTraveller, setNoOfTraveller] = useState<string>("");

  // Step 1: Move from Form to Login screen
  function submitForm() {
    if (!name || !email) {
      alert("Please fill in at least your Name and Email!");
      return;
    }
    setCurrentPage("login");
  }

  // Step 2: Handle login submit and send booking data to backend server
  function handleLoginSubmit(emailInput: string, password: string) {
    setCurrentPage("home");

    fetch("http://localhost:5000/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
      .then((data) => {
        console.log("Booking saved successfully:", data);
      })
      .catch((err) => {
        console.error("Failed to save booking:", err);
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

          <button onClick={submitForm}>Continue to Login</button>
        </div>
      </div>
    );
  }

  // Render 2: Login Screen
  if (currentPage === "login") {
    return (
      <Login
        setShowHome={() => setCurrentPage("home")}
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