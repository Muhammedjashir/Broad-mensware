import { Phone, MessageCircle } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/916282143757"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href="tel:06282143757"
        aria-label="Call"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-blend-gradient text-white shadow-lg animate-pulse-glow transition-transform hover:scale-110"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}

export default FloatingActions;
