"use client";

import { useState } from "react";

export function NewsletterSignup() {
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    const target = e.currentTarget;
    const formData = {
      access_key: "7d14eed3-9054-4dd2-81ee-8c4963a49e4e", // ✅ your Web3Forms access key
      name: target.name.valueOf,
      email: target.email.value,
      message: target.message.value,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSuccessMsg("✅ Message sent successfully!");
        target.reset(); // clear the form
      } else {
        setErrorMsg("❌ Failed to send. Try again.");
      }
    } catch (err) {
      setErrorMsg("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 max-w-xl mx-auto px-4 py-6 border rounded-md shadow"
      >
        <h2 className="text-subheading font-bold mb-4 text-center">
          Contact Us
        </h2>

        {successMsg && (
          <p className="text-green-600 font-medium">{successMsg}</p>
        )}
        {errorMsg && <p className="text-red-600 font-medium">{errorMsg}</p>}

        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            name="name"
            type="text"
            required
            className="w-full border px-3 py-2 rounded"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            name="email"
            type="email"
            required
            className="w-full border px-3 py-2 rounded"
            placeholder="email@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            name="message"
            required
            rows={4}
            className="w-full border px-3 py-2 rounded"
            placeholder="Enter your message"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition disabled:opacity-60"
        >
          {loading ? "Sending..." : "Submit Form"}
        </button>
      </form>
    </>
  );
}
