import { DWI_WHATSAPP } from "@/lib/whatsapp";

export const metadata = { title: "Contact — DWI" };

export default function ContactPage() {
  return (
    <div>
      <header className="bg-green-700 p-6 text-center text-white">
        <h1 className="text-2xl font-bold">Contact us</h1>
        <p className="mt-2 text-sm">We respond on WhatsApp within 2 hours.</p>
      </header>

      <div className="mx-auto max-w-md space-y-3 p-6">
        <a
          href={`https://wa.me/${DWI_WHATSAPP}`}
          className="block rounded bg-green-600 py-3 text-center text-white hover:bg-green-700"
        >
          Chat on WhatsApp
        </a>
        <a
          href={`tel:+${DWI_WHATSAPP}`}
          className="block rounded border border-green-600 py-3 text-center text-green-700 hover:bg-green-50"
        >
          Call us
        </a>
        <a
          href="mailto:hello@dignityworks.ng"
          className="block rounded border py-3 text-center text-gray-700 hover:bg-gray-50"
        >
          Email hello@dignityworks.ng
        </a>
      </div>
    </div>
  );
}
