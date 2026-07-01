"use client";

import { useEffect, useRef } from "react";

const FRAME_COUNT = 60;
const frameSrc = (i: number) =>
  `/cable_frames/frame_${String(i).padStart(3, "0")}.webp`;

/**
 * Scroll-scrubbed image sequence: 60 frames extracted from the cable clip are
 * preloaded and drawn to a fixed full-screen canvas based on scroll progress.
 * This is the reliable, jank-free version of "scrub a video" — no media seeks,
 * smooth on every browser. A warm scrim (in globals.css) sits over it so the
 * paper palette and text stay readable. Static mid-frame under reduced motion.
 */
export function CableFrames() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const images: HTMLImageElement[] = [];
    let current = -1;
    let target = 0; // 0..1 scroll progress
    let cur = 0;
    let running = false;
    let raf = 0;

    const progress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      return max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
    };

    const drawCover = (img: HTMLImageElement) => {
      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;
      if (!iw || !ih) return;
      const scale = Math.max(cw / iw, ch / ih);
      const w = iw * scale;
      const h = ih * scale;
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h);
    };

    const draw = (rawIdx: number, force = false) => {
      const idx = Math.min(FRAME_COUNT - 1, Math.max(0, Math.round(rawIdx)));
      if (idx === current && !force) return;
      const img = images[idx];
      if (img?.complete && img.naturalWidth) {
        drawCover(img);
        current = idx;
        return;
      }
      // Fall back to the nearest already-loaded frame.
      for (let d = 1; d < FRAME_COUNT; d++) {
        const a = images[idx - d];
        if (a?.complete && a.naturalWidth) {
          drawCover(a);
          current = idx;
          return;
        }
        const b = images[idx + d];
        if (b?.complete && b.naturalWidth) {
          drawCover(b);
          current = idx;
          return;
        }
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(window.innerWidth * dpr));
      canvas.height = Math.max(1, Math.floor(window.innerHeight * dpr));
      draw(current >= 0 ? current : cur * (FRAME_COUNT - 1), true);
    };

    const tick = () => {
      cur += (target - cur) * 0.2;
      if (Math.abs(target - cur) < 0.0008) {
        cur = target;
        running = false;
      }
      draw(cur * (FRAME_COUNT - 1));
      if (running) raf = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      target = progress();
      if (!running && !reduce) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };

    // Preload the sequence.
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.decoding = "async";
      img.src = frameSrc(i);
      img.onload = () => {
        // Paint the first available frame immediately so there's no blank flash.
        if (current < 0) draw(reduce ? FRAME_COUNT / 2 : cur * (FRAME_COUNT - 1), true);
      };
      images[i] = img;
    }

    cur = target = reduce ? 0.5 : progress();
    resize();
    window.addEventListener("resize", resize, { passive: true });
    if (!reduce) window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className="cable-canvas" />;
}
