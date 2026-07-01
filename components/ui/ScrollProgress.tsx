"use client";

import { useEffect, useRef } from "react";

/**
 * Hairline reading-progress bar pinned to the very top. Transform-only
 * (scaleX), rAF-throttled with a synchronous fallback for background tabs.
 */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;
    const update = () => {
      ticking = false;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
      el.style.transform = `scaleX(${p})`;
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
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px]"
      style={{ background: "transparent" }}
    >
      <div
        ref={ref}
        className="h-full w-full origin-left"
        style={{
          transform: "scaleX(0)",
          background:
            "linear-gradient(90deg, var(--color-accent), var(--color-accent-ink))",
        }}
      />
    </div>
  );
}
