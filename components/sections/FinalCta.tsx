import Link from "next/link";
import { site } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  return (
    <section className="surface-charcoal on-charcoal section" aria-labelledby="cta-title">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 80% at 50% 8%, rgba(46,82,69,0.35), transparent 70%)",
        }}
      />
      <div aria-hidden className="absolute inset-0 opacity-[0.5]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(80% 60% at 50% 40%,#000,transparent)",
          }}
        />
      </div>
      <div className="shell relative text-center">
        <Reveal>
          <h2
            id="cta-title"
            className="display mx-auto max-w-3xl text-[clamp(2.2rem,1.4rem+3vw,3.8rem)]"
          >
            Plánujete elektroinstalaci, chytrou domácnost nebo{" "}
            <em>fotovoltaiku?</em>
          </h2>
        </Reveal>
        <Reveal delay={130}>
          <p className="mx-auto mt-6 max-w-xl text-[1.05rem] leading-relaxed text-white/60">
            Napište nám svou představu. Ozveme se s nezávaznou nabídkou a férovým
            řešením na míru.
          </p>
        </Reveal>
        <Reveal delay={190}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/#kontakt"
              className="btn bg-white text-[var(--color-charcoal)] hover:bg-white/90"
            >
              Nezávazná poptávka
              <Icon name="arrow" size={17} />
            </Link>
            <a href={site.phoneHref} className="btn btn-secondary">
              <Icon name="phone" size={17} />
              {site.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
