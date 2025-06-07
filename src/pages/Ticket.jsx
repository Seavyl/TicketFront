// src/pages/Tickets.jsx
import React from "react";
import TicketCard from "../components/TicketCard";
import concert1 from "../assets/img/concert1.jpg";
import concert2 from "../assets/img/concert2.jpg";
import festival1 from "../assets/img/festival1.jpg";
import festival2 from "../assets/img/fetsival2.jpg";

export default function Tickets() {
  const dummyTickets = [
    { id:1, festival:"Festival A", city:"Paris",   artists:["A","B"], price:45, date:"2025-08-12", imageUrl: concert1 },
    { id:2, festival:"Festival B", city:"Lyon",    artists:["X","Y"], price:60, date:"2025-09-01", imageUrl: concert2 },
    { id:3, festival:"Festival C", city:"Nice",    artists:["M","N"], price:30, date:"2025-10-05", imageUrl: festival1 },
    { id:4, festival:"Festival D", city:"Bordeaux",artists:["P","Q"], price:50, date:"2025-11-20", imageUrl: festival2 },
  ];

  return (
    <div className="grid grid-cols-2 grid-rows-2 w-screen h-screen gap-0">
      {dummyTickets.map((t) => (
        <div key={t.id} className="w-full h-full">
          <TicketCard ticket={t} />
        </div>
      ))}
    </div>
  );
}