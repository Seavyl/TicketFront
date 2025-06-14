import React from "react";

export default function TicketCard({ ticket, onQuantityChange }) {
  const {
    id,
    festival,
    city,
    artists    = [],
    categories = [],
    dateStart,
    dateEnd,
    price,
    imageUrl,
    quantity,
    remaining  = 0,
  } = ticket;

  // Formatage safe de start_date & end_date
  const fmt = raw => {
    const d = new Date(raw?.slice(0,10));
    if (isNaN(d.getTime())) return raw;
    return d.toLocaleDateString("fr-FR", {
      day:   "2-digit",
      month: "long",
      year:  "numeric",
    });
  };
  const startStr = fmt(dateStart);
  const endStr   = fmt(dateEnd);
  const dateStr  = startStr === endStr ? startStr : `${startStr} – ${endStr}`;

  // Activation des boutons
  const canDecrease = quantity > 1;
  const canIncrease = quantity < remaining;
  const decrease    = () => canDecrease && onQuantityChange(id, quantity - 1);
  const increase    = () => canIncrease && onQuantityChange(id, quantity + 1);

  const pill = `
    inline-flex items-center justify-center
    bg-back-color text-item-color font-bold
    text-xs sm:text-sm
    px-3 sm:px-6 py-[2px] sm:py-1
    leading-none rounded-full truncate
  `;

  const firstLine  = artists.slice(0, 2);
  const secondLine = artists.slice(2);

  return (
    <div
      className="
        relative w-full
        aspect-[4/3]
        lg:aspect-none lg:h-full
        bg-cover bg-center
        overflow-hidden rounded-none
      "
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between p-4 sm:p-6">
        {/* Festival & Lieu */}
        <div className="flex justify-between mb-2 sm:mb-4">
          <span className={pill}>{festival}</span>
          <span className={pill}>{city}</span>
        </div>

        {/* Catégories */}
        {categories.length > 0 && (
          <div className="flex gap-2 mb-2 sm:mb-4">
            {categories.map((c,i) => (
              <span key={i} className={pill}>{c}</span>
            ))}
          </div>
        )}

        {/* Artistes & Dates */}
        <div className="flex justify-between items-center mb-2 sm:mb-4">
          <div className="mb-2 sm:mb-4">
            <div className="flex gap-2">
              {firstLine.map((name,i) => (
                <span key={i} className={pill}>{name}</span>
              ))}
            </div>
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

        {/* Quantité, Prix & Bouton */}
        <div className="flex flex-col items-center">
          <div className="inline-flex items-center bg-back-color rounded-full overflow-hidden mb-2">
            <button
              onClick={decrease}
              disabled={!canDecrease}
              className="px-2 py-0.5 sm:px-3 sm:py-1 hover:bg-white transition disabled:opacity-50"
            >–</button>
            <span className="px-4 sm:px-6 py-0.5 sm:py-1 text-base sm:text-lg font-bold text-item-color">
              {quantity}
            </span>
            <button
              onClick={increase}
              disabled={!canIncrease}
              className="px-2 py-0.5 sm:px-3 sm:py-1 hover:bg-white transition disabled:opacity-50"
            >+</button>
          </div>
          <span className="
            bg-back-color text-item-color text-sm sm:text-base font-bold
            px-4 sm:px-6 py-1 rounded-full mb-2 whitespace-nowrap
          ">
            {price}€
          </span>
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