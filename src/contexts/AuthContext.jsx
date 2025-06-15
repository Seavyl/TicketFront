// src/contexts/AuthContext.jsx
import React, { createContext, useState, useEffect } from "react"

// 1) Named‐export du contexte
export const AuthContext = createContext({
  user:   null,
  login:  () => {},
  logout: () => {}
})

// 2) Named‐export du Provider
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

console.log("AuthProvider rendered, user:", user)

  useEffect(() => {
    console.log("AuthProvider useEffect triggered")
  try {
    const json = localStorage.getItem("user")
    console.log("localStorage user:", json)
    if (json) setUser(JSON.parse(json))
  } catch (error) {
    console.error("Erreur parsing localStorage:", error)
    localStorage.removeItem("user") // nettoie les données corrompues
  }
}, [])

  const login = (userData) => {
    console.log("login called with:", userData)
    setUser(userData)
    localStorage.setItem("user", JSON.stringify(userData))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}