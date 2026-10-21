import { business } from "@/config/business";

/** Link do WhatsApp com mensagem codificada, ou null se o número ainda não foi configurado. */
export function whatsappUrl(message: string = business.contact.defaultMessage): string | null {
  const { whatsapp } = business.contact;
  if (!/^\d{10,15}$/.test(whatsapp)) return null;
  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;
}

export function phoneUrl(): string | null {
  const { phone } = business.contact;
  return /^\d{10,15}$/.test(phone) ? `tel:+${phone}` : null;
}

/** Formata 55 + DDD + número para exibição. */
export function formatPhone(digits: string): string {
  const m = digits.match(/^55(\d{2})(\d{4,5})(\d{4})$/);
  return m ? `(${m[1]}) ${m[2]}-${m[3]}` : `+${digits}`;
}
