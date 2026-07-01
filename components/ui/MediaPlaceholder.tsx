import { Icon } from "./Icon";

/**
 * Honest, editorial placeholder for real project photography/video.
 * Warm monochrome, hairline framed, faint blueprint grid for depth —
 * swap for <Image> when real assets arrive.
 */
export function MediaPlaceholder({
  label = "Prostor pro fotografii realizace",
  tone = "light",
  icon = "plug",
  className = "",
  ratio,
}: {
  label?: string;
  tone?: "light" | "dark";
  icon?: string;
  className?: string;
  ratio?: string;
}) {
  const dark = tone === "dark";
  return (
    <div
      className={`relative overflow-hidden rounded-[var(--radius-card)] ${className}`}
      style={{
        aspectRatio: ratio,
        background: dark ? "#171717" : "var(--color-bone)",
        border: dark
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid var(--color-line)",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: dark
            ? "linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)"
            : "linear-gradient(rgba(0,0,0,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.03) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(120% 90% at 50% 0%,#000 25%,transparent 100%)",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
        <span
          className="grid h-11 w-11 place-items-center rounded-[10px]"
          style={{
            background: dark ? "rgba(255,255,255,0.06)" : "var(--color-paper)",
            border: dark
              ? "1px solid rgba(255,255,255,0.1)"
              : "1px solid var(--color-line)",
            color: dark ? "rgba(255,255,255,0.75)" : "var(--color-muted)",
          }}
        >
          <Icon name={icon} size={20} />
        </span>
        <span
          className="font-mono text-[0.72rem] uppercase tracking-[0.1em]"
          style={{ color: dark ? "rgba(255,255,255,0.62)" : "var(--color-muted)" }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
