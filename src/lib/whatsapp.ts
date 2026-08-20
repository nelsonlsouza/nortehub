import { siteConfig } from "@/data/site";
export function buildWhatsAppUrl(message: string = siteConfig.social.whatsappMessage) { return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`; }
