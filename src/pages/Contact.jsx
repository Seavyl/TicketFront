// src/pages/ContactPage.jsx
import { useState } from 'react';
// ou votre barre de nav

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Envoi du formulaire :', form);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-back-color flex flex-col">
      

      <header className="py-12 text-center">
        <h1 className="text-4xl font-bold text-item-color">Contact us</h1>
      </header>

      <main className="bg-bg-color flex-grow flex items-center justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-item-color p-8 lg:p-16 max-w-3xl w-full space-y-8"
        >
          {/* Row Name / Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-white font-bold"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Name"
                className="w-full bg-back-color placeholder-item-color
                           px-6 py-4 rounded-full font-bold focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-white font-bold"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="example@email.com"
                className="w-full bg-back-color text-teal-700 placeholder-item-color
                           px-6 py-4 rounded-full font-bold focus:outline-none"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-white font-bold"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Please type your message here..."
              className="w-full bg-back-color placeholder-item-color
                         px-6 py-6 rounded-2xl focus:outline-none resize-none font-bold"
            />
          </div>

          {/* Bouton */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-button-color mt-20 px-6 py-3 text text-white rounded-full font-bold">
      Submit
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}