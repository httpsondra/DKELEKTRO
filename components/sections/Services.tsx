import Link from "next/link";
import { services } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function Services() {
  return (
    <section id="sluzby" className="section" aria-labelledby="services-title">
      <div className="shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <h2 id="services-title" className="h2">
                Snadno, rychle a <em>dle vašich představ.</em>
              </h2>
            </Reveal>
            <Reveal delay={70}>
              <p className="measure mt-5 text-[var(--color-muted)]">
                Vše pro vás na míru — od kompletní elektroinstalace přes chytrou
                domácnost a fotovoltaiku až po revize, zabezpečení a hromosvody.
              </p>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <Link
              href="/#kontakt"
              className="link-underline text-[0.92rem] font-medium text-[var(--color-ink)]"
            >
              Nevíte si rady? Poradíme vám
              <Icon name="arrow" size={16} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 60}>
              <Link
                href={`/sluzby/${s.slug}`}
                className="group card card-hover relative flex h-full flex-col p-8"
              >
                <span className="tile h-11 w-11">
                  <Icon name={s.icon} size={22} />
                </span>
                <h3 className="mt-5 text-[1.05rem] font-semibold text-[var(--color-ink)]">
                  {s.title}
                </h3>
                <p className="mt-2 flex-1 text-[0.92rem] leading-relaxed text-[var(--color-muted)]">
                  {s.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-[var(--color-ink)]">
                  Detail služby
                  <Icon
                    name="arrow-up-right"
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
