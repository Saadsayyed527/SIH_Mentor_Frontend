import React, { useEffect, useState } from 'react';
import { getMentors } from '../api';  // Import the getMentors API function
import './mentors.css'
const Mentors = () => {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch mentors from the backend
    const fetchMentors = async () => {
      try {
        const data = await getMentors();
        setMentors(data);  // Set mentors list from the API response
      } catch (err) {
        setError('Failed to fetch mentors');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMentors();
  }, []);

  if (loading) {
    return <p>Loading mentors...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="mentors-page">
      <h1>Mentors List</h1>
      <div className="mentors-list">
        {mentors.length === 0 ? (
          <p>No mentors available</p>
        ) : (
          mentors.map((mentor) => (
            <div key={mentor._id} className="mentor-card">
              <h2>Name: {mentor.name}</h2>
              <p>Email: {mentor.email}</p>
              <p>Phone Number: {mentor.number}</p>
              {/* You can add more fields as necessary */}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Mentors;
