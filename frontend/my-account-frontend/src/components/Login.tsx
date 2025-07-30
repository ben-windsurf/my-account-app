import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
// @ts-ignore
import { Login } from '@ben-windsurf/component-library';

const LoginPage: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async ({ email, password }: { email: string; password: string }) => {
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

  const handleSocialLogin = (provider: string) => {
    console.log(`${provider} login clicked`);
  };

  return (
    <Login
      logo="/images/logos/logo.png"
      brandName="StubHub"
      themeColor="#483474"
      showEmailCode={false}
      showPrivacyNotice={true}
      socialLogins={{
        facebook: true,
        apple: true,
        google: false
      }}
      facebookLogo="/images/logos/facebook.png"
      appleLogo="/images/logos/apple.png"
      onSubmit={handleSubmit}
      onForgotPassword={handleForgotPassword}
      onCreateAccount={handleCreateAccount}
      onSocialLogin={handleSocialLogin}
      privacyPolicyLink="/privacy"
      loading={loading}
      errorMessage={errorMessage}
      isTypeScript={true}
    />
  );
};

export default LoginPage;
