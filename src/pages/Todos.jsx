import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../redux/todosSlice';
import AddTodoForm from '../components/AddTodoForm';
import TodoList from '../components/TodoList';

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm />
      <TodoList todos={todos} />
    </div>
  );
};

export default Todos;
