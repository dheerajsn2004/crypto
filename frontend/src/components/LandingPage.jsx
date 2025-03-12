import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/main');
  };

  return (
    <div className="landing-page">
      <h1>Welcome to the Cryptography Event</h1>
      <button onClick={handleNavigate}>Go to Main Page</button>
    </div>
  );
};

export default LandingPage;