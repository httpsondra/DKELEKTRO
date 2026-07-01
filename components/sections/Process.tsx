import { processSteps } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Process() {
  return (
    <section id="postup" className="section" aria-labelledby="process-title">
      <div className="shell">
        <div className="max-w-2xl">
          <Reveal>
            <h2 id="process-title" className="h2">
              Od prvního telefonu po <em>hotové dílo.</em>
            </h2>
          </Reveal>
          <Reveal delay={70}>
            <p className="measure mt-5 text-[var(--color-muted)]">
              Jednoduchý a srozumitelný postup. Víte, co se děje v každém kroku.
            </p>
          </Reveal>
        </div>

        <ol className="relative mt-14 grid grid-cols-1 border-t border-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-5">
          {/* Evergreen spine draws left→right as the timeline scrolls in */}
          <span aria-hidden className="process-spine" />
          {processSteps.map((step, i) => (
            <Reveal
              as="li"
              key={step.n}
              delay={i * 80}
              className="relative border-[var(--color-line)] px-1 py-8 lg:border-l lg:px-6 [&:not(:last-child)]:border-b lg:[&:not(:last-child)]:border-b-0 lg:[&:first-child]:border-l-0"
            >
              <span
                aria-hidden
                className="absolute -top-px left-0 h-px w-10 lg:w-14"
                style={{ background: "var(--color-ink)" }}
              />
              <span className="numeral text-[1.7rem]">{step.n}</span>
              <h3 className="mt-4 text-[1.05rem] font-semibold text-[var(--color-ink)]">
                {step.title}
              </h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-[var(--color-muted)]">
                {step.text}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
