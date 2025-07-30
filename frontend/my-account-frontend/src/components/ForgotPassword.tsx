import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword: React.FC = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo-container">
          <img src="/images/logos/logo.png" alt="Logo" className="login-logo" />
        </div>
        
        <h2 className="login-title">Forgot Password</h2>
        
        <div className="alert alert-danger" role="alert">
          <h4>Error!</h4>
          <p>Forgot password page not implemented yet.</p>
          <hr />
          <p className="mb-0">
            <Link to="/help" className="btn btn-primary">Go Home</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
