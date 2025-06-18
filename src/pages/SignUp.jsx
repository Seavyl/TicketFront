import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../api/axiosInstance.js'  // ≤ votre instance Axios

export default function SignUp() {
  const [name, setName]         = useState('')
  const [address, setAddress]   = useState('')
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')

  const [err, setError]     = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')      // reset
    setLoading(true)

    try {
      // ← on appelle directement api.post et non signup()
      await api.post('/register', {
        name,
        address,
        email,
        password
      })
      // inscription réussie → on redirige vers la page de connexion
      navigate('/signin', { replace: true })
    } catch (err) {
      // Symfony renvoie souvent { detail: "..." }
      const msg =
        err.response?.data?.detail ||
        err.response?.data?.message ||
        err.message
      setError(msg)
    } finally {
      setLoading(false)
    }
  }


  return (
    <div className="min-h-screen bg-back-color flex flex-col items-center px-4">
      <h1 className="mt-20 mb-20 text-item-color font-bold text-4xl">
        Sign up
      </h1>

      <div
        className="
          bg-item-color
          w-full max-w-[800px]
          h-auto md:h-[500px]
          flex flex-col md:justify-center
          px-6 md:px-12
          py-12 md:py-0
          pb-8
        "
      >
      {err && <p className="text-button-color bg-item-color mb-4 text-center">{err}</p>}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="h-full flex flex-col justify-between"
        >
          <div className="space-y-6 md:mt-0">
            {/* Name */}
            <div className="flex flex-col md:flex-row md:items-center">
              <label
                htmlFor="name"
                className="text-white mt-7 font-bold md:mb-0 md:w-1/4"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange ={e => setName(e.target.value)}
                required
                placeholder="Your name"
                className="
                  w-full md:w-3/4 h-12
                  bg-back-color text-item-color
                  rounded-full px-6 mt-10
                  placeholder-item-color
                "
              />
            </div>

            {/* Email */}
            <div className="flex flex-col md:flex-row md:items-center">
              <label
                htmlFor="email"
                className="text-white font-bold mb-2 md:mb-0 md:w-1/4"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={e=>setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                className="
                  w-full md:w-3/4 h-12
                  bg-back-color text-item-color
                  rounded-full px-6
                  placeholder-item-color 
                "
              />
            </div>

            {/* Address */}
            <div className="flex flex-col md:flex-row md:items-center">
              <label
                htmlFor="address"
                className="text-white font-bold mb-2 md:mb-0 md:w-1/4"
              >
                Address
              </label>
              <input
                id="address"
                name="address"
                type="text"
                value={address}
                onChange={e=>setAddress(e.target.value)}
                required
                placeholder="Your address"
                className="
                  w-full md:w-3/4 h-12
                  bg-back-color text-item-color
                  rounded-full px-6
                  placeholder-item-color
                "
              />
            </div>

            {/* Password */}
            <div className="flex flex-col md:flex-row md:items-center">
              <label
                htmlFor="password"
                className="text-white font-bold mb-2 md:mb-0 md:w-1/4"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="
                  w-full md:w-3/4 h-12
                  bg-back-color text-item-color
                  rounded-full px-6
                  placeholder-item-color 
                "
              />
            </div>

            {/* Confirm Password */}
           
          </div>

          {/* Bouton Submit */}
          <div className="text-center mb-6 md:mb-8">
            <button
              type="submit"
              disabled={loading}
              className="
                bg-button-color text-white
                px-10 py-2.5 rounded-full font-bold
              "
            >
              {loading ? 'Loading…' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}