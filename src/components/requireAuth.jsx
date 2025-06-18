import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../Context/AuthContext';

export default function RequireAuth({ children }) {
  const { user, loading } = useAuthContext();
  const location = useLocation();

  if (loading) return <p>Loading…</p>;
  if (!user) return <Navigate to="/login" state={{ from: location }} replace />;

  return children;
}