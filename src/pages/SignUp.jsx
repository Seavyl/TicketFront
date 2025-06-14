

import { useState } from "react";

export default function SignUpPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inscription avec :", form);
    
  };

  return (
    <div className="min-h-screen bg-back-color flex flex-col items-center px-4">
      
      <h1 className="mt-20 mb-20 text-item-color font-bold text-4xl">
        Sign up
      </h1>

      
      <div
        className="
          bg-item-color
          w-full max-w-[800px]
          h-auto md:h-[400px]
          flex flex-col md:justify-center
          px-6 md:px-12
          py-12 md:py-0
        "
      >
          <form
            onSubmit={handleSubmit}
            noValidate
            className="h-full flex flex-col justify-between"
          >
            
            <div className="space-y-6  md:mt-0">
              
              <div className="flex flex-col md:flex-row md:items-center">
                <label
                  htmlFor="name"
                  className="text-white mt-7 font-bold md:mb-0 md:w-1/4"
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
                  placeholder="Your name"
                  className="
                    w-full md:w-3/4 h-12
                    bg-back-color text-item-color
                    rounded-full px-6 mt-10
                    placeholder-item-color
                  "
                />
              </div>

             
              <div className="flex flex-col md:flex-row md:items-center">
                <label
                  htmlFor="email"
                  className="text-white font-bold mb-2 md:mb-0 md:w-1/4"
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
                  placeholder="you@example.com"
                  className="
                    w-full md:w-3/4 h-12
                    bg-back-color text-item-color
                    rounded-full px-6
                    placeholder-item-color 
                  "
                />
              </div>

              {/* Address */}
              <div className="flex flex-col md:flex-row md:items-center">
                <label
                  htmlFor="address"
                  className="text-white font-bold mb-2 md:mb-0 md:w-1/4"
                >
                  Address
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  value={form.address}
                  onChange={handleChange}
                  required
                  placeholder="Your address"
                  className="
                    w-full md:w-3/4 h-12
                    bg-back-color text-item-color
                    rounded-full px-6
                    placeholder-item-color
                  "
                />
              </div>

              <div className="flex flex-col md:flex-row md:items-center">
                <label
                  htmlFor="password"
                  className="text-white font-bold mb-2 md:mb-0 md:w-1/4"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  placeholder="••••••••"
                  className="
                    w-full md:w-3/4 h-12
                    bg-back-color text-item-color
                    placeholder-item-color 
                    rounded-full px-6
                    
                  "
                />
              </div>
            </div>

            {/* Bouton, toujours à l’intérieur */}
            <div className="text-center mb-6 md:mb-8">
              <button
                type="submit"
                className="
                  bg-button-color text-white
                  px-10 py-2.5 rounded-full font-bold
                  
                 
                "
              >
                submit
              </button>
            </div>
          </form>
          </div>
        </div>
      
    
  );
}