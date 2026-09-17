/* Bug fix: searchParams must be Promise-based in Next.js App Router */
import Link from "next/link";
import styles from "./page.module.css";

const projects = [
  { id: 1, name: "Luxury Villa", location: "Kokapet, Hyderabad", type: "Villa", area: "6,200 sq ft", year: 2025, category: "Villas", bg: "#1a3a4a" },
  { id: 2, name: "Commercial Complex", location: "Banjara Hills, Hyderabad", type: "Commercial", area: "12,000 sq ft", year: 2024, category: "Commercial", bg: "#2a2a4a" },
  { id: 3, name: "Modern Residence", location: "Jubilee Hills, Hyderabad", type: "Residential", area: "4,500 sq ft", year: 2024, category: "Residential", bg: "#1e3545" },
  { id: 4, name: "Industrial Warehouse", location: "Patancheru, Hyderabad", type: "PEB", area: "25,000 sq ft", year: 2023, category: "Industrial", bg: "#1a2a1a" },
  { id: 5, name: "Luxury Apartment Complex", location: "Gachibowli, Hyderabad", type: "Residential", area: "38,000 sq ft", year: 2023, category: "Residential", bg: "#3a2a1a" },
  { id: 6, name: "Corporate Office", location: "Hitec City, Hyderabad", type: "Commercial", area: "8,500 sq ft", year: 2024, category: "Commercial", bg: "#1a1a3a" },
];

const filters = ["All", "Villas", "Residential", "Commercial", "Industrial", "Interiors"];

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const params = await searchParams;
  const currentFilter = params.type || "All";

  const filteredProjects =
    currentFilter === "All"
      ? projects
      : projects.filter((p) => p.category === currentFilter);

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <h1 className="display-text">Built work.</h1>
          <p className="body-large" style={{ marginTop: "var(--space-16)", opacity: 0.8 }}>
            A selection of engineering and construction projects across Hyderabad.
          </p>
        </div>
      </section>

      <section className={styles.filterSection}>
        <div className="container">
          <div className={styles.filterBar}>
            {filters.map((filter) => (
              <Link
                key={filter}
                href={filter === "All" ? "/projects" : `/projects?type=${filter}`}
                className={`${styles.filterLink} ${currentFilter === filter ? styles.active : ""}`}
              >
                {filter}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className={`container ${styles.grid}`}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <Link
                key={project.id}
                href="/projects"
                className={`${styles.card} ${index % 3 === 0 ? styles.largeCard : ""}`}
              >
                <div
                  className={`${styles.cardImage} ${index % 3 === 0 ? styles.cardImageLarge : ""}`}
                  style={{ backgroundColor: project.bg }}
                >
                  <div className={styles.cardOverlay}>
                    <span className={styles.cardType}>{project.type}</span>
                  </div>
                </div>
                <div className={styles.cardInfo}>
                  <h3>{project.name}</h3>
                  <p>
                    {project.location} · {project.area} · {project.year}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <div className={styles.emptyState}>
              <p>No projects found in this category yet.</p>
              <Link href="/projects" className={styles.clearFilter}>
                View all projects
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA Band */}
      <section className={styles.ctaBand}>
        <div className="container">
          <h2>Can&apos;t find what you&apos;re looking for?</h2>
          <p>We&apos;ve completed over 200 projects across Hyderabad. If you&apos;re looking for something specific, get in touch.</p>
          <Link href="/contact" className={styles.ctaButton}>
            Book a consultation
          </Link>
        </div>
      </section>
    </>
  );
}
