"use client";
import { useState } from "react";
import { openWhatsApp } from "@/lib/whatsapp";

export default function RequestForm() {
  const [form, setForm] = useState({
    service: "",
    location: "",
    date: "",
    duration: "",
    name: "",
    phone: "",
  });

  const handleSubmit = () => {
    const message = `
New Request:
Service: ${form.service}
Location: ${form.location}
Date: ${form.date}
Duration: ${form.duration}
Name: ${form.name}
Phone: ${form.phone}
`;
    openWhatsApp(message);
  };

  return (
    <div className="mx-auto max-w-md p-4">
      <h2 className="mb-4 text-xl font-bold">Request a Worker</h2>

      <input
        placeholder="Service (e.g cleaning)"
        className="input"
        value={form.service}
        onChange={(e) => setForm({ ...form, service: e.target.value })}
      />

      <input
        placeholder="Location"
        className="input"
        value={form.location}
        onChange={(e) => setForm({ ...form, location: e.target.value })}
      />

      <input
        type="date"
        className="input"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />

      <input
        placeholder="Duration"
        className="input"
        value={form.duration}
        onChange={(e) => setForm({ ...form, duration: e.target.value })}
      />

      <input
        placeholder="Your Name"
        className="input"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Phone Number"
        className="input"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />

      <button
        onClick={handleSubmit}
        className="mt-4 w-full rounded bg-green-600 py-2 text-white hover:bg-green-700"
      >
        Get Worker Now
      </button>
    </div>
  );
}
