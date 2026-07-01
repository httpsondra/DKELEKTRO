import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Honest empty-state, editorial. We never invent reviews — these are
 * prepared slots ready for real customer feedback.
 */
export function Testimonials() {
  const slots = [0, 1, 2];

  return (
    <section id="reference" className="section" aria-labelledby="testi-title">
      <div className="shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <h2 id="testi-title" className="h2">
                Sbíráme hodnocení od <em>spokojených zákazníků.</em>
              </h2>
            </Reveal>
            <Reveal delay={70}>
              <p className="measure mt-5 text-[var(--color-muted)]">
                Brzy zde najdete ověřené recenze. Byli jste u nás spokojeni?
                Budeme rádi za vaše hodnocení.
              </p>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <Link href="/#kontakt" className="btn btn-secondary">
              Napsat referenci
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {slots.map((i) => (
            <Reveal key={i} delay={i * 80}>
              <figure className="card flex h-full flex-col p-8">
                <Icon name="quote" size={26} className="text-[var(--color-faint)]" weight="fill" />
                <blockquote className="mt-4 flex-1 text-[1rem] leading-relaxed text-[var(--color-faint)]">
                  Místo pro recenzi spokojeného zákazníka.
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-[var(--color-line)] pt-5">
                  <span className="h-9 w-9 rounded-full border border-[var(--color-line)] bg-[var(--color-bone)]" aria-hidden />
                  <span className="flex flex-col">
                    <span className="text-[0.88rem] font-medium text-[var(--color-muted)]">
                      Jméno zákazníka
                    </span>
                    <span className="font-mono text-[0.66rem] uppercase tracking-[0.08em] text-[var(--color-faint)]">
                      Hodnocení Google
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
