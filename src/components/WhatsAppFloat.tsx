import { MessageCircle } from "lucide-react";
import { waLink, WA_MESSAGES } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={waLink(WA_MESSAGES.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discuter sur WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brick text-primary-foreground shadow-lift transition-transform hover:scale-105 hover:bg-brick-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2} />
    </a>
  );
}
