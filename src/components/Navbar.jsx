// src/components/Navbar.jsx

import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const baseLinks = [
    { to: "/", label: "Home", end: true },
    { to: "/ticket", label: "Tickets" },
    { to: "/contact", label: "Contact" },
    { to: "/basket", label: "Basket" },
  ];

  return (
    <nav className="bg-n-f-color">
      <div className="max-w-8xl mx-auto px-0 sm:px-4 lg:px-8 flex items-center justify-between h-16">
        {/* Logo + Titre */}
        <a href="/" className="flex items-center flex-shrink-0">
          <img
            src={logo}
            alt="TicketShop"
            className="w-[130px] h-auto object-contain"
          />
          <h3 className="ml-2 text-2xl font-bold text-white">TicketShop</h3>
        </a>

        {/* Liens Desktop */}
        <div className="hidden md:flex items-center space-x-10">
          {baseLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className="text-white font-bold hover:text-white"
            >
              {label}
            </NavLink>
          ))}

          <NavLink
            to="/signup"
            className="border border-button-color bg-button-color text-white 
                       rounded-full px-6 py-2 font-bold "
          >
            Sign Up
          </NavLink>
          <NavLink
            to="/signin"
            className="border border-button-color bg-button-color text-white 
                       rounded-full px-6 py-2 font-bold "
          >
            Sign In
          </NavLink>
        </div>

        {/* Hamburger mobile */}
        <button
          className="md:hidden text-white focus:outline-none "
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Menu mobile déroulant */}
      {isOpen && (
        <div className="md:hidden bg-n-f-color px-4 pt-2 pb-4 space-y-2">
          {baseLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className="block text-white font-bold px-3 py-2 rounded-md 
                         hover:bg-n-f-color/80"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </NavLink>
          ))}

          <NavLink
            to="/signup"
            className="block text-white bg-button-color border border-button-color 
                       rounded-full font-bold text-center px-6 py-3
    sm:px-2 sm:py-2 "
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </NavLink>

          <NavLink
            to="/signin"
            className="block text-white bg-button-color border border-button-color 
                       rounded-full font-bold text-center px-6 py-3
    sm:px-4 sm:py-2 "
            onClick={() => setIsOpen(false)}
          >
            Sign In
          </NavLink>
        </div>
      )}
    </nav>
  );
}