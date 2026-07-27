import { useState } from "react";

interface LoginProps {
  onLoginSuccess: (user: { name: string; email: string }) => void;
}

function Login({ onLoginSuccess }: LoginProps) {
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (isRegister && !name) {
      setError("Please enter your name");
      return;
    }

    setLoading(true);

    try {
      const endpoint = isRegister ? "register" : "login";
      const body: Record<string, string> = { email, password };
      if (isRegister) body.name = name;

      const res = await fetch(`http://localhost:5000/api/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Something went wrong");
        return;
      }

      // Success — pass user data to parent
      onLoginSuccess(data.user);
    } catch (err) {
      setError("Unable to connect to server. Make sure the backend is running.");
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsRegister(!isRegister);
    setError("");
  };

  return (
    <div className="login-container">
      <h2>{isRegister ? "Create Account" : "Login Page"}</h2>

      {isRegister && (
        <>
          <input
            type="text"
            placeholder="Enter Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br /><br />
        </>
      )}

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      {error && (
        <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>
      )}

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Please wait..." : isRegister ? "Register" : "Login"}
      </button>

      <br /><br />

      <button
        onClick={toggleMode}
        style={{ background: "transparent", color: "#2563eb", border: "1px solid #2563eb" }}
      >
        {isRegister ? "Already have an account? Login" : "Don't have an account? Register"}
      </button>
    </div>
  );
}

export default Login;
