import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container`}>
        <div className={styles.ctaBand}>
          <h2 className={styles.ctaTitle}>Planning to build? Let&apos;s talk about it.</h2>
          <Link href="/contact" className={styles.ctaButton}>
            Book a consultation
          </Link>
        </div>
        
        <div className={styles.mainFooter}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <img src="/assets/logos/suci-logo-white.png" alt="SUCI Constructions" />
            </Link>
            <p className={styles.description}>
              We&apos;re structural engineers building high-quality homes and commercial spaces across Hyderabad.
            </p>
          </div>
          
          <div className={styles.linksColumn}>
            <h4>Company</h4>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>
          
          <div className={styles.linksColumn}>
            <h4>Services</h4>
            <Link href="/services">Residential</Link>
            <Link href="/services">Villas</Link>
            <Link href="/services">Commercial</Link>
            <Link href="/services">PEB &amp; Industrial</Link>
            <Link href="/services">Interiors</Link>
            <Link href="/services">Renovation</Link>
          </div>
          
          <div className={styles.contactColumn}>
            <h4>Visit us</h4>
            <p>2-4-216, Rd 9A</p>
            <p>Snehapuri Colony</p>
            <p>New Nagole, Hyderabad 500035</p>
            <p>Mon–Sat 9:30–6:30</p>
            <p className={styles.phone}>+91 73868 58421</p>
            <p>info@suciconstructions.com</p>
          </div>
        </div>
        
        <div className={styles.bottomBar}>
          <p>© {new Date().getFullYear()} SUCI Constructions · GSTIN: 36ABCDE1234F1Z5</p>
          <div className={styles.legalLinks}>
            <span>All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
