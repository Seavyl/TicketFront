// src/api/axiosInstance.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  headers: { 'Content-Type': 'application/json' }
});

apiClient.interceptors.response.use(
  res => res,
  err => {
    // Si le serveur renvoie 401 → invalid token
    if (err.response?.status === 401) {
      // Supprime le token stocké
      localStorage.removeItem('jwt');
      // Redirige vers la page de connexion (ou recharge la fenêtre)
      window.location.href = '/signin';
    }
    return Promise.reject(err);
  }
);

export default apiClient;