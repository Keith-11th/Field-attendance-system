import axios from 'axios';

// Create an Axios instance pointing to your Django backend
const API = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/accounts/',
});

// Automatically add the JWT token to headers if it exists in localStorage
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;