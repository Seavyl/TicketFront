import React, { useState, useEffect } from 'react'
import { CATEGORY_MAP }  from '../constants/categoryMap'
import apiClient         from '../api/axiosInstance'
import TicketCard        from '../components/TicketCard'
import festival1         from '../assets/img/festival1.jpg'
import festival2         from '../assets/img/festival2.jpg'
import concert1          from '../assets/img/concert1.jpg'
import concert2          from '../assets/img/concert2.jpg'

const PAGE_SIZE = 4
const imageMap = {
  1: festival1,
  2: festival2,
  3: concert1,
  4: concert2,
  5: concert1,
  6: festival2,
}

export default function Ticket() {
  const [tickets, setTickets] = useState([])
  const [page, setPage]       = useState(0)

  useEffect(() => {
    apiClient.get('/tickets')
      .then(res => {
        const raw = res.data.member || []
        const formatted = raw.map(t => {
          const parts  = (t.category || '').split('/')
          const catId  = parseInt(parts.pop(), 10)
          const catName = CATEGORY_MAP[catId] || `Catégorie ${catId}`

          return {
            id:         t.id,
            artist:     t.artistName,
            city:       t.venue,
            categories: [catName],
            dateStart:  t.startDate,
            dateEnd:    t.endDate,
            price:      t.price,
            quantity:   1,
            remaining:  t.remainingQuantity,
            imageUrl:   imageMap[t.id] || '',
          }
        })
        setTickets(formatted)
      })
      .catch(err => {
        console.error(err)
        setTickets([])
      })
  }, [])

  const handleQuantityChange = (id, qty) =>
    setTickets(ts => ts.map(t =>
      t.id === id ? { ...t, quantity: qty } : t
    ))

  const handlePrev = () => setPage(p => Math.max(0, p - 1))
  const handleNext = () => setPage(p => p + 1)

  const start = page * PAGE_SIZE
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
    <div
      className="flex flex-col bg-bg-color"
      style={{ height: 'calc(100vh - 4rem)' }}  // ← on soustrait 64px
    >
      {/* zone scrollable */}
      <div className="flex-1 min-h-0 overflow-auto">
        <div
          className="
            grid grid-cols-1
            lg:grid-cols-2 lg:grid-rows-2
            gap-0 h-full
          "
        >
        
          {items.slice(0, PAGE_SIZE).map(item =>
            item.placeholder ? (
              <div
                key={item.key}
                className="
                  w-full h-auto lg:h-full
                  bg-back-color text-item-color
                  flex items-center justify-center font-bold
                "
              >
                No more events available
              </div>
            ) : (
              <div
                key={item.id}
                className="w-full h-auto lg:h-full"
              >
                <TicketCard
                  ticket={item}
                  onQuantityChange={handleQuantityChange}
                />
              </div>
            )
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="h-12 bg-back-color flex items-center justify-center">
        <button
          onClick={handlePrev}
          disabled={start === 0}
          className="
            px-4 py-2 mx-2 bg-button-color text-white font-bold
            rounded disabled:opacity-50 disabled:cursor-not-allowed
          "
        >
          ← Prev
        </button>
        <button
          onClick={handleNext}
          disabled={start + PAGE_SIZE >= tickets.length}
          className="px-4 py-2 mx-2 bg-button-color text-white font-bold rounded"
        >
          Next →
        </button>
      </div>
    </div>
  )
}