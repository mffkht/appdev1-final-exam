import axios from 'axios';
const API_URL = import.meta.env.VITE_APP_API_URL;

export const fetchTodosAPI = async () => {
  const response = await axios.get(`${API_URL}/todos`);
  return response.data;
};

