import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authAPI } from '../services/api';

interface User {
  id: number;
  email: string;
  created_at: string;
  is_active: boolean;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      const savedToken = localStorage.getItem('token');
      if (savedToken) {
        try {
          const userData = await authAPI.getCurrentUser(savedToken);
          setUser(userData);
          setToken(savedToken);
        } catch (error) {
          localStorage.removeItem('token');
          setToken(null);
        }
      }
      setLoading(false);
    };

    initAuth();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const response = await authAPI.login(email, password);
      const { access_token } = response;
      
      localStorage.setItem('token', access_token);
      setToken(access_token);
      
      const userData = await authAPI.getCurrentUser(access_token);
      setUser(userData);
      
      return true;
    } catch (error) {
      return false;
    }
  };

  const register = async (email: string, password: string): Promise<boolean> => {
    try {
      await authAPI.register(email, password);
      return true;
    } catch (error) {
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  const value = {
    user,
    token,
    login,
    register,
    logout,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
