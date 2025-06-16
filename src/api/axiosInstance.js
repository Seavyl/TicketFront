// src/api/axiosInstance.js
import axios from "axios";

const apiClient = axios.create({
  baseURL: "/api",       // via proxy Vite
  timeout: 5000,
  withCredentials: true, // si tu utilises des cookies de session
  headers: {
    "Content-Type": "application/json",
    // pour API-Platform JSON-LD + JSON classique
    Accept: "application/ld+json, application/json"
  }
});

export default apiClient;   