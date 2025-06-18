import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './Context/AuthContext.jsx'
// import Layout  from "./components/Layout.jsx" // commenté temporairement

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
    
  </StrictMode>,
)