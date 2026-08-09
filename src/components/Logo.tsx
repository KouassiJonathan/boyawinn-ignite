import { cn } from "@/lib/utils";
import logoAsset from "@/assets/boya-winn-logo.png.asset.json";

/** Logo officiel Boya Winn Consulting. */
export function Logo({
  variant = "dark",
  className,
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  return (
    <img
      src={logoAsset.url}
      alt="Cabinet Boya Winn Consulting"
      className={cn(
        "h-11 w-auto sm:h-12",
        variant === "light" && "brightness-0 invert",
        className,
      )}
      loading="eager"
      decoding="async"
    />
  );
}
