import React, { useState, useEffect } from "react";
import "./App.css";

const themes = {
  dark: "#0b1a23",
  light: "#f0f8ff",
  standard: "#0d2a37",
};

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.style.backgroundColor = themes[theme];
  }, [theme]);

  const addTodo = (e) => {
    e.preventDefault();
    const trimmed = todoInput.trim();
    if (!trimmed) return;
    setTodos((prev) => [...prev, { text: trimmed, completed: false, date: new Date() }]);
    setTodoInput("");
  };

  const toggleComplete = (index) => {
    setTodos((prev) =>
      prev.map((todo, i) => (i === index ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const deleteTodo = (index) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      {/* Theme Circles */}
      <div className="theme-toggle">
        <span className={`circle ${theme === "standard" ? "active" : ""}`} onClick={() => setTheme("standard")}></span>
        <span className={`circle ${theme === "light" ? "active" : ""}`} onClick={() => setTheme("light")}></span>
        <span className={`circle ${theme === "dark" ? "active" : ""}`} onClick={() => setTheme("dark")}></span>
      </div>

      <h1 className="title">Just do it.</h1>

      <form className="todo-form" onSubmit={addTodo}>
        <input
          className="todo-input"
          type="text"
          placeholder="Add a task."
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button className="todo-button" type="submit">I Got This!</button>
      </form>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className={`todo-item ${todo.completed ? "completed" : ""}`}>
            <span className="todo-date">{new Date(todo.date).toLocaleString()}</span>
            <div className="todo-content">
              <span>{todo.text}</span>
              <div className="todo-actions">
                <button onClick={() => toggleComplete(index)}>✓</button>
                <button onClick={() => deleteTodo(index)}>🗑</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
