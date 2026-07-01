import Link from "next/link";
import { nav, services, site, legalPages } from "@/lib/data";
import { Logo } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/Icon";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-canvas)]" aria-labelledby="footer-title">
      <h2 id="footer-title" className="sr-only">
        Patička
      </h2>
      <div className="shell py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <Logo tone="dark" />
            <p className="mt-5 max-w-xs text-[0.9rem] leading-relaxed text-[var(--color-muted)]">
              Moderní elektroinstalace, chytré domácnosti a fotovoltaika.
              Efektivní, spolehlivé a bezpečné — od projektu po realizaci.
            </p>
            <a
              href={site.phoneHref}
              className="mt-6 inline-flex items-center gap-2 text-[1.02rem] font-medium text-[var(--color-ink)]"
            >
              <Icon name="phone" size={17} />
              {site.phone}
            </a>
          </div>

          <nav aria-label="Patička — sekce">
            <p className="font-mono text-[0.66rem] font-medium uppercase tracking-[0.12em] text-[var(--color-faint)]">
              Navigace
            </p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[0.9rem] text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Patička — služby">
            <p className="font-mono text-[0.66rem] font-medium uppercase tracking-[0.12em] text-[var(--color-faint)]">
              Služby
            </p>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/sluzby/${s.slug}`} className="text-[0.9rem] text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-[0.66rem] font-medium uppercase tracking-[0.12em] text-[var(--color-faint)]">
              Kontakt
            </p>
            <ul className="mt-4 space-y-2.5 text-[0.9rem] text-[var(--color-muted)]">
              <li>
                <a href={`mailto:${site.email}`} className="break-all hover:text-[var(--color-ink)]">
                  {site.email}
                </a>
              </li>
              <li>{site.address.street}</li>
              <li>
                {site.address.zip} {site.address.city}
              </li>
              <li className="pt-1 font-mono text-[0.72rem] text-[var(--color-faint)]">
                IČ {site.ico} · DIČ {site.dic}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-[var(--color-line)] pt-7 font-mono text-[0.72rem] uppercase tracking-[0.06em] text-[var(--color-faint)] sm:flex-row sm:items-center">
          <p>© {year} {site.legalName}</p>
          <nav aria-label="Právní informace">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {legalPages.map((p) => (
                <li key={p.slug}>
                  <Link href={`/${p.slug}`} className="transition-colors hover:text-[var(--color-ink)]">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
