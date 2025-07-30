import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/site.css';

const About: React.FC = () => {
  return (
    <div className="page-container">
      <div className="header">
        <div className="nav-bar">
          <Link to="/help" className="logo-container">
            <img src="/images/logos/logo-white.png" alt="StubHub" className="logo" />
          </Link>
        </div>
      </div>

      <div className="main-content">
        <div className="content-section">
          <h1>About StubHub</h1>
          <p>
            StubHub is the world's largest ticket marketplace, enabling fans to buy and sell tickets 
            to sports, concerts, theater and other live entertainment events.
          </p>
          <p>
            Founded in 2000, StubHub pioneered the online ticket resale market and remains the 
            world's largest ticket marketplace. We provide a safe and convenient way for fans to 
            buy and sell tickets to the events they love.
          </p>
          <p>
            Our platform connects millions of fans with their favorite teams, artists, and shows, 
            making live experiences accessible to everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
