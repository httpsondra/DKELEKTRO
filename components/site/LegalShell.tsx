import Link from "next/link";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Icon } from "@/components/ui/Icon";

export function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main id="main">
        <section className="bg-[var(--color-bone)] pb-12 pt-32 sm:pt-40">
          <div className="shell">
            <nav aria-label="Drobečková navigace" className="mb-6">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 font-mono text-[0.72rem] uppercase tracking-[0.08em] text-[var(--color-muted)] hover:text-[var(--color-ink)]"
              >
                <Icon name="arrow" size={14} className="rotate-180" />
                Zpět na úvod
              </Link>
            </nav>
            <h1 className="display text-[clamp(2rem,1.5rem+2.5vw,3.4rem)]">{title}</h1>
            {updated && (
              <p className="mt-4 font-mono text-[0.75rem] text-[var(--color-faint)]">
                Poslední aktualizace: {updated}
              </p>
            )}
          </div>
        </section>

        <section className="section bg-[var(--color-canvas)]">
          <div className="shell">
            <div className="legal-prose">{children}</div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
