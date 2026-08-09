import { MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { ADDRESS, NAV_LINKS, PHONES, telLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-anthracite text-anthracite-foreground">
      <div className="container-bw grid gap-10 py-14 md:grid-cols-3 lg:py-16">
        <div>
          <Logo variant="light" />
          <p className="mt-5 text-sm font-extrabold uppercase tracking-[0.16em]">
            Boya Winn Consulting
          </p>
          <p className="mt-2 text-sm text-anthracite-foreground/70">
            Création d'entreprise • Comptabilité • Fiscalité • Formation
          </p>
        </div>

        <nav aria-label="Liens du pied de page">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brick">Navigation</p>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-anthracite-foreground/75 transition-colors hover:text-brick"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brick">Coordonnées</p>
          <p className="mt-4 flex gap-2.5 text-sm text-anthracite-foreground/75">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brick" />
            <span>Angré 9ème tranche, Immeuble CGK, route de la CNPS, Abidjan</span>
          </p>
          <ul className="mt-4 space-y-2">
            {PHONES.map((p) => (
              <li key={p} className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-brick" />
                <a
                  href={telLink(p)}
                  className="text-sm text-anthracite-foreground/75 transition-colors hover:text-brick"
                >
                  {p}
                </a>
              </li>
            ))}
          </ul>
          <span className="sr-only">{ADDRESS}</span>
        </div>
      </div>

      <div className="border-t border-anthracite-foreground/10">
        <p className="container-bw py-6 text-center text-xs text-anthracite-foreground/60">
          © 2026 Boya Winn Consulting — Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
