"use client";

import Link from "next/link";
import { planRecommendations } from "@/data/planRecommendations";
import { packages } from "@/data/packages";
import styles from "./Packages.module.css";

export default function Packages() {
  const formatPrice = (price: number | null) => {
    if (price === null) return "Price on request";
    return `₹${price.toLocaleString("en-IN")}`;
  };

  return (
    <section className={styles.packagesSection} id="packages">
      <div className="container">
        <div className={styles.header}>
          <h2>Our Packages</h2>
          <p className={styles.subtitle}>
            Clear pricing for every budget. Pick a package and see exactly what is included.
          </p>
        </div>

        {/* Cards grid (simplified for home page) */}
        <div className={styles.cardsGrid}>
          {packages.map((pkg) => (
            <div key={pkg.id} className={`${styles.card} ${pkg.id === "value-added" ? styles.recommended : ""}`}>
              <div className={styles.cardHeader}>
                <div className={styles.badgeSlot}>{pkg.id === "value-added" && <span className={styles.badge}>Recommended</span>}</div>
                <h3 className={styles.packageName}>{pkg.name}</h3>
                <div className={styles.priceBlock}>
                  <span className={styles.price}>{formatPrice(pkg.pricePerSqft)}</span>
                  {pkg.pricePerSqft !== null && <span className={styles.priceUnit}>/ sq ft</span>}
                </div>
                <span className={styles.priceNote}>({pkg.priceNote})</span>
              </div>
              <div className={styles.recommendationBody}>
                <p className={styles.bestFor}>Best for {planRecommendations[pkg.id].bestFor}.</p>
                <ul>{planRecommendations[pkg.id].benefits.map(benefit => <li key={benefit}>{benefit}</li>)}</ul>
              </div>
              <Link href={`/contact?plan=${encodeURIComponent(pkg.name)}`} className={styles.ctaButton}>Choose {pkg.name}</Link>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "var(--space-48)" }}>
          <Link href="/pricing" className={styles.ctaButton}>
            View full pricing &amp; inclusions
          </Link>
        </div>
      </div>
    </section>
  );
}
