import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todosSlice';

const AddTodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!text) return;
    dispatch(addTodo({ title: text, completed: false }));
    setText('');
  };

  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="Add todo" />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTodoForm;
