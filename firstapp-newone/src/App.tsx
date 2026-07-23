import { useState } from "react";
import "./App.css";

import Login from "./pages/login";
import Home from "./pages/home";

function App() {
  // Navigation state: tracks which screen is active
  const [currentPage, setCurrentPage] = useState<"login" | "home">("login");

  // Handle login - go directly to home
  function handleLoginSubmit(emailInput: string, password: string) {
    console.log("Logged in with:", emailInput, password);
    setCurrentPage("home");
  }

  // Render 1: Login Screen
  if (currentPage === "login") {
    return (
      <Login
        onSubmit={handleLoginSubmit}
      />
    );
  }

  // Render 2: Home Page
  if (currentPage === "home") {
    return <Home />;
  }

  return null;
}

export default App;
