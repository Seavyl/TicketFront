// src/components/TicketCard.jsx
import React from "react";

export default function TicketCard({ ticket, onQuantityChange }) {
  const {
    id,
    festival,
    city,
    artists = [],
    date,
    price,
    imageUrl,
    quantity,
  } = ticket;

  const dateStr = new Date(date).toLocaleDateString("fr-FR");
  const decrease = () =>
    onQuantityChange(id, Math.max(1, quantity - 1));
  const increase = () =>
    onQuantityChange(id, quantity + 1);

  // Classe de base pour les "pills"
  const pill = `
    inline-flex items-center justify-center
    bg-back-color text-item-color font-bold
    text-xs sm:text-sm
    px-3 sm:px-6 py-[2px] sm:py-1
    leading-none rounded-full truncate
  `;

  // Découpe les artistes en deux lignes max
  const firstLine = artists.slice(0, 2);
  const secondLine = artists.slice(2);

  return (
    <div
      className="
       relative w-full
        aspect-[4/3]        /* mobile/tablette : ratio fixe */
        lg:aspect-none lg:h-full /* desktop : ratio libre, height = 100% */
        bg-cover bg-center
        overflow-hidden rounded-none"
        
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Overlay semi-transparent */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between p-4 sm:p-6">
        {/* 1) Header : festival & city */}
        <div className="flex justify-between mb-2 sm:mb-4">
          <span className={pill}>{festival}</span>
          <span className={pill}>{city}</span>
        </div>

        {/* 2) Artistes & date */}
        <div className="flex justify-between items-center mb-2 sm:mb-4">
         <div className="mb-2 sm:mb-4">
  {/* 1ʳᵉ ligne */}
  <div className="flex gap-2">  
    {firstLine.map((name,i) => (
      <span key={i} className={pill}>{name}</span>
    ))}
  </div>
  {/* 2ᵉ ligne, seulement si besoin */}
  {secondLine.length>0 && (
    <div className="flex gap-2 mt-2">
      {secondLine.map((name,i) => (
        <span key={i+2} className={pill}>{name}</span>
      ))}
    </div>
  )}
</div>
          <span className={pill}>{dateStr}</span>
        </div>

        {/* 3) Quantity, price & button */}
        <div className="flex flex-col items-center">
          {/* Contrôles quantité */}
          <div className="inline-flex items-center bg-back-color rounded-full overflow-hidden mb-2">
            <button
              onClick={decrease}
              className="px-2 py-0.5 sm:px-3 sm:py-1 hover:bg-white transition"
            >–</button>
            <span className="px-4 sm:px-6 py-0.5 sm:py-1 text-base sm:text-lg font-bold text-item-color">
              {quantity}
            </span>
            <button
              onClick={increase}
              className="px-2 py-0.5 sm:px-3 sm:py-1 hover:bg-white transition"
            >+</button>
          </div>

          {/* Badge prix */}
          <span className="
            bg-back-color text-item-color text-sm sm:text-base font-bold
            px-4 sm:px-6 py-1 rounded-full mb-2 whitespace-nowrap
          ">
            {price}€
          </span>

          {/* Bouton get ticket */}
          <button className="
            bg-button-color text-white text-sm sm:text-base font-bold
            px-6 py-2 rounded-full hover:opacity-90 transition
          ">
            get ticket
          </button>
        </div>
      </div>
    </div>
  );
}