"use client";

import { useState } from "react";
import Image from "next/image";
import { projects, projectFilters } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

const iconFor: Record<string, string> = {
  Elektroinstalace: "plug",
  Fotovoltaika: "solar",
  "Chytré domácnosti": "smart-home",
};
const tagFor: Record<string, string> = {
  Elektroinstalace: "tag-blue",
  Fotovoltaika: "tag-yellow",
  "Chytré domácnosti": "tag-green",
};

export function Projects() {
  const [active, setActive] = useState<(typeof projectFilters)[number]>("Vše");
  const visible = projects.filter((p) => active === "Vše" || p.category === active);

  return (
    <section id="realizace" className="section" aria-labelledby="projects-title">
      <div className="shell">
        <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <h2 id="projects-title" className="h2">
                Máme za sebou <em>stovky</em> úspěšných realizací.
              </h2>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div role="tablist" aria-label="Filtr realizací" className="flex flex-wrap gap-1">
              {projectFilters.map((f) => {
                const on = active === f;
                return (
                  <button
                    key={f}
                    role="tab"
                    aria-selected={on}
                    onClick={() => setActive(f)}
                    className="rounded-[5px] px-3 py-1.5 font-mono text-[0.72rem] uppercase tracking-[0.08em] transition-colors"
                    style={{
                      background: on ? "var(--color-charcoal)" : "transparent",
                      color: on ? "#fff" : "var(--color-muted)",
                      border: "1px solid",
                      borderColor: on ? "var(--color-charcoal)" : "var(--color-line)",
                    }}
                  >
                    {f}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 70}>
              <article className="group card card-hover overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-bone)]">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={`${p.title} — ilustrační foto`}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <>
                      <div
                        aria-hidden
                        className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.03]"
                        style={{
                          backgroundImage:
                            "linear-gradient(rgba(0,0,0,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.03) 1px,transparent 1px)",
                          backgroundSize: "34px 34px",
                        }}
                      />
                      <span className="absolute inset-0 grid place-items-center text-[var(--color-faint)]">
                        <Icon name={iconFor[p.category]} size={36} />
                      </span>
                    </>
                  )}
                  <span className={`tag ${tagFor[p.category]} absolute left-4 top-4`}>
                    {p.category}
                  </span>
                </div>
                <div className="border-t border-[var(--color-line)] p-6">
                  <h3 className="text-[1.05rem] font-semibold text-[var(--color-ink)]">
                    {p.title}
                  </h3>
                  {p.location && (
                    <p className="mt-1 inline-flex items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-[0.08em] text-[var(--color-faint)]">
                      <Icon name="pin" size={13} />
                      {p.location}
                    </p>
                  )}
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-[var(--color-muted)]">
                    {p.excerpt}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal delay={visible.length * 40}>
            <div className="flex h-full min-h-[16rem] flex-col items-center justify-center gap-3 rounded-[var(--radius-card)] border border-dashed border-[var(--color-line)] p-6 text-center">
              <span className="grid h-10 w-10 place-items-center rounded-[8px] border border-[var(--color-line)] bg-[var(--color-paper)] text-[var(--color-muted)]">
                <Icon name="plus" size={18} />
              </span>
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.08em] text-[var(--color-faint)]">
                Připravujeme další fotogalerii
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
