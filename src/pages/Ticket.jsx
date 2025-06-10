// src/pages/Tickets.jsx
import React, { useState } from 'react';
import TicketCard from '../components/TicketCard';
import concert1  from '../assets/img/concert1.jpg';
import concert2  from '../assets/img/concert2.jpg';
import festival1 from '../assets/img/festival1.jpg';
import festival2 from '../assets/img/festival2.jpg';

export default function Tickets() {
  const initialTickets = [
    { id:1, festival:'Festival A', city:'Paris',
      artists:['Superbus','Gojira','Dj dj','Machin'],
      date:'2025-08-12', price:45, imageUrl:concert1, quantity:1 },
    { id:2, festival:'Festival B', city:'Lyon',
      artists:['Superbus','Gojira','Dj dj','Machin'],
      date:'2025-09-01', price:60, imageUrl:concert2, quantity:1 },
    { id:3, festival:'Festival C', city:'Nice',
      artists:['M','N'], date:'2025-10-05',
      price:30, imageUrl:festival1, quantity:1 },
    { id:4, festival:'Festival D', city:'Bordeaux',
      artists:['P','Q'], date:'2025-11-20',
      price:50, imageUrl:festival2, quantity:1 },
  ];
  const [tickets, setTickets] = useState(initialTickets);

  const handleQuantityChange = (id, newQty) =>
    setTickets((t) =>
      t.map((x) => (x.id===id ? {...x,quantity:newQty} : x))
    );

  return (
    <div
      className="
        grid
        grid-cols-1            /* 1 carte / ligne par défaut */
        w-full h-auto          /* hauteur auto (scroll) */
        lg:grid-cols-2         /* ≥1024px → 2 cartes / ligne */
        lg:grid-rows-2         /* ≥1024px → 2 lignes */
        lg:h-screen            /* ≥1024px → plein écran hauteur */
      "
    >
      {tickets.map((t) => (
        <div key={t.id} className="w-full h-full">
          <TicketCard
            ticket={t}
            onQuantityChange={handleQuantityChange}
          />
        </div>
      ))}
    </div>
  );
}