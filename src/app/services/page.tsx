import Link from "next/link";
import styles from "./page.module.css";

const serviceGroups = [
  {
    group: "Build",
    tagline: "Complete construction from start to finish.",
    items: [
      {
        name: "Residential Construction",
        desc: "Independent houses with multiple floors, fully designed and built. Vastu-aware planning. Help with local approvals. Strong framework with concrete tested at every stage.",
        link: "/services",
      },
      {
        name: "Villa Construction",
        desc: "Luxury villas with custom designs, premium finishes, landscaping, and smart home wiring. We also provide weekly photo reports for clients living abroad.",
        link: "/services",
      },
      {
        name: "Commercial Construction",
        desc: "Offices, showrooms, and mixed-use complexes. Fast completion, fire safety compliance, and clear designs that give you more usable floor space.",
        link: "/services",
      },
      {
        name: "Industrial & Steel Buildings",
        desc: "Steel buildings for warehouses and factories. Built quickly with clear wide spaces, and complete foundation design by our engineers.",
        link: "/services",
      },
    ],
  },
  {
    group: "Design",
    tagline: "Clear drawings that are ready for building on day one.",
    items: [
      {
        name: "Architecture Planning",
        desc: "Concept design, floor plans, 3D views, working drawings, and drawings for municipal approval. We handle local permissions for you.",
        link: "/services",
      },
      {
        name: "Structural Engineering",
        desc: "The core of what SUCI does. Structural design, understanding soil tests, foundation design, and checking existing buildings. All work is done by our own qualified engineers.",
        link: "/services",
      },
      {
        name: "Interior Design",
        desc: "Home and office interiors, kitchens and wardrobes, material choices, 3D views, and full execution. We design and build it all ourselves.",
        link: "/services",
      },
    ],
  },
  {
    group: "Manage",
    tagline: "Looking after your interests on site every day.",
    items: [
      {
        name: "Renovation",
        desc: "Home and office updates, adding strength for new floors, waterproofing, and fixing exteriors. We check if the structure is strong enough before any work begins.",
        link: "/services",
      },
      {
        name: "Project Management",
        desc: "We act as your representative on site. We check costs, quality, and progress, and send weekly photo reports. We manage the workers so you don't have to.",
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
