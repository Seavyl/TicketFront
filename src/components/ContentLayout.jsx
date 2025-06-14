export default function ContactLayout({ children }) {
  return (
    <div className="min-h-screen bg-back-color flex flex-col">
      <header className="py-12 text-center">
        <h1 className="text-4xl font-bold text-item-color">
          Contact us
        </h1>
      </header>
      <main className="bg-bg-color flex-grow flex items-center justify-center px-4">
        {children}
      </main>
    </div>
  )
}