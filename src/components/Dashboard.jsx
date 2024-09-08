import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProfile } from '../api';
import './calender.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import Calendar from 'react-datepicker/dist/calendar';
import CalendlyWidget from './CalendlyWidget';
import Mentors from './Mentors';

const Dashboard = () => {
  const [user, setUser] = useState({});
  const [startDate, setStartDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
      }
      try {
        const res = await getProfile(token);
        setUser(res);
      } catch (err) {
        console.error(err);
        navigate('/login');
      }
    };

    fetchProfile();
  }, [navigate]);

  const okay = async () => {
    try {
      alert('Your Meeting is not Scheduled');
    } catch (err) {
      console.error(err.response.data);
    }
  };

  const handleButtonClick = () => {
    setShowCalendar(!showCalendar); 
  };

  return (
    <div className='mainwala'>
      <div className='leftwala' >
        <h1>Hello {user.role === 'student' ? 'Student' : 'Mentor'} Your Details</h1>
        
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Phone Number: {user.number}</p>
        <p></p>
        {user.role === 'student' && <p>Your Student ID is: {user._id}</p>
        }
     
      <Mentors/>
      </div>


      
      <div className="rightwala"><CalendlyWidget/></div>
     
    </div>
  );
};

export default Dashboard;