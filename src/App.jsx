// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "@fontsource/dm-sans";

import HomePage       from "./pages/HomePage";
import Ticket         from "./pages/Ticket";
import TicketCard     from "./components/TicketCard";
import Contact        from "./pages/Contact";
import Card         from "./pages/Card";
import SignIn         from "./pages/SignIn";
import SignUp         from "./pages/SignUp";

import Account        from "./components/Account";
import AdminDashboard from "./pages/AdminDashboard";
import AdminRoute     from "./components/AdminRoute";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import RequireAuth from './components/requireAuth';


export default function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/"            element={<HomePage />} />
      <Route path="/ticket"      element={<Ticket />} />
      <Route path="/ticket-card" element={<TicketCard />} />
      <Route path="/contact"     element={<Contact />} />
      <Route path="/card"        element={<Card />} />
      <Route path="/login"       element={<SignIn />} />
      <Route path="/"            element={<Profile />} />
      <Route path="/signup"      element={<SignUp />} />
      <Route
        path="/"
        element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        }
      />
      <Route path="/account"     element={<Account />} />

      {/* Dashboard réservé aux admins */}
      <Route
        path="/admin/dashboard"
        element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        }
      />

      {/* catch-all → redirige vers l’accueil */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </>
  );
}