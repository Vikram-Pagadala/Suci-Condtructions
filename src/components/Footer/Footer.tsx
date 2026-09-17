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
            <div className={styles.contactItem}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <p>2-4-216, Rd 9A, Snehapuri Colony<br />New Nagole, Hyderabad 500035</p>
            </div>
            <div className={styles.contactItem}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <p>Mon–Sat 9:30–6:30</p>
            </div>
            <div className={styles.contactItem}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <p className={styles.phone}>+91 73868 58421</p>
            </div>
            <div className={styles.contactItem}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              <p>info@suciconstructions.com</p>
            </div>
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
