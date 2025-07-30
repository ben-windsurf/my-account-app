import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/site.css';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setMessage('If an account with that email exists, we have sent you a password reset link.');
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo-container">
          <img src="/images/logos/logo.png" alt="Logo" className="login-logo" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
        </div>
        
        <h2 className="login-title">Reset Password</h2>
        
        <form className="login-form" onSubmit={handleSubmit}>
          {message && <div className="alert alert-success">{message}</div>}
          
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" className="btn btn-primary btn-signin" disabled={loading}>
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>
          
          <div className="privacy-notice">
            Enter your email address and we'll send you a link to reset your password.
          </div>
        </form>
        
        <div className="create-account">
          Remember your password? <Link to="/login" className="create-account-link">Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
