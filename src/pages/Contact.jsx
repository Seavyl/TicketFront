// src/pages/ContactPage.jsx
import { useState } from 'react'
import apiClient     from '../api/axiosInstance'  
export default function ContactPage() {
  const [form, setForm]       = useState({
    name: '',
    email: '',
    message: '',
  })
  const [feedback, setFeedback] = useState('')
  const [isError, setIsError]   = useState(false)

    const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  } 

  const handleSubmit = async e => {
    e.preventDefault()
    setFeedback('')
    try {
      // baseURL='/api', donc appelle POST '/api/contacts'
      await apiClient.post('/contacts', form)
      setIsError(false)
      setFeedback('Message send !')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error(err)
      setIsError(true)
      setFeedback('Error ')
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-back-color">
      <header className="py-12 text-center">
        <h1 className="text-4xl font-bold text-item-color">Contact us</h1>
        {feedback && (
          <p
            className={`
              mx-auto mt-4 inline-block px-6 py-2 rounded-full font-bold text-white
              ${isError ? 'bg-item-color' : 'bg-button-color'}
            `}
          >
            {feedback}
          </p>
        )}
      </header>

      <main className="flex-1 flex items-center justify-center bg-bg-color px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-item-color p-8 lg:p-16 max-w-3xl w-full space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-white font-bold">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Name"
                className="
                  w-full bg-back-color placeholder-item-color
                  px-6 py-4 rounded-full focus:outline-none
                "
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-white font-bold">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="example@mail.com"
                className="
                  w-full bg-back-color placeholder-item-color
                  px-6 py-4 rounded-full focus:outline-none
                "
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-white font-bold">
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
              className="
                w-full bg-back-color placeholder-item-color
                px-6 py-6 rounded-2xl resize-none
                focus:outline-none
              "
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-button-color mt-8 px-6 py-3 text-white
                         rounded-full font-bold"
            >
              Submit
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}