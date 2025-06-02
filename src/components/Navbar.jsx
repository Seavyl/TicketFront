// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';



function Navbar() {
  return (
    <nav className="flex items-center h-16 px-4 bg-n-f-color">
      <div className="flex items-center space-x-2">
      <div className=" "> <img src="../assets/img/logo.png" alt="logo"/><h3>TicketShop</h3>
      </div>
      <ul className="flex items-center space-x-8 ml-auto">
        {/*<img src="../assets/img/logo.png" alt="logo"></img>*/}
          <li>
          <NavLink
            to="/"
            end
            className="text-white hover:text-white font-bold "
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ticket"
            className="text-white hover:text-white font-bold "
          >
            Tickets
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="text-white hover:text-white font-bold "
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/basket"
            className="text-white hover:text-white font-bold "
          >
            Basket
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/signin"
            className= "border rounded-full p-3 px-6 py-3 items-center   border-button-color text-center bg-button-color text-white font-bold"
          >
            Sign In
          </NavLink>
        </li>
        <li> 
          <NavLink
            to="/signup"
            className= "border rounded-full p-3 px-6 py-3 items-center   border-button-color text-center bg-button-color text-white font-bold"
          >
            Sign Up
          </NavLink>
        </li>
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;