import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface User {
  id: number;
  email: string;
  created_at: string;
  is_active: boolean;
}

export interface HelpArticle {
  id: number;
  title: string;
  content: string;
  category: string;
  is_popular: boolean;
  is_trending: boolean;
  created_at: string;
  updated_at: string;
}

export interface LoginResponse {
  access_token: string;
  token_type: string;
}

export const authAPI = {
  login: async (email: string, password: string): Promise<LoginResponse> => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },

  register: async (email: string, password: string): Promise<User> => {
    const response = await api.post('/auth/register', { email, password });
    return response.data;
  },

  getCurrentUser: async (token: string): Promise<User> => {
    const response = await api.get('/auth/me', {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  }
};

export const helpAPI = {
  getPopularArticles: async (): Promise<HelpArticle[]> => {
    const response = await api.get('/api/help/popular');
    return response.data;
  },

  getTrendingArticles: async (): Promise<HelpArticle[]> => {
    const response = await api.get('/api/help/trending');
    return response.data;
  },

  searchArticles: async (query: string): Promise<HelpArticle[]> => {
    const response = await api.post('/api/help/search', { query });
    return response.data;
  },

  getArticleById: async (id: number): Promise<HelpArticle> => {
    const response = await api.get(`/api/help/${id}`);
    return response.data;
  }
};
