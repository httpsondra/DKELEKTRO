"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { nav, site } from "@/lib/data";
import { Logo } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/Icon";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(251,251,250,0.8)" : "transparent",
        backdropFilter: scrolled ? "saturate(180%) blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "saturate(180%) blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--color-line)"
          : "1px solid transparent",
      }}
    >
      <div
        className="shell flex items-center justify-between gap-6 transition-[height] duration-300 ease-out"
        style={{ height: scrolled ? 58 : 74 }}
      >
        <Link
          href="/"
          aria-label="Domů — D&K Elektro-instalace"
          className="shrink-0 origin-left transition-transform duration-300 ease-out"
          style={{ transform: scrolled ? "scale(0.9)" : "scale(1)" }}
        >
          <Logo tone="dark" />
        </Link>

        <nav aria-label="Hlavní navigace" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="nav-link whitespace-nowrap rounded-[5px] px-3 py-2 text-[0.9rem] text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-[5px] px-3 py-2 text-[0.9rem] font-medium text-[var(--color-ink)] transition-colors hover:text-[var(--color-body)]"
          >
            <Icon name="phone" size={16} />
            {site.phone}
          </a>
          <Link href="/#kontakt" className="btn btn-primary">
            Nezávazná poptávka
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
          className="grid h-11 w-11 place-items-center rounded-[8px] border border-[var(--color-line)] bg-[var(--color-paper)]/70 lg:hidden"
        >
          <span className="relative block h-3.5 w-5">
            <span
              className="absolute left-0 block h-[1.5px] w-5 bg-[var(--color-ink)] transition-all duration-300"
              style={{ top: open ? "6px" : "0", transform: open ? "rotate(45deg)" : "none" }}
            />
            <span
              className="absolute left-0 top-[6px] block h-[1.5px] w-5 bg-[var(--color-ink)] transition-all duration-200"
              style={{ opacity: open ? 0 : 1 }}
            />
            <span
              className="absolute left-0 block h-[1.5px] w-5 bg-[var(--color-ink)] transition-all duration-300"
              style={{ top: open ? "6px" : "12px", transform: open ? "rotate(-45deg)" : "none" }}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu — grid-rows height animation (no layout thrash) */}
      <div
        id="mobile-menu"
        className="grid transition-[grid-template-rows] duration-300 ease-out lg:hidden"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div
          className="overflow-hidden"
          style={{
            background: "rgba(251,251,250,0.97)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderBottom: open ? "1px solid var(--color-line)" : "none",
          }}
        >
          <nav aria-label="Mobilní navigace" className="shell flex flex-col py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-[var(--color-line)] px-1 py-3.5 text-lg text-[var(--color-ink)]"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3 pb-2">
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 px-1 text-lg font-medium"
              >
                <Icon name="phone" size={18} />
                {site.phone}
              </a>
              <Link href="/#kontakt" onClick={() => setOpen(false)} className="btn btn-primary">
                Nezávazná poptávka
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
