// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "@fontsource/dm-sans";

import HomePage       from "./pages/HomePage";
import Ticket         from "./pages/Ticket";
import TicketCard     from "./components/TicketCard";
import Contact        from "./pages/Contact";
import Cart         from "./pages/Cart";
import SignIn         from "./pages/SignIn";
import SignUp         from "./pages/SignUp";

import Account        from "./components/Account";

import Navbar from "./components/Navbar";



export default function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/"            element={<HomePage />} />
      <Route path="/ticket"      element={<Ticket />} />
      <Route path="/ticket-card" element={<TicketCard />} />
      <Route path="/contact"     element={<Contact />} />
      <Route path="/cart"        element={<Cart />} />
      <Route path="/signin"       element={<SignIn />} />
      <Route path="/signup"      element={<SignUp />} />
      <Route path="/account"     element={<Account />} />

     
    {/* ici, vous pouvez ajouter d’autres routes protégées */}
    <Route path="*" element={<Navigate to="/signin" replace />} />

    
      {/* catch-all → redirige vers l’accueil */}
     
    </Routes>
    </>
  );
}