import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api';
import '../app.css'; 

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const { email, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password });
      if (res.token) {
        localStorage.setItem('token', res.token);
        navigate('/dashboard');
      }
    } catch (err) {
      console.error('Login failed', err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Login</h2>
      <div>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
          required
          autoComplete="email"
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChange}
          required
          autoComplete="current-password"
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
