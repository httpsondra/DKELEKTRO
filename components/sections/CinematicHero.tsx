"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";

const clamp = (n: number, a = 0, b = 1) => Math.min(Math.max(n, a), b);
const smooth = (t: number) => t * t * (3 - 2 * t);

/**
 * Cinematic, scroll-scrubbed hero. The section is 210vh tall; an inner stage
 * pins for its duration while a single rAF-throttled handler writes CSS custom
 * properties that drive the choreography (transform + clip-path + opacity only).
 *
 * Progressive enhancement: without JS or with prefers-reduced-motion, the wrap
 * stays a normal, fully-visible hero (no data-cine attribute, no pinning).
 */
export function CinematicHero() {
  const wrapRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const stage = stageRef.current;
    if (!wrap || !stage) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    wrap.dataset.cine = "on";
    const s = stage.style;
    let ticking = false;

    const update = () => {
      ticking = false;
      const total = wrap.offsetHeight - window.innerHeight;
      const p = total > 0 ? clamp(-wrap.getBoundingClientRect().top / total) : 0;

      // Phases spread across the whole scroll so the story keeps evolving.
      const eSub = smooth(clamp(p / 0.22)); // supporting copy leaves first
      const eMain = smooth(clamp((p - 0.06) / 0.66)); // type recedes, frame opens
      const eEnd = smooth(clamp((p - 0.72) / 0.28)); // handoff to next section

      s.setProperty("--sub-op", (1 - eSub).toFixed(3));
      s.setProperty("--sub-y", `${(-20 * eSub).toFixed(2)}px`);

      s.setProperty("--title-scale", (1 - 0.34 * eMain).toFixed(3));
      s.setProperty("--title-op", (1 - 0.15 * eEnd).toFixed(3));
      s.setProperty("--content-y", `${(-18 * eMain).toFixed(2)}vh`);

      // The glimpse opens into a near-full-bleed frame.
      s.setProperty("--media-clip", `${(30 * (1 - eMain)).toFixed(2)}%`);
      s.setProperty("--media-scale", (0.86 + 0.22 * eMain).toFixed(3));
      s.setProperty("--media-radius", `${(16 - 12 * eMain).toFixed(1)}px`);

    };

    const onScroll = () => {
      if (document.visibilityState === "visible" && "requestAnimationFrame" in window) {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(update);
        }
      } else {
        update();
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      delete wrap.dataset.cine;
    };
  }, []);

  return (
    <section ref={wrapRef} className="cine-wrap" aria-labelledby="hero-title">
      <div ref={stageRef} className="cine-stage relative">
        <div aria-hidden className="aurora" />
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-texture opacity-50" />

        {/* Visual — a glimpse that opens into a full-bleed frame */}
        <div className="cine-media relative w-full">
          <div className="cine-media-box overflow-hidden rounded-[14px] border border-[var(--color-line)] bg-[var(--color-bone)]">
            <Image
              src="/images/hero-obyvak.jpg"
              alt="Moderní interiér s promyšleným osvětlením — ilustrační foto"
              fill
              priority
              sizes="(min-width: 1280px) 1180px, 92vw"
              className="object-cover"
            />
            {/* Soft halo scrim — keeps the headline legible while it overlaps
                the photo in cinematic mode; invisible weight, no hard box. */}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(70% 64% at 50% 42%, rgba(251,251,250,.42), rgba(251,251,250,.14) 60%, rgba(251,251,250,0) 85%)",
              }}
            />
          </div>
        </div>

        {/* Copy */}
        <div className="cine-content relative mx-auto flex max-w-3xl flex-col items-center pt-32 text-center sm:pt-40">
          <span className="rise eyebrow justify-center" style={{ ["--rise-delay" as string]: "0ms" }}>
            Praha a okolí
          </span>

          <h1
            id="hero-title"
            className="cine-title rise display mt-7 max-w-4xl"
            style={{ ["--rise-delay" as string]: "60ms" }}
          >
            Moderní elektroinstalace pro vaše <em>bydlení.</em>
          </h1>

          <div className="cine-sub flex flex-col items-center">
            <p
              className="rise lead mt-7 max-w-xl"
              style={{ ["--rise-delay" as string]: "120ms" }}
            >
              Elektroinstalace, chytré domácnosti a fotovoltaika — od návrhu až po
              hotové dílo.
            </p>

            <div
              className="rise mt-9 flex flex-col justify-center gap-3 sm:flex-row"
              style={{ ["--rise-delay" as string]: "190ms" }}
            >
              <Link href="/#kontakt" className="btn btn-primary">
                Nezávazná poptávka
                <Icon name="arrow" size={17} />
              </Link>
              <Link href="/#sluzby" className="btn btn-secondary">
                Prohlédnout služby
              </Link>
            </div>

            <span
              className="rise mt-14 flex flex-col items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[var(--color-faint)]"
              style={{ ["--rise-delay" as string]: "300ms" }}
              aria-hidden
            >
              Posuňte níže
              <Icon name="arrow-down" size={15} className="hero-cue" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
