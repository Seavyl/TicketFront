// src/api/axiosInstance.js
import axios from "axios";

const baseURL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api";

if (!import.meta.env.VITE_API_BASE_URL) {
  console.warn(
    "Attention : VITE_API_BASE_URL non défini, URL de secours utilisée",
  );
}

const apiClient = axios.create({
  baseURL,
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

export default apiClient;