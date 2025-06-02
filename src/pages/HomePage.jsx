
function HomePage() {
  return (
    <>
      
      <div className="min-h-screen bg-back-color font-dm-sans flex items-center justify-center">
      <div>
        <div className="container w-[1200px] bg-item-color mx-auto px-4 py-16">
          <h1 className="text-back-color text-center font-bold text-4xl md:text-5xl lg:text-6xl mb-8">
            Need to break free
          </h1>
          <p className="text-back-color text-center text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
            Longing for an escape, to forget your everyday troubles and let the music sweep you away? Concerts and festivals are just what you need. Be sure to check out our ticket catalog!
          </p>
          <button className="border rounded-full p-3 px-6 py-3 items-center   border-button-color text-center bg-button-color text-white font-bold">Ticket</button>
        </div>
         
        </div>
      </div>
    </>
  );
}

export default HomePage;