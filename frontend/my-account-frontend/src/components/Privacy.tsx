import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/site.css';

const Privacy: React.FC = () => {
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
          <h1>Privacy Policy</h1>
          <p><strong>Last updated:</strong> [Date]</p>
          
          <h2>Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you create an account, 
            make a purchase, or contact us for support.
          </p>
          
          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services, 
            process transactions, and communicate with you.
          </p>
          
          <h2>Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties 
            without your consent, except as described in this policy.
          </p>
          
          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information against 
            unauthorized access, alteration, disclosure, or destruction.
          </p>
          
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us through our 
            <Link to="/help"> Help Center</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
