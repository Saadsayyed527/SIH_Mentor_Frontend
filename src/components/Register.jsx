import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../api';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    password: '',
    role: 'student',
  });
  const navigate = useNavigate();

  const { name, number, email, password, role } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await register({ name, number, email, password, role });
      navigate('/login'); 
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='heading'>Register</h2>
      <div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
          required
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Number"
          name="number"
          value={number}
          onChange={onChange}
          required
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
          required
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
        />
      </div>
      <div>
        <select name="role" value={role} onChange={onChange}>
          <option value="student">Student</option>
          <option value="mentor">Mentor</option>
        </select>
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
