// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "@fontsource/dm-sans";

import HomePage       from "./pages/HomePage";
import Ticket         from "./pages/Ticket";
import TicketCard     from "./components/TicketCard";
import Contact        from "./pages/Contact";
import Basket         from "./pages/Basket";
import SignIn         from "./pages/SignIn";
import SignUp         from "./pages/SignUp";
import Account        from "./components/Account";
import AdminDashboard from "./pages/AdminDashboard";
import AdminRoute     from "./components/AdminRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/"            element={<HomePage />} />
      <Route path="/ticket"      element={<Ticket />} />
      <Route path="/ticket-card" element={<TicketCard />} />
      <Route path="/contact"     element={<Contact />} />
      <Route path="/basket"      element={<Basket />} />
      <Route path="/signin"      element={<SignIn />} />
      <Route path="/signup"      element={<SignUp />} />
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
  );
}