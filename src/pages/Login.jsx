import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const SECRET_PASSWORD = import.meta.env.VITE_APP_SECRET_PASSWORD;
  const API_URL = import.meta.env.VITE_APP_API_URL;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${API_URL}/users?_limit=3`);
        setUsers(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUsers();
  }, [API_URL]);

  const handleLogin = (e) => {
    e.preventDefault();
    const userExists = users.find((user) => user.username === username);

    if (!userExists) {
      setError("User not found!");
      return;
    }

    if (password !== SECRET_PASSWORD) {
      setError("Invalid password!");
      return;
    }

    // Redirect to Todos page
    navigate("/todos");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <button type="submit">Login</button>
        </div>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
