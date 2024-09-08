import axios from 'axios';

const API_URL = 'http://localhost:8000/api/auth'; 

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};

export const getProfile = async (token) => {
  const response = await axios.get(`${API_URL}/profile`, {
    headers: {
      'x-auth-token': token,
    },
  });
  return response.data;
};

// New function to get mentors
export const getMentors = async () => {
  const response = await axios.get(`${API_URL}/mentors`);
  return response.data;
};
