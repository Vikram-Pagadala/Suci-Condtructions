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
            <img src={(scrolled || mobileOpen) ? "/assets/logos/suci-logo-blue.png" : "/assets/logos/suci-logo-white.png"} alt="SUCI Constructions" />
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.nav}>
            <Link href="/about">About</Link>
            <div className={styles.dropdown}>
              <button className={styles.dropbtn}>Services ▾</button>
              <div className={styles.dropdownContent}>
                <Link href="/services">All Services</Link>
                <Link href="/services/residential-construction">Residential</Link>
                <Link href="/services/villa-construction">Villas</Link>
                <Link href="/services/commercial-construction">Commercial</Link>
                <Link href="/services/peb-industrial">PEB &amp; Industrial</Link>
                <Link href="/services/architecture-planning">Architecture</Link>
                <Link href="/services/structural-engineering">Structural Engineering</Link>
                <Link href="/services/interior-design">Interiors</Link>
              </div>
            </div>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          {/* Desktop Actions */}
          <div className={styles.actions}>
            <a href="tel:+917386858421" className={styles.phone}>+91 73868 58421</a>
            <Link href="/get-a-quote" className={styles.ctaButton}>
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
            <Link href="/get-a-quote" className={styles.mobileCta} onClick={closeMenu}>
              Book a consultation
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
