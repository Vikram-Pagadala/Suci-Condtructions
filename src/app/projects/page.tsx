import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import styles from "./page.module.css";
import ProjectsList from "./ProjectsList";
import Breadcrumbs from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Construction Projects in Hyderabad | SUCI Constructions",
  description: "Residential and commercial buildings by SUCI Constructions in Nagole, Champapet, Chikkadpally and Erragadda, Hyderabad. G+2 to S+4 projects.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Projects", path: "/projects" }]} />
      <section className={styles.hero}>
        <div className="container">
          <h1 className="display-text">Built work.</h1>
          <p className="body-large" style={{ marginTop: "var(--space-16)", opacity: 0.8 }}>
            A selection of engineering and construction projects. We serve both Telangana and Andhra Pradesh.
          </p>
        </div>
      </section>

      <Suspense fallback={<div className="container">Loading projects...</div>}>
        <ProjectsList />
      </Suspense>

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
