// src/pages/Tickets.jsx
import React, { useState, useEffect } from 'react'
import apiClient  from '../api/axiosInstance'
import TicketCard from '../components/TicketCard'
import concert1   from '../assets/img/concert1.jpg'
import concert2   from '../assets/img/concert2.jpg'
import festival1  from '../assets/img/festival1.jpg'
import festival2  from '../assets/img/festival2.jpg'

// map id → image statique
const imageMap = {
  1: festival1,
  2: festival2,
  3: concert1,
  4: concert2,
  5: concert1,
  6: festival1,
}

export default function Tickets() {
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    apiClient
      .get('/tickets')
      .then(res => {
        const raw = res.data.member ?? []
        const formatted = raw.map(t => ({
        id:         t.id,
        festival:   t.artist_name,
        city:       t.venue,
        artists:    [t.artist_name],
        dateStart:  t.start_date,            // on passe les 2 dates
        dateEnd:    t.end_date,
        price:      t.price,
        quantity:   1,
        remaining:  t.remaining_quantity,
        categories: [String(t.category_id)],
        imageUrl:   imageMap[t.id] || '',
      }))
        setTickets(formatted)
      })
      .catch(err => {
        console.error('fetch tickets error', err)
        setTickets([])
      })
  }, [])

  const handleQuantityChange = (id, newQty) => {
    setTickets(ts =>
      ts.map(t => (t.id === id ? { ...t, quantity: newQty } : t))
    )
  }

  return (
    <div className="
+      grid grid-cols-1
+      lg:grid-cols-2 lg:grid-rows-2 lg:auto-rows-fr
+      w-full h-auto lg:h-screen
+      gap-0
+    ">
      {tickets.map(ticket => (
        <TicketCard
          key={ticket.id}
          ticket={ticket}
          onQuantityChange={handleQuantityChange}
        />
      ))}
    </div>
  )
}