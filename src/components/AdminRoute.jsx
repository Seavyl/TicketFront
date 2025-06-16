// src/components/AdminRoute.jsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function AdminRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  // Tant que /profile n’a pas répondu
  if (loading) {
    return <div>Chargement…</div>;
  }

  // Pas connecté → vers la page de connexion
  if (!user) {
    return (
      <Navigate
        to="/signin"
        replace
        state={{ from: location }}
      />
    );
  }

  // Connecté mais pas admin → vers l’accueil (ou une page 403)
  if (!user.roles?.includes("ROLE_ADMIN")) {
    return <Navigate to="/" replace />;
  }

  // OK c’est un admin !
  return children;
}