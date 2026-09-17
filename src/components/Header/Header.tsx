"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change (if user taps a link)
  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${mobileOpen ? styles.mobileMenuOpen : ""}`}>
        <div className={`container ${styles.headerContainer}`}>
          {/* Logo */}
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            <img src="/assets/logos/suci-logo-white.png" alt="SUCI Constructions" />
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.nav}>
            <Link href="/about">About</Link>
            <div className={styles.dropdown}>
              <button className={styles.dropbtn}>Services ▾</button>
              <div className={styles.dropdownContent}>
                <Link href="/services">All Services</Link>
                <Link href="/services">Residential</Link>
                <Link href="/services">Villas</Link>
                <Link href="/services">Commercial</Link>
                <Link href="/services">PEB &amp; Industrial</Link>
                <Link href="/services">Architecture</Link>
                <Link href="/services">Structural Engineering</Link>
                <Link href="/services">Interiors</Link>
              </div>
            </div>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          {/* Right Side */}
          <div className={styles.rightSide}>
            <a href="tel:+917386858421" className={styles.phone}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>+91 73868 58421</span>
            </a>

            {/* Desktop Actions */}
            <div className={styles.actions}>
              <Link href="/contact" className={styles.ctaButton}>
                Book a consultation
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className={styles.hamburger}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span className={`${styles.bar} ${mobileOpen ? styles.barOpen1 : ""}`}></span>
              <span className={`${styles.bar} ${mobileOpen ? styles.barOpen2 : ""}`}></span>
              <span className={`${styles.bar} ${mobileOpen ? styles.barOpen3 : ""}`}></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNav}>
            <Link href="/about" onClick={closeMenu}>About</Link>
            <Link href="/services" onClick={closeMenu}>Services</Link>
            <Link href="/projects" onClick={closeMenu}>Projects</Link>
            <Link href="/contact" onClick={closeMenu}>Contact</Link>
          </nav>
          <div className={styles.mobileActions}>
            <a href="tel:+917386858421" className={styles.mobilePhone} onClick={closeMenu}>
              +91 73868 58421
            </a>
            <Link href="/contact" className={styles.mobileCta} onClick={closeMenu}>
              Book a consultation
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
