import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuthContext } from '../Context/AuthContext';

export default function SignIn() {
  const { login, err, loading } = useAuthContext();
  const [email, setEmail]         = useState('');
  const [password, setPassword]   = useState('');
  const navigate                  = useNavigate();
  const location                  = useLocation();

  // Remplace optional chaining par un test classique
  const state = location.state || {};
  const from  = state.from && state.from.pathname
    ? state.from.pathname
    : '/';

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch {
      // error est dans error
    }
  };
  return (
    <div className="min-h-screen bg-back-color flex flex-col items-center px-4">
      <h1 className="mt-20 mb-20 text-item-color font-bold text-4xl">
        Sign in
      </h1>

      <div className="
          bg-item-color w-full max-w-[800px] h-auto md:h-[400px]
          flex flex-col md:justify-center px-6 md:px-12 py-12 md:py-0
        ">
        {err && <p className="text-button-color bg-item-color mb-4 text-center">{err}</p>}

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
              onChange={e => setEmail(e.target.value)}
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
              onChange={e => setPassword(e.target.value)}
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
  );
} 