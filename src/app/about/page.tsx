import styles from "./page.module.css";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <p className={styles.heroEyebrow}>About SUCI Constructions</p>
          <h1 className={`display-text ${styles.heroH1}`}>Engineers first.<br />Builders by commitment.</h1>
        </div>
      </section>

      {/* Figures band */}
      <section className={styles.figuresBand}>
        <div className={`container ${styles.figuresGrid}`}>
          <div className={styles.figure}>
            <span className={styles.figureValue}>40+</span>
            <span className={styles.figureLabel}>Years of combined structural engineering experience</span>
          </div>
          <div className={styles.figureDivider}></div>
          <div className={styles.figure}>
            <span className={styles.figureValue}>200+</span>
            <span className={styles.figureLabel}>Residential and commercial projects</span>
          </div>
          <div className={styles.figureDivider}></div>
          <div className={styles.figure}>
            <span className={styles.figureValue}>200+</span>
            <span className={styles.figureLabel}>Stage-wise quality inspections</span>
          </div>
          <div className={styles.figureDivider}></div>
          <div className={styles.figure}>
            <span className={styles.figureValue}>100%</span>
            <span className={styles.figureLabel}>Client satisfaction — as verified by referrals</span>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className={styles.storySection}>
        <div className={`container ${styles.splitGrid}`}>
          <div className={styles.leftCol}>
            <h2>Our story</h2>
          </div>
          <div className={styles.rightCol}>
            <p className="body-large">
              SUCI Constructions was founded by practising structural engineers who saw a persistent problem in Hyderabad&apos;s construction industry: beautiful buildings built on compromised foundations.
            </p>
            <p>
              Contractors were substituting lower-grade steel, skipping cube tests, and handing clients buildings that looked complete but weren&apos;t structurally sound. We decided to build differently — starting from engineering, not finishing there.
            </p>
            <p>
              Today, every SUCI project begins with a soil test and ends with a structural warranty. In between, our engineers supervise every concrete pour, every bar bending schedule, and every stage inspection. That&apos;s how we&apos;ve built 200+ projects without a single structural complaint.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className={styles.valuesSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Mission &amp; values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <span className={styles.valueIcon}>◈</span>
              <h3>Precision</h3>
              <p>Every detail is calculated and verified. M25 concrete is cube-tested at 7 and 28 days. Fe 500D TMT steel is verified against mill test certificates. We leave nothing to assumption.</p>
            </div>
            <div className={styles.valueCard}>
              <span className={styles.valueIcon}>◎</span>
              <h3>Honesty in materials</h3>
              <p>We specify the exact brand, grade, and quantity of cement, steel, and concrete in writing. What we quote is what we use. No substitution, no verbal agreements.</p>
            </div>
            <div className={styles.valueCard}>
              <span className={styles.valueIcon}>⬡</span>
              <h3>Accountability</h3>
              <p>One team, one point of contact. We take full responsibility from design to handover — not a separate architect, structural engineer, and contractor who can blame each other.</p>
            </div>
            <div className={styles.valueCard}>
              <span className={styles.valueIcon}>◇</span>
              <h3>Transparency</h3>
              <p>Stage inspection reports and photo updates are sent every week. If you&apos;re an NRI building remotely, you see exactly what&apos;s happening — the same day it happens.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className={styles.milestonesSection}>
        <div className="container">
          <h2 className={styles.sectionTitle2}>Our milestones</h2>
          <div className={styles.timeline}>
            {[
              { year: "2005", event: "SUCI Constructions founded in Hyderabad by structural engineers." },
              { year: "2008", event: "Delivered first 10 independent houses in New Nagole area." },
              { year: "2013", event: "Expanded to commercial and industrial construction; first PEB warehouse project." },
              { year: "2017", event: "Completed first luxury villa portfolio project in Kokapet." },
              { year: "2020", event: "Launched structural audit and retrofitting service for existing buildings." },
              { year: "2024", event: "Reached 200+ completed projects milestone across Hyderabad." },
            ].map((m) => (
              <div key={m.year} className={styles.timelineItem}>
                <span className={styles.timelineYear}>{m.year}</span>
                <p>{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className={styles.leadershipSection}>
        <div className="container">
          <div className={styles.leadershipHeader}>
            <h2>Leadership</h2>
            <Link href="/about" className={styles.textLink}>Meet the full team →</Link>
          </div>
          <div className={styles.leaderGrid}>
            <div className={styles.leaderCard}>
              <div className={styles.leaderImagePlaceholder}></div>
              <div className={styles.leaderInfo}>
                <h3>Founder &amp; Principal Engineer</h3>
                <p className={styles.leaderQual}>M.Tech Structural Engineering · 40+ years experience</p>
                <p>Structural design, soil testing, and foundation engineering are his specialisation. He personally signs off on every structural drawing and foundation design that leaves SUCI.</p>
              </div>
            </div>
            <div className={styles.leaderCard}>
              <div className={styles.leaderImagePlaceholder}></div>
              <div className={styles.leaderInfo}>
                <h3>Co-Founder &amp; Project Director</h3>
                <p className={styles.leaderQual}>B.Tech Civil Engineering · 35+ years experience</p>
                <p>Responsible for on-site execution, quality audits, and client communication. Every client gets his personal number — and he answers it.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office + CTA */}
      <section className={styles.officeCta}>
        <div className="container">
          <div className={styles.officeCtaGrid}>
            <div>
              <h2>Visit our office</h2>
              <address className={styles.officeAddress}>
                2-4-216, Road No. 9A,<br />
                Snehapuri Colony, New Nagole,<br />
                Hyderabad 500035<br /><br />
                Monday – Saturday, 9:30 am – 6:30 pm
              </address>
              <a href="tel:+917386858421" className={styles.officePhone}>+91 73868 58421</a>
            </div>
            <div className={styles.officeCtaRight}>
              <h3>Ready to start your project?</h3>
              <p>Book a free consultation and our engineer will visit your plot within 2 working days.</p>
              <Link href="/contact" className={styles.ctaButton}>Book a consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
