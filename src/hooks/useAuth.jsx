// src/hooks/useAuth.jsx
import { useState } from "react";

export function useAuth() {
  const [token, setToken] = useState(() =>
    localStorage.getItem("token")
  );

  const login = async (email, password) => {
    const res = await fetch("/api/", {      // ← RELATIF !
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    if (!res.ok) throw new Error("Login failed");
    const { token: jwt } = await res.json();
    localStorage.setItem("token", jwt);
    setToken(jwt);
    return jwt;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return { token, login, logout };
}