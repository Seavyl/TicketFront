// src/pages/Profile.jsx
import React from 'react';
import { useAuthContext } from '../Context/AuthContext';

export default function Profile() {
  const { user, logout, loading } = useAuthContext();

  if (loading) return <p>Chargement…</p>;
  if (!user)   return null;

  return (
    <div>
      <h1>Profil</h1>
      <p>Nom     : {user.name}</p>
      <p>Adresse : {user.address}</p>
      <p>Email   : {user.email}</p>
      <button onClick={logout}>Sign out</button>
    </div>
  );
}