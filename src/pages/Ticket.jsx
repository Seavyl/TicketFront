// src/pages/Tickets.jsx
import React, { useState, useEffect } from 'react'
import { CATEGORY_MAP } from '../constants/categoryMap';
import apiClient  from '../api/axiosInstance'
import TicketCard from '../components/TicketCard'
import concert1   from '../assets/img/concert1.jpg'
import concert2   from '../assets/img/concert2.jpg'
import festival1  from '../assets/img/festival1.jpg'
import festival2  from '../assets/img/festival2.jpg'

const PAGE_SIZE = 4

const imageMap = {
  1: festival1,
  2: festival2,
  3: concert1,
  4: concert2,
  5: concert1,
  6: festival2,
}

export default function Tickets() {
  const [tickets, setTickets] = useState([])
  const [page, setPage]       = useState(0)

  useEffect(() => {
    apiClient.get('/tickets')
      .then(res => {
        const raw = res.data.member ?? []
        const formatted = raw.map(t => ({
          id:         t.id,
          artist:     t.artist_name,
          city:       t.venue,
          categories: [String(t.category_id)],
          dateStart:  t.start_date,
          dateEnd:    t.end_date,
          price:      t.price,
          quantity:   1,
          remaining:  t.remaining_quantity,
          imageUrl:   imageMap[t.id] || '',
        }))
        setTickets(formatted)
      })
      .catch(err => {
        console.error(err)
        setTickets([])
      })
  }, [])

  const handleQuantityChange = (id, qty) =>
    setTickets(ts =>
      ts.map(t => (t.id === id ? { ...t, quantity: qty } : t))
    )

  const handlePrev = () => setPage(p => Math.max(0, p - 1))
  const handleNext = () => setPage(p => p + 1)

  const start     = page * PAGE_SIZE
  const displayed = tickets.slice(start, start + PAGE_SIZE)
  const placeholdersCount = PAGE_SIZE - displayed.length
  const items = [
    ...displayed,
    ...Array.from({ length: placeholdersCount }, (_, i) => ({
      placeholder: true,
      key: `ph-${i}`,
    })),
  ]

  return (
    <main className="min-h-screen bg-bg-color overflow-auto">
      <div
        className="
          grid grid-cols-1
          lg:grid-cols-2 lg:grid-rows-2 lg:auto-rows-fr
          w-full h-auto lg:h-screen
          gap-0
        "
      >
        {items.map(item =>
          item.placeholder ? (
            <div
              key={item.key}
              className="
                relative w-full
                aspect-[4/3] lg:aspect-none lg:h-full
                bg-back-color text-item-color
                flex items-center justify-center
                font-bold text-center p-0
              "
            >
              No more events available at the moment
            </div>
          ) : (
            <TicketCard
              key={item.id}
              ticket={item}
              onQuantityChange={handleQuantityChange}
            />
          )
        )}
      </div>

    <div className="bg-back-color py-4">
      <div className="flex justify-center space-x-4 mt-2">
        <button
          onClick={handlePrev}
          disabled={page === 0}
          className="
            px-4 py-2 bg-button-color text-white font-bold
            rounded disabled:opacity-50 disabled:cursor-not-allowed
          "
        >
          ← Prev
        </button>
        <button
          onClick={handleNext}
          className="
            px-4 py-2 bg-button-color text-white font-bold
            rounded  
          "
        >
          Next →
        </button>
      </div>
    </div> 
  </main>
  )
}