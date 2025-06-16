// src/pages/SignInPage.jsx
import React, { useState } from "react";
import { useNavigate }      from "react-router-dom";
import { useAuth }          from "../hooks/useAuth";

export default function SignInPage() {
  const { login } = useAuth();
  const nav       = useNavigate();

  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");
  const [err,      setErr]      = useState("");
  const [loading,  setLoading]  = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setErr("");
    setLoading(true);
    try {
      await login(email, password);
      nav("/account", { replace: true });
    } catch (e) {
      setErr(
        e.response?.data?.error ||
        e.response?.data?.message ||
        e.message ||
        "Erreur de connexion"
      );
    } finally {
      setLoading(false);
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
        {err && <p className="text-red-400 mb-4 text-center">{err}</p>}

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