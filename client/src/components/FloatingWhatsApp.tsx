import { SiWhatsapp } from "react-icons/si";
import { getWhatsAppUrl } from "./WhatsAppCTA";

export function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      data-testid="button-floating-whatsapp"
      aria-label="Contato via WhatsApp"
    >
      <SiWhatsapp className="w-7 h-7 text-white" />
    </a>
  );
}
