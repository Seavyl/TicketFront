// src/components/TicketCard.jsx
import React from "react";

export default function TicketCard({ ticket }) {
  const { festival, city, artists, price, date, imageUrl } = ticket;

  const pillClasses = `
  inline-flex items-center justify-center
  bg-back-color text-item-color font-bold text-md
  px-6 py-[2px] leading-none
  rounded-full
`;

  return (
    <div
      className="
        relative w-full h-full
        bg-cover bg-center
        rounded-none overflow-hidden
      "
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 flex flex-col justify-between px-8 py-20">
        {/* Top labels */}
        <div className="flex justify-between">
          <span className={pillClasses}>
            {festival}
          </span>
          <span className={pillClasses}>
            {city}
          </span>
        </div>

        {/* Milieu : artistes, prix, date */}
        <div className="relative flex justify-between items-center">
          <span className={pillClasses}>
            {artists.join("Superbus, gojira")}
          </span>
          <span className={`${pillClasses} absolute left-1/2 -translate-x-1/2`}>
            {price}€
          </span>
          <span className={pillClasses}>
            {new Date(date).toLocaleDateString("fr-FR")}
          </span>
        </div>

        {/* Bouton centré en bas */}
        <button
          className="
            absolute bottom-4 left-1/2 -translate-x-1/2
            bg-button-color text-white px-6 py-2 text-sm
            rounded-full
          "
        >
          get ticket
        </button>
      </div>
    </div>
  );
}