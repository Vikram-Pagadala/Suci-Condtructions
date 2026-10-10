"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
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

export default function ProjectsList() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type");
  const initialFilter = typeParam && filters.includes(typeParam) ? typeParam : "All";
  const [currentFilter, setCurrentFilter] = useState(initialFilter);

  const filteredProjects =
    currentFilter === "All"
      ? projects
      : projects.filter((p) => p.category === currentFilter);

  return (
    <>
      <section className={styles.filterSection}>
        <div className="container">
          <div className={styles.filterBar}>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setCurrentFilter(filter)}
                className={`${styles.filterLink} ${currentFilter === filter ? styles.active : ""}`}
                aria-current={currentFilter === filter ? "page" : undefined}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit' }}
              >
                {filter}
              </button>
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
              <button onClick={() => setCurrentFilter("All")} className={styles.clearFilter} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                View all projects
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
