// src/components/Navbar.jsx

import { NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.png';



function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between h-16 pl-0 pr-4 bg-n-f-color">
      
  <a href="/" className="inline-flex items-center">
    <img
      src={logo}
      alt="TicketShop"
      className="w-[130px] h-auto object-contain"
    />
    <h3 className="ml-2 text-2xl font-bold text-white">
      TicketShop
    </h3>
  </a>

      <ul className="flex items-center space-x-10">
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
    
    </nav>
  );
}

export default Navbar;