// src/components/ContactForm.jsx
import { useState, useEffect } from "react";
import apiClient from "../api/axiosInstance";

export default function ContactForm() {
  const initialFormState = { name: "", email: "", message: "" };
  const [form, setForm] = useState(initialFormState);
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState({ type: "", message: "" });
  const [submissions, setSubmissions] = useState([]); // Pour la liste

  // Charger les soumissions existantes au montage
  useEffect(() => {
    apiClient
      .get("/contact")
      .then((resp) => setSubmissions(resp.data))
      .catch((err) => console.error("Erreur GET /contact :", err));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Submit déclenché !");
    console.log("🏹 handleSubmit appelé, form =", form);
    setIsLoading(true);
    setFeedback({ type: "", message: "" });

    try {
      const response = await apiClient.post("/contact", form);
      setFeedback({
        type: "success",
        message: response.data.message || "Envoyé ! 🎉",
      });
      setForm(initialFormState);

      // Recharger la liste
      const listResp = await apiClient.get("/contact");
      setSubmissions(listResp.data);
    } catch (error) {
      console.error("Erreur POST /contact :", error);
      let msg = "Erreur lors de l'envoi.";

      if (error.response) {
        const data = error.response.data;
        if (data.errors) {
          // Validation errors : objet { champ: [msg1, msg2], ... }
          msg = Object.values(data.errors)
            .flat()
            .join(" ");
        } else if (data.error) {
          msg = data.error;
        } else {
          msg = `Erreur ${error.response.status}`;
        }
      } else if (error.request) {
        msg = "Le serveur n'a pas répondu.";
      }

      setFeedback({ type: "error", message: msg });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto py-6">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded shadow"
      >
        <div>
          <label htmlFor="name" className="block mb-1">
            Nom
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
            disabled={isLoading}
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
            disabled={isLoading}
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
            disabled={isLoading}
          />
        </div>

        {feedback.message && (
          <div
            className={`p-3 rounded text-sm ${
              feedback.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {feedback.message}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {isLoading ? "Envoi en cours..." : "Envoyer"}
        </button>
      </form>

      {/* Liste des soumissions */}
      <section className="mt-8">
        <h2 className="text-xl mb-2">Historique des contacts</h2>
        {submissions.length > 0 ? (
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-2 py-1">Nom</th>
                <th className="border px-2 py-1">Email</th>
                <th className="border px-2 py-1">Message</th>
                <th className="border px-2 py-1">Date</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((s) => (
                <tr key={s.id}>
                  <td className="border px-2 py-1">{s.name}</td>
                  <td className="border px-2 py-1">{s.email}</td>
                  <td className="border px-2 py-1">{s.message}</td>
                  <td className="border px-2 py-1">{s.submittedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Aucune soumission pour le moment.</p>
        )}
      </section>
    </div>
  );
}