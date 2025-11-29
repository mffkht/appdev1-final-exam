import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUsersAPI } from '../api/todosAPI';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const users = await fetchUsersAPI();
      const user = users.find(u => u.username === username);
      if (!user) {
        setError('User not found');
        return;
      }
      if (password !== import.meta.env.VITE_APP_SECRET_PASSWORD) {
        setError('Invalid password');
        return;
      }
      navigate('/todos');
    } catch (err) {
      setError('Login failed');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default Login;
