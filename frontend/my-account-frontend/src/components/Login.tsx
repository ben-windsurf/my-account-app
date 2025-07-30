import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/site.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [stayLoggedIn, setStayLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    const success = await login(email, password);
    
    if (success) {
      navigate('/home');
    } else {
      setErrorMessage('Invalid email or password');
    }
    
    setLoading(false);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo-container">
          <img src="/images/logos/logo.png" alt="Logo" className="login-logo" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
        </div>
        
        <h2 className="login-title">Sign in to StubHub</h2>
        
        <form className="login-form" onSubmit={handleSubmit}>
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
          
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
          
          <div className="form-group">
            <input 
              type="password" 
              className="form-control" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          
          <div className="form-check-container">
            <div className="form-check">
              <input 
                type="checkbox" 
                className="form-check-input" 
                id="stayLoggedIn"
                checked={stayLoggedIn}
                onChange={(e) => setStayLoggedIn(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="stayLoggedIn">Stay logged in</label>
            </div>
            <Link to="/forgot-password" className="forgot-password-link">Forgot Password</Link>
          </div>
          
          <button type="submit" className="btn btn-primary btn-signin" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
          
          <div className="privacy-notice">
            By signing in or creating an account, you acknowledge and accept our <Link to="/privacy" className="privacy-link">privacy policy</Link>
          </div>
        </form>
        
        <div className="social-login">
          <button type="button" className="btn btn-facebook">
            <img src="/images/logos/facebook.png" alt="Facebook" className="social-icon" />
            Log In with Facebook
          </button>
          
          <button type="button" className="btn btn-apple">
            <img src="/images/logos/apple.png" alt="Apple" className="social-icon" />
            Sign in with Apple
          </button>
        </div>
        
        <div className="create-account">
          New to StubHub? <Link to="/register" className="create-account-link">Create account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
