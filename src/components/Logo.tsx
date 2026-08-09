import { cn } from "@/lib/utils";

/**
 * Emplacement du logo officiel Boya Winn Consulting.
 * Dès que le fichier officiel est fourni, remplacer le bloc par :
 *   <img src={logo} alt="Boya Winn Consulting" className="h-11 w-auto" />
 */
export function Logo({
  variant = "dark",
  className,
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const isLight = variant === "light";
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span
        aria-hidden="true"
        className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-brick text-[15px] font-extrabold tracking-tight text-primary-foreground sm:h-11 sm:w-11 sm:text-base"
      >
        BW
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={cn(
            "text-[15px] font-extrabold tracking-tight sm:text-base",
            isLight ? "text-anthracite-foreground" : "text-anthracite",
          )}
        >
          BOYA WINN
        </span>
        <span
          className={cn(
            "mt-1 text-[10px] font-semibold uppercase tracking-[0.24em]",
            isLight ? "text-anthracite-foreground/70" : "text-muted-foreground",
          )}
        >
          Consulting
        </span>
      </span>
    </span>
  );
}
