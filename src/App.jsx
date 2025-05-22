import React from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavBar from './components/Navbar'; // Importez votre Navbar
import Ticket from './pages/Ticket';
import Contact from './pages/Contact';
import Basket from './pages/Basket';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';


function App() {
  

  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path= "/" element={<HomePage />} />
        <Route path= "/Ticket" element={<Ticket />} />
        <Route path= "/Contact" element={<Contact />} />
        <Route path= "/Basket" element={<Basket />} />
        <Route path= "/SignIn" element={<SignUp />} />
        <Route path= "/SignUp" element={<SignIn />} />
      </Routes>
    </Router>
  )
}

export default App
