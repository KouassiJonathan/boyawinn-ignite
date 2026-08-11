import { WhatsAppIcon } from "./WhatsAppIcon";
import { waLink, WA_MESSAGES } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={waLink(WA_MESSAGES.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discuter sur WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2.5 rounded-full bg-anthracite px-4 py-3 text-sm font-semibold text-anthracite-foreground transition-colors duration-200 hover:bg-brick focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <WhatsAppIcon className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
