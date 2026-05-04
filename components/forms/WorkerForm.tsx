"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const SKILLS = [
  "Home cleaning",
  "Laundry",
  "Cooking",
  "Errands",
  "Childminding",
  "Elder care",
  "Driving",
  "Yard work",
];

export default function WorkerForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "",
    skills: [] as string[],
    availability: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const toggle = (s: string) =>
    setForm((f) => ({
      ...f,
      skills: f.skills.includes(s)
        ? f.skills.filter((x) => x !== s)
        : [...f.skills, s],
    }));

  const ready =
    form.name.trim() && form.phone.trim() && form.area.trim() && form.skills.length;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-md px-5 py-16 text-center">
        <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-pill bg-forest-600/10 text-forest-600">
          <CheckCircle2 size={28} aria-hidden />
        </span>
        <h2 className="mt-5 text-[26px] font-semibold tracking-tight text-ink-900">
          Welcome, {form.name.split(" ")[0] || "friend"}.
        </h2>
        <p className="mt-3 text-[14px] leading-relaxed text-ink-700">
          We will call you on WhatsApp within 24 hours to confirm a few details.
          After that, jobs in your area will start to come.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-md px-5 py-10">
      <div className="text-center">
        <p className="text-[12px] font-semibold uppercase tracking-wider text-forest-600">
          Become a worker
        </p>
        <h1 className="mt-2 text-[28px] font-semibold leading-tight tracking-tight text-ink-900">
          Honest work, near home.
        </h1>
        <p className="mt-2 text-[14px] text-ink-700">
          Free to join. We never take more than 8% as a community support fee.
        </p>
      </div>

      <form onSubmit={submit} className="mt-8 flex flex-col gap-4">
        <Input
          label="Full name"
          placeholder="Your name as friends call you"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          autoComplete="name"
          required
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
        <Input
          label="Your area"
          placeholder="e.g. Tudun Wada, Kaduna"
          value={form.area}
          onChange={(e) => setForm({ ...form, area: e.target.value })}
          required
        />

        <div>
          <span className="text-[12px] font-medium text-ink-700">
            What can you do?
          </span>
          <ul className="mt-2 flex flex-wrap gap-2">
            {SKILLS.map((s) => {
              const on = form.skills.includes(s);
              return (
                <li key={s}>
                  <button
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggle(s)}
                    className={[
                      "rounded-pill border px-4 py-2 text-[13px] font-medium transition",
                      on
                        ? "border-forest-600 bg-forest-600 text-sand-50"
                        : "border-forest-600/25 text-forest-600 hover:border-forest-600",
                    ].join(" ")}
                  >
                    {s}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <Input
          label="When can you work?"
          placeholder="e.g. weekday mornings, Saturdays"
          value={form.availability}
          onChange={(e) => setForm({ ...form, availability: e.target.value })}
        />

        <Button type="submit" variant="primary" size="lg" disabled={!ready} className="mt-2 w-full">
          Submit my details
        </Button>
      </form>
    </div>
  );
}
