// Selectors

import React, { useState, useEffect } from "react";
import "./App.css"; // Make sure your CSS handles classes like standard, light, darker

const App = () => {
  // States
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const [theme, setTheme] = useState(
    localStorage.getItem("savedTheme") || "standard"
  );

  // Load todos from localStorage on mount
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Apply theme to body
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("savedTheme", theme);
  }, [theme]);

  // Add a new todo
  const addTodo = (e) => {
    e.preventDefault();
    const trimmed = todoInput.trim();
    if (!trimmed) {
      alert("You must write something!");
      return;
    }
    const newTodo = { text: trimmed, completed: false };
    setTodos((prev) => [...prev, newTodo]);
    setTodoInput("");
  };

  // Delete a todo
  const deleteTodo = (index) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };

  // Toggle completion
  const toggleComplete = (index) => {
    setTodos((prev) =>
      prev.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Change theme
  const changeTheme = (color) => setTheme(color);

  return (
    <div className="app">
      <h1 id="title" className={theme === "darker" ? "darker-title" : ""}>
        Todo App
      </h1>
      <div className="theme-buttons">
        <button onClick={() => changeTheme("standard")}>Standard</button>
        <button onClick={() => changeTheme("light")}>Light</button>
        <button onClick={() => changeTheme("darker")}>Darker</button>
      </div>
      <form onSubmit={addTodo}>
        <input
          className={`${theme}-input`}
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          placeholder="Add a todo..."
        />
        <button className={`todo-btn ${theme}-button`} type="submit">
          Add
        </button>
      </form>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`todo ${theme}-todo ${todo.completed ? "completed" : ""}`}
          >
            <span className="todo-item">{todo.text}</span>
            <button
              className={`check-btn ${theme}-button`}
              onClick={() => toggleComplete(index)}
            >
              ✓
            </button>
            <button
              className={`delete-btn ${theme}-button`}
              onClick={() => deleteTodo(index)}
            >
              🗑
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
