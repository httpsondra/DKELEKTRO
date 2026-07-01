"use client";

import { useState } from "react";
import { faqs } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section" aria-labelledby="faq-title">
      <div className="shell grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <Reveal>
            <h2 id="faq-title" className="h2">
              Na co se <em>nejčastěji</em> ptáte.
            </h2>
          </Reveal>
          <Reveal delay={70}>
            <p className="measure mt-5 text-[var(--color-muted)]">
              Nenašli jste odpověď? Zavolejte nebo nám napište — rádi poradíme.
            </p>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <ul className="border-t border-[var(--color-line)]">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q} className="border-b border-[var(--color-line)]">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      className="group/q flex w-full items-center justify-between gap-4 py-5 text-left transition-[padding] duration-300 hover:pl-2"
                    >
                      <span
                        className="text-[1.02rem] font-medium transition-colors duration-200"
                        style={{ color: isOpen ? "var(--color-accent-ink)" : "var(--color-ink)" }}
                      >
                        {f.q}
                      </span>
                      <span
                        className="grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-colors duration-200 group-hover/q:text-[var(--color-accent-ink)]"
                        style={{
                          color: isOpen ? "var(--color-accent-ink)" : "var(--color-muted)",
                          borderColor: isOpen
                            ? "color-mix(in srgb, var(--color-accent) 45%, var(--color-line))"
                            : "var(--color-line)",
                        }}
                        aria-hidden
                      >
                        <Icon name={isOpen ? "minus" : "plus"} size={16} />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    className="grid transition-all duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[62ch] pb-6 pr-8 text-[0.96rem] leading-relaxed text-[var(--color-muted)]">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
