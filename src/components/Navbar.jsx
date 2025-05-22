// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Important pour la navigation
//import './Navbar.css'; // Nous allons créer ce fichier CSS juste après

const Navbar =() =>{
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">MonLogo</Link> {/* Lien vers la page d'accueil */}
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Ticket">Ticket</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/Basket">Basket</Link>
        </li>
        <li>
          <Link to="/SignUp">Sign up</Link>
        </li>
        <li>
          <Link to="/SignIn">Sign in</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
