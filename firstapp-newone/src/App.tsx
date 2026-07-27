import { useState } from "react";
import "./App.css";

import Login from "./pages/login";
import Home from "./pages/home";
import ProfilePage from "./pages/profile";

function App() {
  // Navigation state: tracks which screen is active
  const [currentPage, setCurrentPage] = useState<"login" | "home" | "profile">("login");

  // Logged-in user data
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  // Handle successful login/register from database
  function handleLoginSuccess(userData: { name: string; email: string }) {
    setUser(userData);
    setCurrentPage("home");
  }

  function handleNavigate(page: "home" | "profile") {
    setCurrentPage(page);
  }

  // Render 1: Login Screen
  if (currentPage === "login") {
    return (
      <Login
        onLoginSuccess={handleLoginSuccess}
      />
    );
  }

  // Render 2: Profile Page
  if (currentPage === "profile" && user) {
    return (
      <ProfilePage
        user={user}
        onBackToHome={() => setCurrentPage("home")}
      />
    );
  }

  // Render 3: Home Page
  if (currentPage === "home") {
    return <Home onNavigate={handleNavigate} currentPage={currentPage} user={user} />;
  }

  return null;
}

export default App;
