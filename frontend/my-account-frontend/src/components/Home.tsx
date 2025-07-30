import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/site.css';

const Home: React.FC = () => {
  return (
    <div className="page-container">
      <div className="header">
        <div className="nav-bar">
          <Link to="/help" className="logo-container">
            <img src="/images/logos/logo-white.png" alt="StubHub" className="logo" />
          </Link>
          <div className="nav-links">
            <Link to="/login" className="nav-link">Sign In</Link>
            <Link to="/register" className="nav-link">Create Account</Link>
          </div>
        </div>
      </div>

      <div className="main-content">
        <div className="hero-section">
          <h1>Find Events</h1>
          <p>Discover and buy tickets to the best events near you</p>
          
          <div className="search-section">
            <div className="search-box">
              <input 
                type="text" 
                className="search-input" 
                placeholder="Search for events, artists, teams, and more"
              />
              <button className="search-button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="events-section">
          <h2>Popular Events</h2>
          <div className="events-grid">
            <div className="event-card">
              <div className="event-image-placeholder"></div>
              <div className="event-info">
                <h3>Sample Event 1</h3>
                <p>Sample Venue • Sample Date</p>
                <p className="event-price">From $50</p>
              </div>
            </div>
            
            <div className="event-card">
              <div className="event-image-placeholder"></div>
              <div className="event-info">
                <h3>Sample Event 2</h3>
                <p>Sample Venue • Sample Date</p>
                <p className="event-price">From $75</p>
              </div>
            </div>
            
            <div className="event-card">
              <div className="event-image-placeholder"></div>
              <div className="event-info">
                <h3>Sample Event 3</h3>
                <p>Sample Venue • Sample Date</p>
                <p className="event-price">From $100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
