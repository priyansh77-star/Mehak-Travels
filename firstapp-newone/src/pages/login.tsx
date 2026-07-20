import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";

interface LoginProps {
  setShowHome: Dispatch<SetStateAction<boolean>>;
  onSubmit: (email: string, password: string) => void;
}

function Login(props: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    props.onSubmit(email, password);
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>

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

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;