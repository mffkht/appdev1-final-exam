import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTodosAPI, addTodoAPI, updateTodoAPI, deleteTodoAPI } from './todosAPI';

const initialState = {
  todos: [],
  status: 'idle',
};

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  return await fetchTodosAPI();
});

// Similarly, create addTodo, updateTodo, deleteTodo async thunks

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
      state.status = 'succeeded';
    });
  },
});

export default todosSlice.reducer;
