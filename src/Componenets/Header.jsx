import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="dashboard-header">
      <div className="header-greeting">
        <h2>Good morning, Admin </h2>
        <p>Here's what's happening with your tasks today.</p>
      </div>
      
      <div className="header-controls">
        <div className="date-display">
          <i className="fa-regular fa-calendar"></i>
          <span>May 22, 2025</span>
        </div>
      </div>
    </header>
  );
};

export { Header};