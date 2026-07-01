/**
 * Wordmark — high-contrast serif monogram with an italic evergreen ampersand
 * as the signature detail. Theme-aware; the raster logo stays in /public for
 * OG/reference only.
 */
export function Logo({
  tone = "dark",
  className = "",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const main = tone === "light" ? "#f5f2ea" : "var(--color-ink)";
  const sub =
    tone === "light" ? "rgba(245,242,234,0.5)" : "var(--color-muted)";
  const amp = tone === "light" ? "#7fae9c" : "var(--color-accent)";
  return (
    <span
      className={`inline-flex flex-col leading-none ${className}`}
      aria-label="D&K Elektro-instalace"
    >
      <span
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "1.55rem",
          fontWeight: 600,
          letterSpacing: "-0.03em",
          color: main,
        }}
      >
        D<span style={{ color: amp }}>&amp;</span>K
      </span>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.5rem",
          letterSpacing: "0.28em",
          fontWeight: 500,
          marginTop: "4px",
          color: sub,
        }}
      >
        ELEKTRO-INSTALACE
      </span>
    </span>
  );
}
