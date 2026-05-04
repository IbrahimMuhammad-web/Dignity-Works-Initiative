import ServicesPreview from "@/components/sections/ServicesPreview";

export const metadata = { title: "Services — DWI" };

export default function ServicesPage() {
  return (
    <div>
      <header className="bg-green-700 p-6 text-center text-white">
        <h1 className="text-2xl font-bold">Services we cover</h1>
        <p className="mt-2 text-sm">
          Tap a service to start a request. We will reach out on WhatsApp.
        </p>
      </header>
      <ServicesPreview />
    </div>
  );
}
