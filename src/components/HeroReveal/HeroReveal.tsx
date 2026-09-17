"use client";

import Link from "next/link";
import { useEffect, useRef, useCallback } from "react";
import styles from "./HeroReveal.module.css";

export default function HeroReveal() {
  const heroRef = useRef<HTMLElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const isInsideRef = useRef(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const isVisibleRef = useRef(true);

  const currX = useRef(50);
  const currY = useRef(50);
  const currR = useRef(0);

  const targetX = useRef(50);
  const targetY = useRef(50);
  const targetR = useRef(0);

  // 2cm ≈ 80px at 96dpi
  const LENS_RADIUS = 80;
  const FEATHER = 28;
  const LERP = 0.14;

  const prefersReducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  const applyStyles = useCallback(() => {
    const hero = heroRef.current;
    const ring = ringRef.current;
    if (!hero || !ring) return;

    const r = currR.current;
    const x = currX.current;
    const y = currY.current;

    hero.style.setProperty("--x", `${x}%`);
    hero.style.setProperty("--y", `${y}%`);
    hero.style.setProperty("--r", `${r}px`);

    const rect = hero.getBoundingClientRect();
    const pxX = (x / 100) * rect.width;
    const pxY = (y / 100) * rect.height;
    const diameter = (r + FEATHER * 0.5) * 2;

    ring.style.transform = `translate(${pxX - diameter / 2}px, ${pxY - diameter / 2}px)`;
    ring.style.width = `${diameter}px`;
    ring.style.height = `${diameter}px`;
    ring.style.opacity = r > 2 ? "1" : "0";
  }, [FEATHER]);

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  function loop() {
    if (!isVisibleRef.current) return;
    const factor = prefersReducedMotion ? 1 : LERP;
    currX.current = lerp(currX.current, targetX.current, factor);
    currY.current = lerp(currY.current, targetY.current, factor);
    currR.current = lerp(currR.current, targetR.current, factor);
    applyStyles();

    const settled =
      Math.abs(currX.current - targetX.current) < 0.05 &&
      Math.abs(currY.current - targetY.current) < 0.05 &&
      Math.abs(currR.current - targetR.current) < 0.1;

    if (!settled) {
      rafRef.current = requestAnimationFrame(loop);
    } else {
      rafRef.current = null;
    }
  }

  const startLoop = useCallback(() => {
    if (rafRef.current === null) {
      rafRef.current = requestAnimationFrame(loop);
    }
  }, [loop]);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting && isInsideRef.current) startLoop();
      },
      { threshold: 0 }
    );
    observerRef.current.observe(hero);

    const handlePointerMove = (e: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      targetX.current = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
      targetY.current = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
      startLoop();
    };

    const handlePointerEnter = () => { isInsideRef.current = true; targetR.current = LENS_RADIUS; startLoop(); };
    const handlePointerLeave = () => { isInsideRef.current = false; targetR.current = 0; startLoop(); };

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      const rect = hero.getBoundingClientRect();
      targetX.current = Math.max(0, Math.min(100, ((touch.clientX - rect.left) / rect.width) * 100));
      targetY.current = Math.max(0, Math.min(100, ((touch.clientY - rect.top) / rect.height) * 100));
      targetR.current = 70;
      startLoop();
    };

    const handleTouchEnd = () => { targetR.current = 0; startLoop(); };

    hero.addEventListener("pointermove", handlePointerMove);
    hero.addEventListener("pointerenter", handlePointerEnter);
    hero.addEventListener("pointerleave", handlePointerLeave);
    hero.addEventListener("touchmove", handleTouchMove, { passive: true });
    hero.addEventListener("touchend", handleTouchEnd);

    const toggleBtn = document.getElementById("heroRevealToggle");
    let showingStructure = false;
    toggleBtn?.addEventListener("click", () => {
      showingStructure = !showingStructure;
      hero.style.setProperty("--r", showingStructure ? "9999px" : "0px");
      hero.style.setProperty("--feather", showingStructure ? "0px" : `${FEATHER}px`);
      if (toggleBtn) toggleBtn.textContent = showingStructure ? "Show Finished Building" : "Show Structure Drawing";
    });

    return () => {
      hero.removeEventListener("pointermove", handlePointerMove);
      hero.removeEventListener("pointerenter", handlePointerEnter);
      hero.removeEventListener("pointerleave", handlePointerLeave);
      hero.removeEventListener("touchmove", handleTouchMove);
      hero.removeEventListener("touchend", handleTouchEnd);
      observerRef.current?.disconnect();
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [LENS_RADIUS, FEATHER, startLoop]);

  return (
    <section
      ref={heroRef}
      className={styles.hero}
      aria-label="From structural design to completed building"
      style={{ "--x": "50%", "--y": "50%", "--r": "0px", "--feather": `${FEATHER}px` } as React.CSSProperties}
    >
      {/* Bottom layer: blueprint */}
      <picture className={`${styles.layer} ${styles.layerStructure}`}>
        <source media="(max-width: 768px)" srcSet="/assets/images/hero/building-structure-mobile.webp" />
        <source srcSet="/assets/images/hero/building-structure.webp" type="image/webp" />
        <img src="/assets/images/hero/building-structure.jpg" alt="Steel structure engineering drawing" draggable={false} />
      </picture>

      {/* Top layer: finished building (masked) */}
      <picture className={`${styles.layer} ${styles.layerFinal}`}>
        <source media="(max-width: 768px)" srcSet="/assets/images/hero/building-final-mobile.webp" />
        <source srcSet="/assets/images/hero/building-final.webp" type="image/webp" />
        <img src="/assets/images/hero/building-final.jpg" alt="Completed modern commercial building" fetchPriority="high" draggable={false} />
      </picture>

      {/* Lens ring */}
      <div ref={ringRef} className={styles.ring} aria-hidden="true">
        <span className={styles.ringTick} data-pos="top" />
        <span className={styles.ringTick} data-pos="right" />
        <span className={styles.ringTick} data-pos="bottom" />
        <span className={styles.ringTick} data-pos="left" />
        <span className={styles.ringLabel}>STRUCTURE</span>
      </div>

      {/* Dark scrim on left side only */}
      <div className={styles.scrim} aria-hidden="true" />

      {/* Text pinned to left edge */}
      <div className={styles.content}>
        <p className={styles.eyebrow}>Engineering &amp; Construction</p>
        <h1 className={styles.headline}>
          Homes and<br />buildings,<br />engineered<br />to last.
        </h1>
        <p className={styles.sub}>
          Structural engineers who design and build villas, homes and commercial spaces across Hyderabad.
        </p>
        <div className={styles.actions}>
          <Link href="/get-a-quote" className={styles.ctaButton}>Book a consultation</Link>
          <Link href="/projects" className={styles.secondaryButton}>See our projects</Link>
        </div>
        <button id="heroRevealToggle" className={styles.toggleBtn}>Show Structure Drawing</button>
      </div>
    </section>
  );
}
