
// src/components/AccountPage.jsx
import React, { useState } from "react";

export default function AccountPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit =
    (field, value) =>
    (e) => {
      e.preventDefault();
      // TODO : remplacer par appel API pour mettre à jour `field`
      console.log(`Update ${field}:`, value);
    };

  const handleDelete = () => {
    // TODO : appel API suppression de compte
    console.log("Account deleted");
  };

  return (
   

     
      <main className="flex-1">
        <h1 className="text-4xl text-teal-700 font-bold text-center mt-8">
          Account
        </h1>

        {/* Formulaire */}
        <div className="max-w-4xl mx-auto bg-teal-700 p-8 my-8 rounded-lg">
          {[
            {
              label: "Change Name",
              id: "name",
              type: "text",
              state: name,
              setter: setName,
            },
            {
              label: "Change Email",
              id: "email",
              type: "email",
              state: email,
              setter: setEmail,
            },
            {
              label: "Change Password",
              id: "password",
              type: "password",
              state: password,
              setter: setPassword,
            },
            {
              label: "Change Address",
              id: "address",
              type: "text",
              state: address,
              setter: setAddress,
            },
          ].map(({ label, id, type, state, setter }) => (
            <form
              key={id}
              className="flex items-center mb-8"
              onSubmit={handleSubmit(id, state)}
            >
              <label
                className="w-32 text-white font-semibold"
                htmlFor={id}
              >
                {label}
              </label>
              <input
                id={id}
                type={type}
                value={state}
                onChange={(e) => setter(e.target.value)}
                placeholder={`Nouveau ${label.split(" ")[1].toLowerCase()}`}
                className="flex-1 h-12 px-6 ml-4 rounded-full bg-teal-100 focus:outline-none"
              />
              <button
                type="submit"
                className="ml-4 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full"
              >
                Submit
              </button>
            </form>
          ))}

          {/* Delete account */}
          <div className="flex justify-end items-center pt-4">
            <span className="text-white font-semibold">Delete account</span>
            <button
              type="button"
              onClick={handleDelete}
              className="ml-4 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full"
            >
              Confirm
            </button>
          </div>
        </div>
      </main>

     
      
    
  );
}