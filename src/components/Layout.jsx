import React from "react"
import { useLocation } from "react-router-dom"
import Navbar from "./Navbar"

export default function Layout({ children }) {
  const location = useLocation()
  const isTicketsPage = location.pathname === '/tickets'

  return (
    <div className="min-h-screen flex flex-col bg-back-color">
      <Navbar />
      
      {isTicketsPage ? (
        // Pour la page tickets : pas de container, pas de padding
        <main className="flex-1">
          {children}
        </main>
      ) : (
        // Pour les autres pages : layout normal
        <main className="flex-1 container mx-auto px-4 py-8">
          {children}
        </main>
      )}
    </div>
  )
}