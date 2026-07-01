import Link from "next/link";
import { smartHomePackages } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

const controls = [
  { label: "Teplota", value: "21°C", tag: "Obývák" },
  { label: "Osvětlení", value: "4 scény", tag: "Zap" },
  { label: "Zabezpečení", value: "Střeženo", tag: "Aktivní" },
  { label: "Fotovoltaika", value: "2,4 kW", tag: "Výroba" },
];

export function SmartHome() {
  return (
    <section id="chytre-domacnosti" className="section" aria-labelledby="smart-title">
      <div className="shell">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Faux-OS window mockup */}
          <Reveal>
            <div className="window">
              <div className="window-bar">
                <span className="window-dot" />
                <span className="window-dot" />
                <span className="window-dot" />
                <span className="ml-3 font-mono text-[0.66rem] uppercase tracking-[0.1em] text-[var(--color-faint)]">
                  Chytrá domácnost · Panel
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <p className="h3-serif text-[1.15rem] text-[var(--color-ink)]">Domů</p>
                  <span className="tag tag-green">
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ background: "var(--color-pastel-green-fg)" }}
                    />
                    Online
                  </span>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {controls.map((c) => (
                    <div key={c.label} className="rounded-[10px] border border-[var(--color-line)] bg-[var(--color-surface)] p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[0.62rem] uppercase tracking-[0.1em] text-[var(--color-faint)]">
                          {c.label}
                        </span>
                        <span className="font-mono text-[0.58rem] uppercase tracking-[0.08em] text-[var(--color-muted)]">
                          {c.tag}
                        </span>
                      </div>
                      <p className="tnum mt-3 text-[1.35rem] font-semibold tracking-tight text-[var(--color-ink)]">
                        {c.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 id="smart-title" className="h2">
                Chytrá domácnost, která vám <em>zjednoduší život.</em>
              </h2>
            </Reveal>
            <Reveal delay={70}>
              <p className="measure mt-5 text-[var(--color-muted)]">
                Nainstalujeme a propojíme vaši domácnost — osvětlení, termostaty,
                zabezpečení i hlasového asistenta. Naši technici zvládnou Wi-Fi
                sítě, propojení zařízení i poradenství s výběrem připojení.
              </p>
            </Reveal>
            <Reveal delay={170}>
              <Link href="/sluzby/chytre-domacnosti" className="btn btn-primary mt-8">
                Více o chytrých domácnostech
                <Icon name="arrow" size={17} />
              </Link>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {smartHomePackages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 80}>
              <div
                className="card card-hover flex h-full flex-col p-8"
                style={
                  pkg.featured
                    ? { borderColor: "var(--color-pastel-green-fg)" }
                    : undefined
                }
              >
                <div className="flex items-center justify-between">
                  <Icon name="smart-home" size={24} className="text-[var(--color-ink)]" weight="fill" />
                  {pkg.featured && <span className="tag tag-green">Doporučeno</span>}
                </div>
                <h3 className="mt-5 text-[1.1rem] font-semibold text-[var(--color-ink)]">
                  {pkg.name}
                </h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-[var(--color-muted)]">
                  {pkg.text}
                </p>
                <ul className="mt-5 space-y-2.5 border-t border-[var(--color-line)] pt-5">
                  {pkg.items.map((it) => (
                    <li key={it} className="flex items-center gap-2.5 text-[0.88rem] text-[var(--color-body)]">
                      <Icon name="check" size={14} className="text-[var(--color-pastel-green-fg)]" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
