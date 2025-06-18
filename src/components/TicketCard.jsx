import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { useNavigate, useLocation } from 'react-router-dom'

export default function TicketCard({ ticket, onQuantityChange }) {
  const {
    id, artist, city, categories = [],
    dateStart, dateEnd, price, imageUrl,
    quantity, remaining,
  } = ticket

  const { user } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const handleGetTicket = () => {
  if (!user) {
    // pas connecté → on mémorise d’où on vient et on redirige
    navigate('/signin', { state: { from: location } })
    return
  }
  // ici : votre logique d’ajout au panier
  console.log('Ajout au panier:', ticket.id, 'qty=', quantity)
  navigate('/card') // ou autre
}

  const artistList = artist.split('  ')

  const formatDateTime = raw => {
    if (!raw) return ''
    const d = new Date(raw)
    if (isNaN(d)) return raw
    const datePart = d.toLocaleDateString('fr-FR', {
      day: '2-digit', month: '2-digit', year: '2-digit'
    })
    const timePart = d.toLocaleTimeString('fr-FR', {
      hour: '2-digit', minute: '2-digit'
    })
    return `${datePart} ${timePart}`
  }

  const startStr = formatDateTime(dateStart)
  const endStr   = formatDateTime(dateEnd)
  const dateStr  = startStr === endStr ? startStr : `${startStr} – ${endStr}`

  const canDec = quantity > 1
  const canInc = quantity < remaining
  const dec = () => canDec && onQuantityChange(id, quantity - 1)
  const inc = () => canInc && onQuantityChange(id, quantity + 1)

  const pill = `
    inline-block bg-back-color text-item-color font-bold
    text-xs sm:text-sm px-3 sm:px-6 py-[2px] sm:py-1
    rounded-full whitespace-normal text-center
  `
  const pricePill = `
    bg-back-color text-item-color font-bold
    text-sm sm:text-base px-4 py-1 rounded-full
  `

  return (
    <div
      className="
        relative w-full
        aspect-[4/3]          /* ratio 4:3 sur mobile/tablette */
        lg:aspect-auto lg:h-full /* 100% hauteur en desktop */
        bg-cover bg-center overflow-hidden
      "
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col p-4">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6 lg:mb-11">
          <span className={pill}>{categories[0]}</span>
          <span className={pill}>{city}</span>
        </div>

        {/* ARTISTES & DATE */}
        <div className="flex justify-between items-start mb-6 ">
          <div className="flex flex-col space-y-2">
            {artistList.map((a,i) => (
              <span key={i} className={pill}>{a}</span>
            ))}
          </div>
          <span className={`${pill} ml-4 lg:ml-8`}>{dateStr}</span>
        </div>

        {/* QUANTITÉ / PRIX / BOUTON */}
        <div className="mt-auto flex flex-col items-center space-y-2">
          <div className="inline-flex items-center bg-back-color rounded-full overflow-hidden">
            <button
              onClick={dec}
              disabled={!canDec}
              className="px-2 py-1 hover:bg-white transition disabled:opacity-50"
            >–</button>
            <span className="px-4 py-1 text-base sm:text-lg font-bold text-item-color">
              {quantity}
            </span>
            <button
              onClick={inc}
              disabled={!canInc}
              className="px-2 py-1 hover:bg-white transition disabled:opacity-50"
            >+</button>
          </div>
          <span className={pricePill}>{price}€</span>
          <button
            onClick={handleGetTicket}
            className="
                      bg-button-color text-white font-bold
                      px-6 py-2 rounded-full hover:opacity-90 transition
                    " >
                    {user ? 'get ticket' : 'Sign in to get ticket'}
        </button>
        </div>
      </div>
    </div>
  )
}