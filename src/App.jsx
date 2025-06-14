import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar'; // Importez votre Navbar
import Ticket from './pages/Ticket';
import Contact from './pages/Contact';
import Basket from './pages/Basket';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Account from './pages/Account';
import TicketCard from './components/TicketCard';
import '@fontsource/dm-sans';


function App() {
  

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path= "/" element={<HomePage />} />
        <Route path= "/Ticket" element={<Ticket />} />
        <Route path= "/TicketCard" element={<TicketCard />} />
        <Route path= "/Contact" element={<Contact />} />
        <Route path= "/Basket" element={<Basket />} />
        <Route path= "/SignIn" element={<SignIn />} />
        <Route path= "/SignUp" element={<SignUp />} />
        <Route path= "/Account" element={<Account />} />

        
      </Routes>
    </Router>
  )
}

export default App
