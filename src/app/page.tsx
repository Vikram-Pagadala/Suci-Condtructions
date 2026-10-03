import Link from 'next/link';
import styles from './page.module.css';
import HeroReveal from '@/components/HeroReveal/HeroReveal';
import Packages from '@/components/Packages/Packages';

export default function Home() {
  return (
    <>
      <HeroReveal />

      {/* Figures Band */}
      <section className={styles.figuresBand}>
        <div className={`container ${styles.figuresGrid}`}>
          <div className={styles.figure}>
            <span className={styles.figureValue}>40+</span>
            <span className={styles.figureLabel}>Years of engineering experience</span>
          </div>
          <div className={styles.figureDivider}></div>
          <div className={styles.figure}>
            <span className={styles.figureValue}>200+</span>
            <span className={styles.figureLabel}>Designed &amp; Delivered</span>
          </div>
          <div className={styles.figureDivider}></div>
          <div className={styles.figure}>
            <span className={styles.figureValue}>200+</span>
            <span className={styles.figureLabel}>Quality checks to ensure safety at each stage</span>
          </div>
          <div className={styles.figureDivider}></div>
          <div className={styles.figure}>
            <span className={styles.figureValue}>100%</span>
            <span className={styles.figureLabel}>Happy Clients</span>
          </div>
        </div>
      </section>

      {/* Intro Split Section */}
      <section className={styles.introSection}>
        <div className={`container ${styles.splitGrid}`}>
          <div className={styles.introLeft}>
            <h2>Founded by Structural Engineers</h2>
          </div>
          <div className={styles.introRight}>
            <p className="body-large">
              SUCI Constructions is a construction company led by engineers. It was started by structural engineers with one simple aim: to build homes with the same care and planning that goes into designing a safe structure.
            </p>
            <p>
              At SUCI, our engineers stay involved in the building work itself, not only the drawings. From planning and choosing materials to work on site and quality checks, every step is handled with care and attention to detail.
            </p>
            <p>
              Our team works closely with architects, structural engineers and site staff, so the approved design is built exactly as planned.
            </p>
            <Link href="/about" className={styles.textLink}>Meet the founders →</Link>
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
          <h2>Why SUCI?</h2>
          <p className={styles.whySub}>Engineered from the Ground Up</p>
          <p className={styles.whyIntro}>
            A building is more than how it looks. Its strength and how long it lasts depend on the decisions made at every stage of construction. Because we are structural engineers, we focus on getting these basics right.
          </p>
          <h3 className={styles.approachTitle}>Our Approach</h3>
          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>⬡</div>
              <h4>Engineer-led building</h4>
              <p>Our engineers guide the work on site, not just the drawings.</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>◈</div>
              <h4>Quality workmanship</h4>
              <p>We pay close attention to the materials and to how the work is done.</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>◎</div>
              <h4>Material checks</h4>
              <p>We check materials before and during construction, so they match what was agreed.</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>◇</div>
              <h4>Design and site in step</h4>
              <p>Architects, engineers and the site team work together, so what is drawn is what gets built.</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>▣</div>
              <h4>Clear communication</h4>
              <p>You always know what is being used, how the work is going and what comes next.</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>⬢</div>
              <h4>Qualified supervision</h4>
              <p>Qualified engineers supervise the work on site.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Building Homes with Engineering Confidence */}
      <section className={styles.confidenceSection}>
        <div className="container">
          <h2>Building Homes with Engineering Confidence</h2>
          <p className="body-large">
            At SUCI, we believe good construction starts with good engineering. Our aim is not just to finish a building, but to hand over a home that is strong, carefully built and made to last.
          </p>
        </div>
      </section>

      {/* Our Packages */}
      <Packages />

    </>
  );
}
