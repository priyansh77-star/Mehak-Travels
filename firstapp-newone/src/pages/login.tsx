import type { Dispatch, SetStateAction } from "react";

interface LoginProps {
  setShowHome: Dispatch<SetStateAction<boolean>>;
}

function Login(props: LoginProps) {
  return (
    <div className="login-container">

      <h2>Login Page</h2>

      <input
        type="email"
        placeholder="Enter Email"
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
      />

      <br /><br />

      <button onClick={() => props.setShowHome(true)}>
        Login
      </button>

    </div>
  );
}

export default Login;