import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to the Todo App</h1>
      <p>Manage your todos easily and efficiently.</p>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default Home;
