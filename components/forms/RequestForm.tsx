"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import { openWhatsApp } from "@/lib/whatsapp";

const SERVICES = [
  { value: "cleaning", label: "Home cleaning" },
  { value: "laundry", label: "Laundry" },
  { value: "cooking", label: "Cooking" },
  { value: "errands", label: "Errands" },
  { value: "homecare", label: "Home assistance" },
  { value: "yardwork", label: "Yard & garden" },
];

const DURATIONS = [
  { value: "1", label: "1 hour" },
  { value: "2", label: "2 hours" },
  { value: "3", label: "3 hours" },
  { value: "4", label: "Half day" },
  { value: "8", label: "Full day" },
];

export default function RequestForm() {
  const [form, setForm] = useState({
    service: "",
    location: "",
    date: "",
    duration: "",
    name: "",
    phone: "",
  });
  const ready =
    form.service && form.location.trim() && form.name.trim() && form.phone.trim();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      "Salam — I'd like to book a helper through Dignity Works.",
      "",
      `*Service:* ${form.service || "—"}`,
      `*Location:* ${form.location || "—"}`,
      `*Date:* ${form.date || "—"}`,
      `*Duration:* ${form.duration || "—"}`,
      `*Name:* ${form.name || "—"}`,
      `*Phone:* ${form.phone || "—"}`,
    ].join("\n");
    openWhatsApp(message);
  };

  return (
    <div className="mx-auto max-w-md px-5 py-10">
      <div className="text-center">
        <p className="text-[12px] font-semibold uppercase tracking-wider text-forest-600">
          Step one
        </p>
        <h1 className="mt-2 text-[28px] font-semibold leading-tight tracking-tight text-ink-900">
          Request a helper
        </h1>
        <p className="mt-2 text-[14px] text-ink-700">
          Share a few details. We will follow up on WhatsApp within the hour.
        </p>
      </div>

      <form onSubmit={submit} className="mt-8 flex flex-col gap-4">
        <Select
          label="What kind of help?"
          options={SERVICES}
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
          required
        />
        <Input
          label="Where is the work?"
          placeholder="e.g. Sabon Gari, Kano"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
          required
        />
        <div className="grid grid-cols-2 gap-3">
          <Input
            label="Preferred date"
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />
          <Select
            label="Duration"
            options={DURATIONS}
            value={form.duration}
            onChange={(e) => setForm({ ...form, duration: e.target.value })}
          />
        </div>
        <Input
          label="Your name"
          placeholder="What should we call you?"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          autoComplete="name"
        />
        <Input
          label="WhatsApp number"
          placeholder="0803 …"
          inputMode="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          required
        />

        <Button type="submit" variant="primary" size="lg" disabled={!ready} className="mt-2 w-full">
          <MessageCircle size={18} aria-hidden />
          Send via WhatsApp
        </Button>

        <p className="mt-2 text-center text-[12px] text-ink-500">
          We hold nothing of yours. Workers are paid directly, in full.
        </p>
      </form>
    </div>
  );
}
