import React from "react"
import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

export default function ProtectedRoute({ children }) {
  const { user } = useAuth()
  const location = useLocation()

  // Si pas connecté, on stocke la page appelante dans state.from
  if (!user) {
    return (
      <Navigate
        to="/signin"
        state={{ from: location }}
        replace
      />
    )
  }

  // Sinon on laisse passer
  return children
}