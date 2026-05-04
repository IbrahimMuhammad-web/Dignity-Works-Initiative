// Set this to the DWI ops WhatsApp number (international format, no +).
export const DWI_WHATSAPP = "234XXXXXXXXXX";

export function whatsappLink(message: string, phone: string = DWI_WHATSAPP): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string, phone: string = DWI_WHATSAPP): void {
  window.open(whatsappLink(message, phone), "_blank");
}
