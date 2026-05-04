import Card from "@/components/ui/Card";

const services = [
  { id: "cleaning", label: "Cleaning", desc: "Homes and offices" },
  { id: "delivery", label: "Delivery", desc: "Errands and dispatch" },
  { id: "gardening", label: "Gardening", desc: "Yards and lawns" },
  { id: "repairs", label: "Repairs", desc: "Light handyman work" },
  { id: "errands", label: "Errands", desc: "Market runs" },
  { id: "carwash", label: "Car wash", desc: "At your doorstep" },
];

export default function ServicesPreview() {
  return (
    <section className="bg-gray-50 py-10">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-xl font-bold">Services</h2>
        <p className="mt-1 text-sm text-gray-600">
          Tap a service and we will match you with a vetted worker.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
          {services.map((s) => (
            <Card key={s.id}>
              <div className="font-semibold">{s.label}</div>
              <div className="text-sm text-gray-600">{s.desc}</div>
              <a
                href="/request"
                className="mt-3 inline-block text-sm font-medium text-green-700"
              >
                Request →
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
