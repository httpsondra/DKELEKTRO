import { partners } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Partners() {
  const slots = [...partners, { name: "Vaše značka", note: "", placeholder: true }];
  return (
    <section className="section-tight" aria-label="Partneři a spolupráce">
      <div className="shell">
        <Reveal className="text-center">
          <p className="text-[0.95rem] text-[var(--color-muted)]">
            Na vybraných řešeních spolupracujeme s ověřenými partnery.
          </p>
        </Reveal>
        <div className="mt-9 grid grid-cols-1 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {slots.map((p, i) => {
            const placeholder = (p as { placeholder?: boolean }).placeholder;
            return (
              <Reveal
                key={p.name}
                delay={i * 80}
                className="flex flex-col items-center justify-center gap-1 px-6 py-9 text-center"
              >
                <span
                  className="h3-serif text-[1.25rem]"
                  style={{ color: placeholder ? "var(--color-faint)" : "var(--color-ink)" }}
                >
                  {p.name}
                </span>
                {p.note && (
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-[var(--color-muted)]">
                    {p.note}
                  </span>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
