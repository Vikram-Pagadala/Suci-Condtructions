"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { packages } from "@/data/packages";
import styles from "./Packages.module.css";

export default function Packages() {
  const [activeTab, setActiveTab] = useState(0);
  const [openAccordions, setOpenAccordions] = useState<Record<string, number | null>>({});
  const [showCompare, setShowCompare] = useState(false);

  const toggleAccordion = (packageId: string, catIndex: number) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [packageId]: prev[packageId] === catIndex ? null : catIndex,
    }));
  };

  const formatPrice = (price: number | null) => {
    if (price === null) return "TODO";
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

        {/* Mobile tabs */}
        <div className={styles.mobileTabs} role="tablist" aria-label="Package selection">
          {packages.map((pkg, i) => (
            <button
              key={pkg.id}
              role="tab"
              aria-selected={activeTab === i}
              aria-controls={`panel-${pkg.id}`}
              id={`tab-${pkg.id}`}
              className={`${styles.mobileTab} ${activeTab === i ? styles.mobileTabActive : ""}`}
              onClick={() => setActiveTab(i)}
            >
              {pkg.name}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className={styles.cardsGrid}>
          {packages.map((pkg, i) => (
            <div
              key={pkg.id}
              id={`panel-${pkg.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${pkg.id}`}
              className={`${styles.card} ${activeTab === i ? styles.cardActive : ""}`}
            >
              <div className={styles.cardHeader}>
                <h3 className={styles.packageName}>{pkg.name}</h3>
                <div className={styles.priceBlock}>
                  <span className={styles.price}>{formatPrice(pkg.pricePerSqft)}</span>
                  <span className={styles.priceUnit}>/ sq ft</span>
                </div>
                <span className={styles.priceNote}>({pkg.priceNote})</span>
              </div>

              <div className={styles.accordionList}>
                {pkg.categories.map((cat, catIdx) => {
                  const isOpen = openAccordions[pkg.id] === catIdx;
                  const accordionId = `accordion-${pkg.id}-${catIdx}`;
                  const panelId = `panel-content-${pkg.id}-${catIdx}`;

                  return (
                    <div key={cat.title} className={styles.accordionItem}>
                      <button
                        className={styles.accordionButton}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        id={accordionId}
                        onClick={() => toggleAccordion(pkg.id, catIdx)}
                      >
                        <span>{cat.title}</span>
                        <span className={styles.accordionIcon} aria-hidden="true">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={accordionId}
                        className={`${styles.accordionPanel} ${isOpen ? styles.accordionPanelOpen : ""}`}
                      >
                        <ul className={styles.itemList}>
                          {cat.items.map((item, itemIdx) => (
                            <li key={itemIdx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Link href="/contact" className={styles.ctaButton}>
                Book a consultation
              </Link>
            </div>
          ))}
        </div>

        {/* Compare toggle */}
        <div className={styles.compareToggleWrap}>
          <button
            className={styles.compareToggle}
            onClick={() => setShowCompare(!showCompare)}
            aria-expanded={showCompare}
            aria-controls="compare-table"
          >
            {showCompare ? "Hide comparison" : "Compare packages"}
          </button>
        </div>

        {/* Comparison table */}
        {showCompare && (
          <div className={styles.compareTableWrap} id="compare-table">
            <div className={styles.compareTableScroll}>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th>Category</th>
                    {packages.map((pkg) => (
                      <th key={pkg.id}>{pkg.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {packages[0].categories.map((cat, catIdx) => (
                    <tr key={cat.title}>
                      <td className={styles.compareCategoryName}>{cat.title}</td>
                      {packages.map((pkg) => (
                        <td key={pkg.id}>
                          <ul className={styles.compareItemList}>
                            {pkg.categories[catIdx].items.map((item, itemIdx) => (
                              <li key={itemIdx}>{item}</li>
                            ))}
                          </ul>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
