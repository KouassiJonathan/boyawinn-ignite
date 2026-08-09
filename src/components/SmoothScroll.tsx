import { useEffect } from "react";

/**
 * Intercepte les liens d'ancre (#section) pour offrir un défilement fluide
 * avec compensation de la navbar sticky et une mise en valeur de la section ciblée.
 */
export function SmoothScroll() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const goTo = (id: string, push: boolean) => {
      const el = document.getElementById(id);
      if (!el) return;
      const offset = 88;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: Math.max(top, 0), behavior: reduced ? "auto" : "smooth" });

      if (!reduced) {
        el.classList.remove("section-arrive");
        void el.offsetWidth;
        el.classList.add("section-arrive");
        window.setTimeout(() => el.classList.remove("section-arrive"), 900);
      }
      if (push) window.history.replaceState(null, "", `#${id}`);
    };

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
      const anchor = (e.target as HTMLElement | null)?.closest?.("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("#") || href.length < 2) return;
      const id = decodeURIComponent(href.slice(1));
      if (!document.getElementById(id)) return;
      e.preventDefault();
      goTo(id, true);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
