import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, site } from "@/lib/data";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Icon } from "@/components/ui/Icon";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { JsonLd, breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.excerpt,
    alternates: { canonical: `/sluzby/${s.slug}` },
    openGraph: {
      title: `${s.title} — ${site.shortName}`,
      description: s.excerpt,
      url: `${site.domain}/sluzby/${s.slug}`,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();

  const others = services.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd(s.slug)!,
          breadcrumbJsonLd([
            { name: "Domů", url: site.domain },
            { name: "Služby", url: `${site.domain}/#sluzby` },
            { name: s.title, url: `${site.domain}/sluzby/${s.slug}` },
          ]),
        ]}
      />
      <Header />
      <main id="main">
        <article>
          {/* Hero */}
          <section className="relative overflow-hidden pb-16 pt-32 sm:pt-40">
            <div aria-hidden className="pointer-events-none absolute inset-0 grid-texture opacity-60" />
            <div className="shell relative">
              <nav aria-label="Drobečková navigace" className="mb-8">
                <ol className="flex flex-wrap items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.08em] text-[var(--color-muted)]">
                  <li>
                    <Link href="/" className="hover:text-[var(--color-ink)]">
                      Domů
                    </Link>
                  </li>
                  <li aria-hidden>/</li>
                  <li>
                    <Link href="/#sluzby" className="hover:text-[var(--color-ink)]">
                      Služby
                    </Link>
                  </li>
                  <li aria-hidden>/</li>
                  <li className="text-[var(--color-ink)]" aria-current="page">
                    {s.title}
                  </li>
                </ol>
              </nav>

              <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="max-w-2xl">
                  <span className="grid h-[52px] w-[52px] place-items-center rounded-[10px] border border-[var(--color-line)] bg-[var(--color-paper)] text-[var(--color-ink)]">
                    <Icon name={s.icon} size={26} />
                  </span>
                  <h1 className="display mt-6 text-[clamp(2.3rem,1.6rem+3vw,3.8rem)]">
                    {s.title}
                  </h1>
                  <p className="lead mt-5 max-w-[46ch]">{s.excerpt}</p>
                  <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                    <Link href="/#kontakt" className="btn btn-primary">
                      Nezávazná poptávka
                      <Icon name="arrow" size={17} />
                    </Link>
                    <a href={site.phoneHref} className="btn btn-secondary">
                      <Icon name="phone" size={17} />
                      {site.phone}
                    </a>
                  </div>
                </div>
                <MediaPlaceholder ratio="4 / 3" icon={s.icon} label="Prostor pro fotografii realizace" />
              </div>
            </div>
          </section>

          {/* Body */}
          <section className="section border-t border-[var(--color-line)] bg-[var(--color-canvas)]">
            <div className="shell grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
              <div>
                <h2 className="h2 text-[1.9rem]">O službě</h2>
                <p className="measure mt-5 text-[1.05rem] leading-relaxed text-[var(--color-muted)]">
                  {s.detail}
                </p>

                <h3 className="mt-10 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-[var(--color-faint)]">
                  Co to zahrnuje
                </h3>
                <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {s.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-3 rounded-[10px] border border-[var(--color-line)] bg-[var(--color-bone)] p-4 text-[0.94rem] text-[var(--color-body)]"
                    >
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-[5px] border border-[var(--color-line)] bg-[var(--color-paper)] text-[var(--color-ink)]">
                        <Icon name="check" size={12} />
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Aside CTA */}
              <aside className="lg:pl-4">
                <div className="sticky top-24 rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-paper)] p-7">
                  <h3 className="h3-serif text-[1.3rem] text-[var(--color-ink)]">
                    Zajímá vás tato služba?
                  </h3>
                  <p className="mt-2 text-[0.94rem] leading-relaxed text-[var(--color-muted)]">
                    Ozvěte se nám. Probereme vaši představu a připravíme férovou
                    nabídku na míru.
                  </p>
                  <Link href="/#kontakt" className="btn btn-primary mt-5 w-full">
                    Poptat službu
                    <Icon name="arrow" size={17} />
                  </Link>
                  <a
                    href={site.phoneHref}
                    className="mt-3 flex items-center justify-center gap-2 text-[0.94rem] font-medium text-[var(--color-ink)]"
                  >
                    <Icon name="phone" size={16} />
                    {site.phone}
                  </a>
                </div>
              </aside>
            </div>
          </section>

          {/* Other services */}
          <section className="section-tight border-t border-[var(--color-line)] bg-[var(--color-bone)]">
            <div className="shell">
              <div className="flex items-end justify-between gap-4">
                <h2 className="h2 text-[1.7rem]">Další služby</h2>
                <Link
                  href="/#sluzby"
                  className="inline-flex items-center gap-1.5 text-[0.9rem] font-medium text-[var(--color-ink)] underline-offset-4 hover:underline"
                >
                  Všechny služby
                  <Icon name="arrow" size={16} />
                </Link>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {others.map((o) => (
                  <Link key={o.slug} href={`/sluzby/${o.slug}`} className="group card card-hover p-6">
                    <span className="tile h-11 w-11">
                      <Icon name={o.icon} size={21} />
                    </span>
                    <h3 className="mt-4 text-[1.02rem] font-semibold text-[var(--color-ink)]">
                      {o.title}
                    </h3>
                    <p className="mt-2 text-[0.88rem] leading-relaxed text-[var(--color-muted)]">
                      {o.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
