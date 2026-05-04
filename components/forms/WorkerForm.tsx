"use client";
import { useState } from "react";

export default function WorkerForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "",
    services: "",
  });

  const handleSubmit = () => {
    console.log(form);
    alert("Registration submitted!");
  };

  return (
    <div className="mx-auto max-w-md p-4">
      <h2 className="mb-4 text-xl font-bold">Join DWI</h2>

      <input
        placeholder="Full Name"
        className="input"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Phone"
        className="input"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />

      <input
        placeholder="Area"
        className="input"
        value={form.area}
        onChange={(e) => setForm({ ...form, area: e.target.value })}
      />

      <input
        placeholder="Skills (e.g cleaning, delivery)"
        className="input"
        value={form.services}
        onChange={(e) => setForm({ ...form, services: e.target.value })}
      />

      <button
        onClick={handleSubmit}
        className="mt-4 w-full rounded bg-green-600 py-2 text-white hover:bg-green-700"
      >
        Register
      </button>
    </div>
  );
}
