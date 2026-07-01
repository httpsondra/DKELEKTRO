import { Icon } from "./Icon";

/**
 * Icon-forward visual panel used where real photography will later live.
 * A large brand-accent icon on a hairline-framed, blueprint-textured surface —
 * reads as an intentional graphic, not an empty "insert photo" slot. Swap for
 * an <Image> when real assets arrive; keep `label` as the alt text.
 */
export function MediaPlaceholder({
  label = "D&K Elektro-instalace",
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
      role="img"
      aria-label={label}
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
            "radial-gradient(120% 100% at 50% 0%,#000 20%,transparent 100%)",
        }}
      />
      <div className="absolute inset-0 grid place-items-center">
        <span
          aria-hidden
          className="grid place-items-center rounded-full"
          style={{
            width: "clamp(4.5rem, 26%, 7rem)",
            aspectRatio: "1",
            background: dark
              ? "rgba(143,191,172,0.12)"
              : "color-mix(in srgb, var(--color-accent) 12%, transparent)",
            color: dark ? "#8fbfac" : "var(--color-accent-ink)",
            boxShadow: dark
              ? "inset 0 0 0 1px rgba(143,191,172,0.22)"
              : "inset 0 0 0 1px color-mix(in srgb, var(--color-accent) 22%, transparent)",
          }}
        >
          <Icon name={icon} size={40} weight="fill" />
        </span>
      </div>
    </div>
  );
}
