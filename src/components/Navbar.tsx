import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS } from "@/lib/site";
import { cn } from "@/lib/utils";
import { waLink, WA_MESSAGES } from "@/lib/site";

const CTA_TEXT = "Parler à un conseiller";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("#accueil");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full border-b bg-background transition-all duration-300",
        scrolled ? "border-border shadow-soft" : "border-transparent",
      )}
    >
      <div className="container-bw flex items-center py-3.5 lg:py-4">
        {/* Logo desktop */}
        <a
          href="#accueil"
          className={cn(
            "hidden min-w-0 transition-all duration-300 lg:block",
            scrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none",
          )}
          aria-label="Boya Winn Consulting — accueil"
        >
          <Logo className="h-10 w-auto sm:h-11" />
        </a>

        {/* Mobile logo */}
        <a href="#accueil" className="min-w-0 lg:hidden" aria-label="Boya Winn Consulting — accueil">
          <Logo className="h-10 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav
          className={cn(
            "hidden items-center gap-8 transition-all duration-300 lg:flex",
            scrolled ? "ml-auto opacity-100" : "ml-auto opacity-0 pointer-events-none absolute",
          )}
          aria-label="Navigation principale"
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={active === l.href ? "true" : undefined}
              className={cn(
                "nav-underline text-sm font-semibold transition-colors hover:text-brick",
                active === l.href ? "text-brick" : "text-muted-foreground",
              )}
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLink(WA_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine inline-flex items-center gap-2 rounded-md bg-brick px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:bg-brick-strong hover:shadow-card"
          >
            {CTA_TEXT}
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </a>
        </nav>

        {/* Mobile CTA + hamburger */}
        <div className="ml-auto flex items-center gap-3 lg:hidden">
          <a
            href={waLink(WA_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-brick px-4 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            {CTA_TEXT}
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border text-anthracite transition-colors hover:border-brick hover:text-brick"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Hero-only CTA desktop */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 hidden items-center justify-end px-8 lg:flex",
          scrolled ? "opacity-0" : "opacity-100",
        )}
        aria-hidden={scrolled ? "true" : undefined}
      >
        <a
          href={waLink(WA_MESSAGES.general)}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto btn-shine inline-flex items-center gap-2 rounded-md bg-brick px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:bg-brick-strong hover:shadow-card"
        >
          {CTA_TEXT}
          <ArrowRight className="h-4 w-4" strokeWidth={2} />
        </a>
      </div>

      {open && (
        <nav
          className="border-t border-border bg-background lg:hidden"
          aria-label="Navigation mobile"
        >
          <ul className="container-bw flex flex-col py-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-border py-4 text-base font-semibold text-anthracite"
                >
                  {l.label}
                  <ArrowRight className="h-4 w-4 text-brick" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
