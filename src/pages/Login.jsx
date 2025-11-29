import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SECRET_PASSWORD = import.meta.env.VITE_APP_SECRET_PASSWORD; // from .env

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple validation: check secret password
    if (password === SECRET_PASSWORD) {
      setError("");
      navigate("/home");
    } else {
      setError("Invalid password. Try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    fontFamily: "'Work Sans', sans-serif",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
  },
  input: {
    margin: "10px 0",
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    marginTop: "10px",
    padding: "10px",
    cursor: "pointer",
    backgroundColor: "#1976d2",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
  },
  error: {
    color: "red",
    fontSize: "14px",
  },
};

export default Login;
