import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleGoToTodos = () => {
    navigate("/todos");
  };

  return (
    <div className="home-container" style={styles.container}>
      <h1>Welcome to Your Todo App</h1>
      <p>Manage your tasks efficiently and stay organized.</p>
      <button onClick={handleGoToTodos} style={styles.button}>
        Go to Todos
      </button>
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
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    cursor: "pointer",
    backgroundColor: "#4caf50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
  },
};

export default Home;
