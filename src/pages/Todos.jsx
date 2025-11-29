import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../features/todos/todosSlice";
import AddTodoForm from "../components/AddTodoForm";
import TodoList from "../components/TodoList";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const status = useSelector((state) => state.todos.status);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Todo List</h2>
      <AddTodoForm />
      {status === "loading" && <p>Loading todos...</p>}
      {status === "succeeded" && <TodoList todos={todos} />}
      {status === "failed" && <p>Failed to load todos.</p>}
    </div>
  );
};

export default Todos;
