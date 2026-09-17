import Link from "next/link";
import styles from "./page.module.css";

const serviceGroups = [
  {
    group: "Build",
    tagline: "Turnkey construction from foundation to handover.",
    items: [
      {
        name: "Residential Construction",
        desc: "Independent houses G+1 to G+4, fully designed and built. Vastu-aware planning. GHMC / HMDA approval support. RCC framed structure with cube-tested concrete at every stage.",
        link: "/services",
      },
      {
        name: "Villa Construction",
        desc: "Luxury villas with bespoke architecture, premium material finishes, landscaping, and home automation-ready wiring. We also coordinate NRI remote-build updates with weekly photo reports.",
        link: "/services",
      },
      {
        name: "Commercial Construction",
        desc: "Offices, showrooms, mixed-use complexes. Fast-track schedules, fire and building code compliance, MEP coordination, and clean structural design that maximises usable floor space.",
        link: "/services",
      },
      {
        name: "PEB & Industrial",
        desc: "Pre-engineered steel buildings for warehouses and factories. Faster erection, clear spans up to 60m, and full foundation and anchor bolt design by our structural engineers.",
        link: "/services",
      },
    ],
  },
  {
    group: "Design",
    tagline: "Drawings that are accurate enough to build from on the first day.",
    items: [
      {
        name: "Architecture Planning",
        desc: "Concept design, floor plans, 3D elevations and walkthroughs, working drawings, and municipal approval drawings. We submit to GHMC and HMDA on your behalf.",
        link: "/services",
      },
      {
        name: "Structural Engineering",
        desc: "The core of what SUCI does. Structural design and analysis, soil-test interpretation, foundation design, structural audits of existing buildings, and retrofitting. All work carried out by our in-house M.Tech engineers.",
        link: "/services",
      },
      {
        name: "Interior Design",
        desc: "Residential and office interiors, modular kitchens and wardrobes, material boards, 3D renders, and full execution. We design and build — no handoff to a separate interior contractor.",
        link: "/services",
      },
    ],
  },
  {
    group: "Manage",
    tagline: "Your interest, represented on site every day.",
    items: [
      {
        name: "Renovation",
        desc: "Home and commercial remodelling, structural strengthening for additional floors, waterproofing, and façade upgrades. We assess structural feasibility before any renovation begins.",
        link: "/services",
      },
      {
        name: "Project Management",
        desc: "Owner's representative on site. Cost control, quality audits, schedule tracking, and weekly photo reports. We manage your contractor so you don't have to.",
        link: "/services",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <p className={styles.heroEyebrow}>What we do</p>
          <h1 className={`display-text ${styles.heroH1}`}>From the first drawing to the final key.</h1>
        </div>
      </section>

      <section className={styles.introSection}>
        <div className="container">
          <div className={styles.introGrid}>
            <div>
              <h2>One team, one responsibility.</h2>
            </div>
            <div>
              <p className="body-large">
                Most construction projects fail because responsibility is split between architect, structural engineer, and contractor — each one quick to blame the others when things go wrong.
              </p>
              <p style={{ marginTop: "var(--space-16)" }}>
                At SUCI, all three come under one roof. Our structural engineers design it, our architects plan it, and our site team builds it. One contract. One point of contact. Full accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className="container">
          {serviceGroups.map((group) => (
            <div key={group.group} className={styles.serviceGroup}>
              <div className={styles.groupHeader}>
                <h2 className={styles.groupLabel}>{group.group}</h2>
                <p className={styles.groupTagline}>{group.tagline}</p>
              </div>
              <div className={styles.serviceList}>
                {group.items.map((service) => (
                  <Link href={service.link} key={service.name} className={styles.serviceRow}>
                    <div className={styles.serviceInfo}>
                      <h3>{service.name}</h3>
                      <p className={styles.serviceDesc}>{service.desc}</p>
                    </div>
                    <div className={styles.serviceArrow}>→</div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBand}>
        <div className="container">
          <h2>Not sure which service you need?</h2>
          <p>Book a free consultation and our engineer will advise you based on your plot and requirements.</p>
          <Link href="/contact" className={styles.ctaButton}>
            Book a free consultation
          </Link>
        </div>
      </section>
    </>
  );
}
