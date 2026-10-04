import styles from "./page.module.css";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <p className={styles.heroEyebrow}>About SUCI Constructions</p>
          <h1 className={`display-text ${styles.heroH1}`}>Founded by Structural Engineers</h1>
        </div>
      </section>

      {/* Figures band */}
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

      {/* Story */}
      <section className={styles.storySection}>
        <div className={`container ${styles.splitGrid}`}>
          <div className={styles.leftCol}>
            <h2>Founded by Structural Engineers</h2>
          </div>
          <div className={styles.rightCol}>
            <p className="body-large">
              SUCI Constructions is a construction company led by engineers. It was started by structural engineers with one simple aim: to build homes with the same care and planning that goes into designing a safe structure.
            </p>
            <p>
              At SUCI, our engineers stay involved in the building work itself, not only the drawings. From planning and choosing materials to work on site and quality checks, every step is handled with care and attention to detail.
            </p>
            <p>
              Our team works closely with architects, structural engineers and site staff, so the approved design is built exactly as planned.
            </p>
          </div>
        </div>
      </section>

      {/* Why SUCI — Our Approach */}
      <section className={styles.valuesSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Why SUCI?</h2>
          <p className={styles.valuesSub}>Engineered from the Ground Up</p>
          <p className={styles.valuesIntro}>
            A building is more than how it looks. Its strength and how long it lasts depend on the decisions made at every stage of construction. Because we are structural engineers, we focus on getting these basics right.
          </p>
          <h3 className={styles.approachTitle}>Our Approach</h3>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <span className={styles.valueIcon}>⬡</span>
              <h3>Engineer-led building</h3>
              <p>Our engineers guide the work on site, not just the drawings.</p>
            </div>
            <div className={styles.valueCard}>
              <span className={styles.valueIcon}>◈</span>
              <h3>Quality workmanship</h3>
              <p>We pay close attention to the materials and to how the work is done.</p>
            </div>
            <div className={styles.valueCard}>
              <span className={styles.valueIcon}>◎</span>
              <h3>Material checks</h3>
              <p>We check materials before and during construction, so they match what was agreed.</p>
            </div>
            <div className={styles.valueCard}>
              <span className={styles.valueIcon}>◇</span>
              <h3>Design and site in step</h3>
              <p>Architects, engineers and the site team work together, so what is drawn is what gets built.</p>
            </div>
            <div className={styles.valueCard}>
              <span className={styles.valueIcon}>▣</span>
              <h3>Clear communication</h3>
              <p>You always know what is being used, how the work is going and what comes next.</p>
            </div>
            <div className={styles.valueCard}>
              <span className={styles.valueIcon}>⬢</span>
              <h3>Qualified supervision</h3>
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

      {/* Milestones */}
      <section className={styles.milestonesSection}>
        <div className="container">
          <h2 className={styles.sectionTitle2}>Our Milestones</h2>
          <div className={styles.timeline}>
            {[
              { year: "2010", title: "PS Engineering Consultants", text: "We began as a partnership firm, offering structural engineering consultancy only." },
              { year: "2013", title: "METEY Engineering & Consultancy Pvt. Ltd.", text: "We grew into a private limited company, adding architecture, building services (electrical, plumbing and air-conditioning) and interiors to our structural design work, for many types of projects across India." },
              { year: "2025", title: "SUCI Constructions", text: "We started building homes ourselves, bringing our design experience directly to the site." },
            ].map((m) => (
              <div key={m.year} className={styles.timelineItem}>
                <span className={styles.timelineYear}>{m.year}</span>
                <div>
                  <strong className={styles.timelineTitle}>{m.title}</strong>
                  <p>{m.text}</p>
                </div>
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
          </div>
          <div className={styles.leaderGrid}>
            {/* Founder 1: Er. C. A. Prasad */}
            <div className={styles.leaderCard}>
              <div className={styles.leaderImagePlaceholder} style={{ background: "transparent" }}>
                <img src="/assets/images/founders/founder1.jpeg" alt="Er. C. A. Prasad" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div className={styles.leaderInfo}>
                <h3>Er. C. A. Prasad</h3>
                <p className={styles.leaderQual}>Founder &amp; Director, SUCI Constructions</p>
                <p className={styles.leaderQual}>Founder &amp; Director, METEY Engineering &amp; Consultancy Pvt. Ltd.</p>
                <p>
                  With more than 40 years in engineering, Er. C. A. Prasad has worked on many kinds of projects across India, including multi-storey towers, villas, commercial spaces, hospitals, college buildings, pharma facilities and warehouses. His work has also taken him to the UAE, where he was part of well-known projects including the Burj Al Arab. He is the Founder Secretary of the Pre-Engineered Structures Society of India (PSI), which shares knowledge about new ways of building.
                </p>
              </div>
            </div>

            {/* Founder 2: Dr. C. S. Rao */}
            <div className={styles.leaderCard}>
              <div className={styles.leaderImagePlaceholder} style={{ background: "transparent" }}>
                <img src="/assets/images/founders/founder2.jpeg" alt="Dr. C. S. Rao" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div className={styles.leaderInfo}>
                <h3>Dr. C. S. Rao</h3>
                <p className={styles.leaderQual}>Strategic Advisor, SUCI Constructions</p>
                <p className={styles.leaderQual}>Chairman &amp; Founder, Quadgen Wireless Solutions</p>
                <p>
                  Dr. C. S. Rao guides SUCI Constructions as its Strategic Advisor. He is also the Chairman and Founder of Quadgen Wireless Solutions.
                </p>
              </div>
            </div>

            {/* Founder 3: Siva Bharath Pulugu */}
            <div className={styles.leaderCard}>
              <div className={styles.leaderImagePlaceholder} style={{ background: "transparent" }}>
                <img src="/assets/images/founders/founder3.jpeg" alt="Siva Bharath Pulugu" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
              </div>
              <div className={styles.leaderInfo}>
                <h3>Siva Bharath Pulugu</h3>
                <p className={styles.leaderQual}>Managing Partner, SUCI Constructions</p>
                <p>
                  With 12+ years in structural engineering and construction, Siva Bharath Pulugu has worked on almost every stage of building a home: design, detailing, cost estimates, coordination and site work. After years on the design side, he now brings that knowledge straight into construction through SUCI, with a focus on engineer-led work, quality workmanship and building homes the right way from the ground up.
                </p>
                <blockquote className={styles.leaderQuote}>
                  &ldquo;From designing structures to building them — with engineering at the core.&rdquo;
                </blockquote>
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
