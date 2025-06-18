// src/api/axiosInstance.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api',         // <- pas de slash final
  withCredentials: true,   // envoie automatiquement le cookie
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

export default apiClient;