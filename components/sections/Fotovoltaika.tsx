import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";

const points = [
  "Čistá a levná energie ze slunce",
  "Nižší účty a menší závislost na dodavatelích",
  "Návrh dle reálné spotřeby domácnosti",
  "Realizace s partnerem green energy solution s.r.o.",
];

export function Fotovoltaika() {
  return (
    <section id="fotovoltaika" className="section" aria-labelledby="fve-title">
      <div className="shell">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <Reveal>
              <h2 id="fve-title" className="h2">
                Využijte střechu domu a <em>ušetřete na energiích.</em>
              </h2>
            </Reveal>
            <Reveal delay={70}>
              <p className="measure mt-5 text-[var(--color-muted)]">
                S fotovoltaickými panely získáte čistou energii ze slunce —
                šetrnou k životnímu prostředí i k vaší peněžence. Snížíte náklady
                na elektřinu a začnete investovat do budoucnosti.
              </p>
            </Reveal>
            <Reveal delay={170}>
              <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[0.92rem] text-[var(--color-body)]">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-[5px] border border-[var(--color-line)] bg-[var(--color-paper)] text-[var(--color-ink)]">
                      <Icon name="check" size={12} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={220}>
              <Link href="/sluzby/fotovoltaika" className="btn btn-primary mt-9">
                Více o fotovoltaice
                <Icon name="arrow" size={17} />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={120} className="order-1 lg:order-2">
            <MediaPlaceholder
              ratio="1 / 1"
              icon="solar"
              label="Fotovoltaické panely na střeše — ilustrační foto"
              src="/images/sluzba-fotovoltaika.jpg"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
