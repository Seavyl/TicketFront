// src/components/PrivateRoute.jsx
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  const token = localStorage.getItem('jwt')
  return token
    ? <Outlet />                  // rendra les routes enfants
    : <Navigate to="/signin" />  // ou '/login' selon votre route de connexion
}

export default PrivateRoute