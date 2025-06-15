// src/pages/SignInPage.jsx
import React, { useState, useContext } from "react"
import { useNavigate }                          from "react-router-dom"
import { AuthContext }                          from "../contexts/AuthContext"

export default function SignIn() {
  const [email, setEmail]       = useState("")
  const [password, setPassword] = useState("")
  const [error, setError]       = useState("")
  const [loading, setLoading]   = useState(false)

  const { login }   = useContext(AuthContext)
  const navigate    = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      // ← Ici on place le fetch
      const res = await fetch("/api/auth/signin", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ email, password })
      })

      if (res.status === 401) {
        throw new Error("Email ou mot de passe incorrect.")
      }
      if (!res.ok) {
        throw new Error("Erreur serveur, réessayez plus tard.")
      }

      const userData = await res.json()
      login(userData)                       // on met à jour le contexte
      navigate("/account", { replace: true }) // redirection vers la page protégée

    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-back-color flex flex-col items-center px-4">
      <h1 className="mt-20 mb-20 text-item-color font-bold text-4xl">
        Sign in
      </h1>

      <div className="
          bg-item-color w-full max-w-[800px] h-auto md:h-[400px]
          flex flex-col md:justify-center px-6 md:px-12 py-12 md:py-0
        ">
        {error && <p className="text-red-400 mb-4 text-center">{error}</p>}

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col space-y-6"
          noValidate
        >
          <div className="flex flex-col md:flex-row md:items-center">
            <label
              htmlFor="email"
              className="text-white font-bold mb-2 md:mb-0 md:w-1/4"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="votre@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="
                w-full md:w-3/4 h-12 bg-back-color text-item-color
                rounded-full px-6 placeholder-item-color
              "
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-center">
            <label
              htmlFor="password"
              className="text-white font-bold mb-2 md:mb-0 md:w-1/4"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="
                w-full md:w-3/4 h-12 bg-back-color text-item-color
                rounded-full px-6 placeholder-item-color
              "
            />
          </div>

          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={loading}
              className={`
                bg-button-color text-white rounded-full px-10 py-2.5 font-bold
                ${loading ? "opacity-50 cursor-not-allowed" : ""}
              `}
            >
              {loading ? "Loading…" : "Confirm"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}