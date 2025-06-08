import React, { useState } from "react";

const ContactFeedback = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields.");
      return;
    }
    // Open mail client with prefilled content
    const mailto = `mailto:kurtkoti.harsha@gmail.com?subject=Vision AI Feedback from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message + '\n\nFrom: ' + form.name + ' (' + form.email + ')')}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="max-w-2xl mx-auto my-16 p-8 bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-xl border-2 border-blue-100 dark:border-blue-700 transition-colors duration-300">
      <h2 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-300 text-center">Contact / Feedback</h2>
      {submitted ? (
        <div className="text-green-700 dark:text-green-300 text-center text-lg font-semibold py-8">
          Thank you for your feedback! Your email client should open automatically.<br />If not, please email <a href="mailto:kurtkoti.harsha@gmail.com" className="underline">kurtkoti.harsha@gmail.com</a>.
        </div>
      ) : (
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-blue-800 dark:text-blue-200 font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-blue-200 dark:border-blue-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-blue-800 dark:text-blue-200 font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-blue-200 dark:border-blue-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-blue-800 dark:text-blue-200 font-semibold mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-2 rounded-lg border border-blue-200 dark:border-blue-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          {error && <div className="text-red-600 dark:text-red-400 font-semibold">{error}</div>}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-lg shadow transition-colors duration-200"
          >
            Send Feedback
          </button>
        </form>
      )}
    </section>
  );
};

export default ContactFeedback;
