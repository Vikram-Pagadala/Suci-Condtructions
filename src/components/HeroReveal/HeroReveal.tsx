"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useCallback, useState } from "react";
import styles from "./HeroReveal.module.css";

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export default function HeroReveal() {
  const heroRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const isInsideRef = useRef(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const isVisibleRef = useRef(true);
  const [isShowingFinished, setIsShowingFinished] = useState(false);

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

    const r = currR.current > 0.1 ? currR.current : 0;
    const x = currX.current;
    const y = currY.current;

    hero.style.setProperty("--x", `${x}%`);
    hero.style.setProperty("--y", `${y}%`);
    hero.style.setProperty("--r", `${r}px`);
    hero.style.setProperty("--feather", r > 0 ? `${FEATHER}px` : "0px");

    const rect = hero.getBoundingClientRect();
    const pxX = (x / 100) * rect.width;
    const pxY = (y / 100) * rect.height;
    const diameter = (r + FEATHER * 0.5) * 2;

    ring.style.transform = `translate(${pxX - diameter / 2}px, ${pxY - diameter / 2}px)`;
    ring.style.width = `${diameter}px`;
    ring.style.height = `${diameter}px`;
    ring.style.opacity = r > 2 ? "1" : "0";
  }, [FEATHER]);

  const loop = useCallback(function animate() {
    // The scheduled frame has been consumed, even if the hero is offscreen.
    rafRef.current = null;
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
      rafRef.current = requestAnimationFrame(animate);
    }
  }, [applyStyles, prefersReducedMotion]);

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
        if (entry.isIntersecting && (isInsideRef.current || currR.current > 0)) startLoop();
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
    hero.addEventListener("touchcancel", handleTouchEnd);

    // Clean up event listeners
    return () => {
      hero.removeEventListener("pointermove", handlePointerMove);
      hero.removeEventListener("pointerenter", handlePointerEnter);
      hero.removeEventListener("pointerleave", handlePointerLeave);
      hero.removeEventListener("touchmove", handleTouchMove);
      hero.removeEventListener("touchend", handleTouchEnd);
      hero.removeEventListener("touchcancel", handleTouchEnd);
      observerRef.current?.disconnect();
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [LENS_RADIUS, FEATHER, startLoop]);

  return (
    <section
      className={styles.hero}
      aria-label="From structural design to completed building"
      style={{ 
        "--x": "50%", 
        "--y": "50%", 
        "--r": "0px", 
        "--feather": "0px",
        "--mask-center": isShowingFinished ? "black" : "transparent",
        "--mask-edge": isShowingFinished ? "transparent" : "black"
      } as React.CSSProperties}
    >
      <div ref={heroRef} className={styles.imageStage}>
        {/* Bottom layer: separate background image (finished building) */}
        <div className={`${styles.layer} ${styles.layerFinal}`}>
          <Image src="/assets/images/hero/hero-finished-synced.webp" alt="Completed SUCI Constructions building" width={1672} height={941} priority draggable={false} />
        </div>

        {/* Top layer: structure image as the main visual (masked) */}
        <div className={`${styles.layer} ${styles.layerStructure}`}>
          <Image src="/assets/images/hero/hero-structure-synced.webp" alt="RCC column and beam frame of the same SUCI Constructions building" width={1672} height={941} priority draggable={false} />
        </div>

        {/* Lens ring */}
        <div ref={ringRef} className={styles.ring} aria-hidden="true">
          <span className={styles.ringTick} data-pos="top" />
          <span className={styles.ringTick} data-pos="right" />
          <span className={styles.ringTick} data-pos="bottom" />
          <span className={styles.ringTick} data-pos="left" />
          <span className={styles.ringLabel}>{isShowingFinished ? "STRUCTURE" : "FINISHED"}</span>
        </div>

      </div>

      {/* Text pinned to left edge, inside container for alignment */}
      <div className={`container ${styles.contentContainer}`}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Engineering &amp; Construction</p>
          <h1 className={styles.headline}>
            Homes and<br />Buildings,<br />Engineered<br />to last.
          </h1>
          <p className={styles.sub}>
            Structural engineers who design and build villas, homes and commercial spaces. We serve both Telangana and Andhra Pradesh.
          </p>
          <div className={styles.actions}>
            <Link href="/contact" className={styles.ctaButton}>Book a consultation</Link>
            <Link href="#packages" className={styles.secondaryButton}>See our packages</Link>
          </div>
          <button aria-pressed={isShowingFinished} onClick={() => setIsShowingFinished(!isShowingFinished)} className={styles.toggleBtn}>
            {isShowingFinished ? "Show Structure Drawing" : "Show Finished Building"}
          </button>
        </div>
      </div>
    </section>
  );
}
