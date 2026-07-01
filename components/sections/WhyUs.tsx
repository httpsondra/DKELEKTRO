import { whyUs } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

const pastels = [
  { bg: "var(--color-pastel-green)", fg: "var(--color-pastel-green-fg)" },
  { bg: "var(--color-pastel-blue)", fg: "var(--color-pastel-blue-fg)" },
  { bg: "var(--color-pastel-yellow)", fg: "var(--color-pastel-yellow-fg)" },
  { bg: "var(--color-pastel-red)", fg: "var(--color-pastel-red-fg)" },
];

export function WhyUs() {
  return (
    <section id="proc-my" className="section" aria-labelledby="why-title">
      <div className="shell">
        <div className="max-w-3xl">
          <Reveal>
            <h2 id="why-title" className="h2">
              Elektrikáři s <em>férovým jednáním</em> a dlouholetými zkušenostmi.
            </h2>
          </Reveal>
          <Reveal delay={70}>
            <p className="measure mt-5 text-[var(--color-muted)]">
              Drobné i kompletní elektroinstalace zvládáme od návrhu po předání —
              čistě, bezpečně a s ohledem na detail. Dnes se navíc soustředíme na
              chytré domácnosti a fotovoltaiku.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, i) => {
            const p = pastels[i % pastels.length];
            return (
              <Reveal key={item.title} delay={(i % 3) * 70} className="border-t border-[var(--color-line)] pt-6">
                <span
                  className="grid h-11 w-11 place-items-center rounded-[8px]"
                  style={{ background: p.bg, color: p.fg }}
                >
                  <Icon name={item.icon} size={22} weight="fill" />
                </span>
                <h3 className="mt-5 text-[1.05rem] font-semibold text-[var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-[38ch] text-[0.94rem] leading-relaxed text-[var(--color-muted)]">
                  {item.text}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
