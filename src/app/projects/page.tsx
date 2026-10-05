import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import ProjectImage from "./ProjectImage";

const projects = [
  { id: 1, location: "Chikkadpally", floors: "G+3", type: "Residential", category: "Residential", image: "/assets/images/projects/chikkadpally-g3.jpg" },
  { id: 2, location: "Champapet", floors: "G+2", type: "Residential", category: "Residential", image: "/assets/images/projects/champapet-g2.jpg" },
  { id: 3, location: "Erragadda", floors: "S+4", type: "Residential", category: "Residential", image: "/assets/images/projects/erragadda-s4.jpg" },
  { id: 4, location: "Nagole, Samathapuri Colony", floors: "S+4", type: "Commercial", category: "Commercial", image: "/assets/images/projects/nagole-samathapuri-s4.jpg" },
  { id: 5, location: "Nagole, Snehapuri Colony", floors: "S+3", type: "Semi-commercial", category: "Commercial", image: "/assets/images/projects/nagole-snehapuri-s3.jpg" },
];

const filters = ["All", "Residential", "Commercial"];

export const metadata: Metadata = {
  title: "Our Construction Projects | Villas & Commercial Buildings | SUCI",
  description: "Explore our portfolio of completed and ongoing construction projects in Hyderabad, Telangana, and Andhra Pradesh.",
  keywords: "construction projects Hyderabad, villa designs Telangana, commercial buildings AP, completed homes portfolio",
};

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
            A selection of engineering and construction projects. We serve both Telangana and Andhra Pradesh.
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
                aria-current={currentFilter === filter ? "page" : undefined}
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
            filteredProjects.map((project) => (
              <article key={project.id} className={styles.card}>
                <div className={styles.cardImage}>
                  <ProjectImage 
                    src={project.image} 
                    alt={`${project.floors} ${project.type} building in ${project.location}, Hyderabad`} 
                  />
                  <div className={styles.cardOverlay}>
                    <span className={styles.cardType}>{project.type}</span>
                  </div>
                  <div className={styles.representativeCaption}>Representative view</div>
                </div>
                <div className={styles.cardInfo}>
                  <h3>{project.location}</h3>
                  <p>
                    {project.floors} {project.type ? `· ${project.type}` : ""}
                  </p>
                </div>
              </article>
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
          <p>We&apos;ve completed over 200 projects. We serve both Telangana and Andhra Pradesh. If you&apos;re looking for something specific, get in touch.</p>
          <Link href="/contact" className={styles.ctaButton}>
            Book a consultation
          </Link>
        </div>
      </section>
    </>
  );
}
