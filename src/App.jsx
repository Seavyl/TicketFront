import React, { useContext} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar'; // Importez votre Navbar
import Ticket from './pages/Ticket';
import Contact from './pages/Contact';
import Basket from './pages/Basket';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Account from './components/Account';
import TicketCard from './components/TicketCard';
import '@fontsource/dm-sans';
import { AuthContext } from "./contexts/AuthContext";

function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext)
  return user ? children : <Navigate to="/signin" replace />
}

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
        <Route path="/Account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
       

        
      </Routes>
    </Router>
  )
}

export default App
