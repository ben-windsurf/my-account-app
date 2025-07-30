import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to StubHub</h1>
      <p>Find and buy tickets to your favorite events!</p>
      <nav>
        <Link to="/help">Help Center</Link> | 
        <Link to="/login">Login</Link> | 
        <Link to="/register">Register</Link>
      </nav>
    </div>
  );
};

export default Home;
