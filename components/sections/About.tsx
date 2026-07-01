import Link from "next/link";
import { site } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";

export function About() {
  return (
    <section id="o-nas" className="section" aria-labelledby="about-title">
      <div className="shell">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="grid grid-cols-2 gap-4">
            <Reveal>
              <MediaPlaceholder
                ratio="3 / 4"
                icon="experience"
                label="Foto: Vlastimil Dufek"
                className="translate-y-4"
              />
            </Reveal>
            <Reveal delay={120}>
              <MediaPlaceholder ratio="3 / 4" icon="handshake" label="Foto: náš tým v akci" />
            </Reveal>
          </div>

          <div>
            <Reveal>
              <h2 id="about-title" className="h2">
                Lidé, kterým na vašem domově <em>záleží.</em>
              </h2>
            </Reveal>
            <Reveal delay={70}>
              <div className="measure mt-5 space-y-4 text-[1rem] leading-relaxed text-[var(--color-muted)]">
                <p>
                  Za D&amp;K Elektro-instalace stojí {site.owner} a tým, který
                  spojuje řemeslnou poctivost s moderními technologiemi. Děláme
                  drobné i kompletní elektroinstalace a stále se posouváme dál —
                  k chytrým domácnostem a fotovoltaice.
                </p>
                <p>
                  Pracujeme férově, mluvíme srozumitelně a po sobě uklidíme —
                  instalace dokončujeme včetně zednického začištění. Žádné
                  překvapení na konci, jen práce odvedená pořádně.
                </p>
              </div>
            </Reveal>

            <Reveal delay={170}>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-3 font-medium text-[var(--color-ink)]"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-[8px] border border-[var(--color-line)] bg-[var(--color-paper)]">
                    <Icon name="phone" size={18} />
                  </span>
                  {site.phone}
                </a>
                <Link
                  href="/#realizace"
                  className="link-underline text-[0.92rem] font-medium text-[var(--color-ink)]"
                >
                  Naše realizace
                  <Icon name="arrow" size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
