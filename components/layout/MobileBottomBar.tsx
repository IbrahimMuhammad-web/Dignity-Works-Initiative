import { DWI_WHATSAPP } from "@/lib/whatsapp";

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-around border-t bg-white p-2 text-sm md:hidden">
      <a
        href={`https://wa.me/${DWI_WHATSAPP}`}
        className="rounded px-3 py-2 text-green-700 hover:bg-green-50"
      >
        WhatsApp
      </a>
      <a
        href="/request"
        className="rounded bg-green-600 px-3 py-2 text-white hover:bg-green-700"
      >
        Request
      </a>
      <a
        href={`tel:+${DWI_WHATSAPP}`}
        className="rounded px-3 py-2 text-gray-700 hover:bg-gray-100"
      >
        Call
      </a>
    </div>
  );
}
