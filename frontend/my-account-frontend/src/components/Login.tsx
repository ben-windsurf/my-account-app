import React, { useState } from 'react';
// @ts-ignore
import { Login } from 'component-library';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async ({ email, password }: { email: string; password: string; stayLoggedIn: boolean }) => {
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

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  const handleCreateAccount = () => {
    navigate('/register');
  };

  const socialLogins = [
    {
      type: 'facebook' as const,
      icon: '/images/logos/facebook.png',
      onLogin: () => console.log('Facebook login clicked')
    },
    {
      type: 'apple' as const,
      icon: '/images/logos/apple.png',
      onLogin: () => console.log('Apple login clicked')
    }
  ];

  return (
    <Login
      logo="/images/logos/logo.png"
      brandName="StubHub"
      themeColor="#684cbc"
      onSubmit={handleSubmit}
      onForgotPassword={handleForgotPassword}
      socialLogins={socialLogins}
      showEmailCode={false}
      showCreateAccount={true}
      onCreateAccount={handleCreateAccount}
      loading={loading}
      errorMessage={errorMessage}
    />
  );
};

export default LoginPage;
