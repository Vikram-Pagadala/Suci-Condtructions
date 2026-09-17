import Link from 'next/link';
import styles from './page.module.css';
import HeroReveal from '@/components/HeroReveal/HeroReveal';

export default function Home() {
  return (
    <>
      <HeroReveal />

      {/* Figures Band */}
      <section className={styles.figuresBand}>
        <div className={`container ${styles.figuresGrid}`}>
          <div className={styles.figure}>
            <span className={styles.figureValue}>40+</span>
            <span className={styles.figureLabel}>Years engineering experience</span>
          </div>
          <div className={styles.figureDivider}></div>
          <div className={styles.figure}>
            <span className={styles.figureValue}>200+</span>
            <span className={styles.figureLabel}>Projects completed</span>
          </div>
          <div className={styles.figureDivider}></div>
          <div className={styles.figure}>
            <span className={styles.figureValue}>200+</span>
            <span className={styles.figureLabel}>Stage inspections done</span>
          </div>
          <div className={styles.figureDivider}></div>
          <div className={styles.figure}>
            <span className={styles.figureValue}>4.9★</span>
            <span className={styles.figureLabel}>Google rating</span>
          </div>
        </div>
      </section>

      {/* Intro Split Section */}
      <section className={styles.introSection}>
        <div className={`container ${styles.splitGrid}`}>
          <div className={styles.introLeft}>
            <h2>Founded by structural engineers.</h2>
          </div>
          <div className={styles.introRight}>
            <p className="body-large">
              Every decision on a SUCI site is checked against engineering first. We run soil tests, specify M25 concrete cube-tested at 7 and 28 days, and sign off each stage before the next begins.
            </p>
            <p>
              That rigour is what makes the finished building last — and look right. We believe true luxury comes from precision underneath, not decoration on top.
            </p>
            <Link href="/about" className={styles.textLink}>Meet the founders →</Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className={styles.projectsSection}>
        <div className="container">
          <div className={styles.projectsSectionHeader}>
            <h2>Recent projects</h2>
            <Link href="/projects" className={styles.textLink}>View all projects →</Link>
          </div>
          <div className={styles.projectsGrid}>
            <Link href="/projects" className={`${styles.projectCard} ${styles.projectCardLarge}`}>
              <div className={styles.projectCardImage} style={{ backgroundColor: '#1a3a4a' }}>
                <div className={styles.projectCardOverlay}>
                  <h3>Luxury Villa</h3>
                  <p>Kokapet · Villa · 6,200 sq ft · 2025</p>
                </div>
              </div>
            </Link>
            <Link href="/projects" className={styles.projectCard}>
              <div className={styles.projectCardImage} style={{ backgroundColor: '#2d4a5a' }}>
                <div className={styles.projectCardOverlay}>
                  <h3>Commercial Complex</h3>
                  <p>Banjara Hills · 12,000 sq ft · 2024</p>
                </div>
              </div>
            </Link>
            <Link href="/projects" className={styles.projectCard}>
              <div className={styles.projectCardImage} style={{ backgroundColor: '#1e3545' }}>
                <div className={styles.projectCardOverlay}>
                  <h3>Modern Residence</h3>
                  <p>Jubilee Hills · 4,500 sq ft · 2024</p>
                </div>
              </div>
            </Link>
            <Link href="/projects" className={`${styles.projectCard} ${styles.projectCardLarge}`}>
              <div className={styles.projectCardImage} style={{ backgroundColor: '#0f2535' }}>
                <div className={styles.projectCardOverlay}>
                  <h3>Industrial Warehouse</h3>
                  <p>Patancheru · PEB · 25,000 sq ft · 2023</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className={styles.servicesSection}>
        <div className="container">
          <h2 className={styles.servicesSectionTitle}>What we build</h2>
          <div className={styles.servicesList}>
            {[
              { name: "Villas & independent homes", link: "/services" },
              { name: "Commercial buildings", link: "/services" },
              { name: "PEB & industrial structures", link: "/services" },
              { name: "Architecture & structural design", link: "/services" },
              { name: "Interiors & renovation", link: "/services" },
              { name: "Project management", link: "/services" },
            ].map((service) => (
              <Link key={service.name} href={service.link} className={styles.serviceRow}>
                <span>{service.name}</span>
                <span className={styles.serviceArrow}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why SUCI */}
      <section className={styles.whySection}>
        <div className="container">
          <h2>Why clients choose SUCI</h2>
          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>⬡</div>
              <h4>Engineer-led execution</h4>
              <p>Our founders are practising structural engineers. They design and supervise every project — not a separate contractor.</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>◈</div>
              <h4>Material quality control</h4>
              <p>Cement, steel and concrete tested before every stage. We specify brand, grade and quantity in writing — no substitution.</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>◎</div>
              <h4>Single point responsibility</h4>
              <p>One team from design through handover. No blame-shifting between architect, structural engineer and builder.</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>◇</div>
              <h4>Transparent weekly updates</h4>
              <p>Photo reports and stage inspection documents sent every week. You know exactly what&apos;s happening — even if you&apos;re abroad.</p>
            </div>
          </div>
        </div>
      </section>



      {/* Testimonial */}
      <section className={styles.testimonialSection}>
        <div className="container">
          <blockquote className={styles.testimonialQuote}>
            &quot;The best consultancy for building projects in Hyderabad. Every stage was supervised, every material was tested. Our villa was delivered exactly as promised.&quot;
          </blockquote>
          <cite className={styles.testimonialCite}>— Sai Srikanth, Villa Owner, Kokapet</cite>
        </div>
      </section>

    </>
  );
}
