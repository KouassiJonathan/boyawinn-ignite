import { MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { ADDRESS, PHONES, telLink } from "@/lib/site";

const entreprise = [
  { label: "À propos", href: "#a-propos" },
  { label: "Domaines d'expertise", href: "#expertise" },
  { label: "Notre méthode", href: "#methode" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const services = [
  { label: "Création d'entreprise", href: "#creation" },
  { label: "Suivi comptable et fiscal", href: "#services" },
  { label: "École des Comptables", href: "#formation" },
  { label: "Tarifs", href: "#tarifs" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-anthracite text-anthracite-foreground">
      <div className="container-bw grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_0.9fr_0.9fr_1fr] lg:py-20">
        <div>
          <Logo variant="light" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-anthracite-foreground/65">
            Cabinet de conseil basé à Abidjan : création d'entreprise, comptabilité, fiscalité,
            conseil et formation professionnelle.
          </p>
        </div>

        <nav aria-label="Entreprise">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brick">Entreprise</p>
          <ul className="mt-5 space-y-3">
            {entreprise.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-anthracite-foreground/70 transition-colors hover:text-anthracite-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brick">Services</p>
          <ul className="mt-5 space-y-3">
            {services.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm text-anthracite-foreground/70 transition-colors hover:text-anthracite-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brick">Contact</p>
          <p className="mt-5 grid grid-cols-[auto_minmax(0,1fr)] gap-3 text-sm text-anthracite-foreground/70">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brick" strokeWidth={1.5} />
            <span>{ADDRESS}</span>
          </p>
          <ul className="mt-4 space-y-2.5">
            {PHONES.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brick" strokeWidth={1.5} />
                <a
                  href={telLink(p)}
                  className="text-sm text-anthracite-foreground/70 transition-colors hover:text-anthracite-foreground"
                >
                  {p}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Signature typographique */}
      <div aria-hidden="true" className="container-bw overflow-hidden pb-6">
        <p className="select-none whitespace-nowrap font-display text-[13vw] font-bold leading-[0.85] tracking-[-0.05em] text-anthracite-foreground/[0.06]">
          BOYA WINN CONSULTING
        </p>
      </div>

      <div className="border-t border-anthracite-foreground/10">
        <div className="container-bw flex flex-col gap-3 py-6 text-xs text-anthracite-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Boya Winn Consulting. Tous droits réservés.</p>
          <p className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#contact" className="transition-colors hover:text-anthracite-foreground">
              Mentions légales
            </a>
            <a href="#contact" className="transition-colors hover:text-anthracite-foreground">
              Politique de confidentialité
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
