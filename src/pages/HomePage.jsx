function HomePage() {
  return (
    <>
      
      <div className="min-h-screen bg-back-color font-dm-sans flex items-center justify-center p-4">
        
        <div className="w-full max-w-6xl mx-auto bg-item-color overflow-hidden">
         
          <div className="px-6 py-12 sm:px-10 sm:py-16 md:px-16 md:py-20 lg:px-20 lg:py-24">
            <h1 className="text-back-color text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8">
              Need to break free
            </h1>
            
            <p className="text-back-color text-center text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed mb-10 sm:mb-12 md:mb-16">
              Longing for an escape, to forget your everyday troubles and let
              the music sweep you away? Concerts and festivals are just what
              you need. Be sure to check out our ticket catalog!
            </p>
            
            <div className="flex justify-center">
             
              <a
                href="./Ticket"
                className="bg-button-color px-8 py-3 sm:px-10 sm:py-4 text-white rounded-full font-semibold text-lg sm:text-xl "
              >
                Ticket
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;