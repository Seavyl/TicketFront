import React from "react"
import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-back-color">
      {/* ta barre de nav garde son CSS exact */}
      <Navbar />

      {/* ici le container général de tes pages */}
      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  )
}