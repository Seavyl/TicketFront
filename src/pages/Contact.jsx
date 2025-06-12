// src/pages/ContactPage.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Contact() {
  const [form, setForm] = useState({name: '',email: '',message: '',});
  const [feedback, setFeedback] = useState(''); 
  const [isLoading, setIsLoading] = useState(false);


 const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    setFeedback('');
    try {
      // POST vers /contacts (API Platform exposera /api/contacts)
      await axios.post('/contacts', form);
      setFeedback('Message send ! ');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setFeedback("Error.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-back-color flex flex-col">
      

      <header className="py-12 text-center">
        <h1 className="text-4xl font-bold text-item-color">Contact us</h1>
        {feedback&& <p className="mb-4">{feedback}</p>}
      </header>

      <main className="bg-bg-color flex-grow flex items-center justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-item-color p-8 lg:p-16 max-w-3xl w-full space-y-8"
        >
          {/* Row Name / Email */}    
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="text-white font-bold">
                Name
              </label>
              <input
                id="name"
                type='text'
                name="name"
                value={form.name}
                autoComplete="name"
                disabled={isLoading}
                 onChange={handleChange}
                required
                placeholder="Name"
                className="w-full bg-back-color placeholder-item-color
                           px-6 py-4 rounded-full font-bold focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email"className="text-white font-bold">
                Email
              </label>
              <input
                id="email"
                type="email"  
                name="email"
                value={form.email}
                autoComplete="email"
                onChange={handleChange}
                required
                placeholder="example@email.com"
                className="w-full bg-back-color placeholder-item-color
                           px-6 py-4 rounded-full font-bold focus:outline-none"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="text-white font-bold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              autoComplete="off"
              vdisabled={isLoading}
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

         {isLoading ? 'Envoi…' : 'submit'}
            </button>
          </div>
        </form>
       
      </main>
    </div>
  );
}