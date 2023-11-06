import axios from 'axios';
import {store} from '../Store/store.jsx'; // Import your Redux store

const api = axios.create({
  baseURL: 'http://localhost:3000', 
});

api.interceptors.request.use(
  (config) => {
    const token = store.getState().user?.user?.token 
    
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;