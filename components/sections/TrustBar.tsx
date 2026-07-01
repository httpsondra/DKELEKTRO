import { trust } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function TrustBar() {
  return (
    <section aria-label="Proč nám důvěřovat" className="border-y border-[var(--color-line)]">
      <div className="shell grid grid-cols-2 sm:grid-cols-4">
        {trust.map((t, i) => (
          <Reveal
            key={t.label}
            delay={i * 70}
            className="flex flex-col items-center justify-center border-[var(--color-line)] px-4 py-9 text-center [&:not(:first-child)]:border-l sm:py-11"
          >
            <span className="h3-serif text-[1.9rem] leading-none text-[var(--color-ink)] sm:text-[2.4rem]">
              {t.value}
            </span>
            <span className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.1em] leading-snug text-[var(--color-muted)]">
              {t.label}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
