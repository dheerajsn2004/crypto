import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="main-page">
      <h1>Main Page</h1>
      <button onClick={() => handleNavigate('/inbox')}>Inbox</button>
      <button onClick={() => handleNavigate('/portfolio')}>Portfolio</button>
      <button onClick={() => handleNavigate('/report')}>Report</button>
    </div>
  );
};

export default MainPage;