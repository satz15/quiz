import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    if (username.trim() === "" || password.trim() === "") {
      setErrorMessage("Username and password are required");
    } else {
      alert(`Welcome, ${username}!`);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="error-message">{errorMessage}</div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <NavLink to="questions">
        <button onClick={handleLogin}>Login</button>
      </NavLink>
    </div>
  );
};

export default LoginPage;
