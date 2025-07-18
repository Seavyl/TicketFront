// src/components/Navbar.jsx
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../assets/img/logo.png'

const links = [
  { to: '/',       label: 'Home',    end: true  },
  { to: '/ticket', label: 'Tickets'            },
  { to: '/contact',label: 'Contact'            },
  { to: '/cart',   label: 'Cart'               },
  { to: '/signup', label: 'Sign Up',  auth: 'guest' },
  { to: '/signin', label: 'Sign In',  auth: 'guest' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate            = useNavigate()
  // on considère l'utilisateur "connecté" si un token JWT est en storage
  const token = localStorage.getItem('jwt')
  const user  = Boolean(token)

  const logout = () => {
    localStorage.removeItem('jwt')
    navigate('/signin', { replace: true })
  }

  const linkClass = 'text-white font-bold hover:text-white'
  const authLinkClass = [
    'border border-button-color',
    'bg-button-color text-white rounded-full',
    'max-w-max whitespace-nowrap',
    'md:px-4 md:py-2 lg:px-6 lg:py-2 font-bold'
  ].join(' ')
  const mobileClass = 
    'block text-white font-bold px-3 py-2 rounded-md hover:bg-n-f-color/80'

  // on masque les liens "guest" (Sign Up/Sign In) si utilisateur connecté
  const desktopLinks = links.filter(l =>
    l.auth === 'guest' ? !user : true
  )

  return (
    <nav className="bg-n-f-color">
      <div className="max-w-8xl mx-auto px-0 sm:px-4 lg:px-8
                      flex items-center justify-between h-16">
        <a href="/" className="flex items-center flex-shrink-0">
          <img
            src={logo}
            alt="TicketShop"
            className="w-[130px] h-auto object-contain"
          />
          <h3 className="ml-2 text-2xl font-bold text-white">
            TicketShop
          </h3>
        </a>

        {/* version desktop */}
        <div className="hidden md:flex items-center space-x-10">
          {desktopLinks.map(({ to, label, end, auth }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={auth ? authLinkClass : linkClass}
            >
              {label}
            </NavLink>
          ))}
          {user && (
            <button
              onClick={logout}
              className={authLinkClass}
            >
              Sign Out
            </button>
          )}
        </div>

        {/* toggle mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {isOpen
            ? <XMarkIcon className="h-6 w-6 text-white" />
            : <Bars3Icon className="h-6 w-6 text-white" />}
        </button>
      </div>

      {/* menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-n-f-color px-4 pt-2 pb-4 space-y-2 text-center">
          {desktopLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={mobileClass}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          {user && (
            <button
              onClick={() => { logout(); setIsOpen(false) }}
              className={mobileClass}
            >
              Sign Out
            </button>
          )}
        </div>
      )}
    </nav>
  )
}