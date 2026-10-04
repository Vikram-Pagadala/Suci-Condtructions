"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./PricingTable.module.css";
import { planRecommendations } from "@/data/planRecommendations";
import { pricingDifferences } from "@/data/pricingDifferences";

const plans = [
  { id: "basic", name: "Basic", price: 2090, type: "for rentals" },
  { id: "value-added", name: "Value Added", price: 2290, type: "first home" },
  { id: "premium", name: "Premium", price: 2700, type: "long-term home" },
  { id: "elite", name: "Elite", price: 2950, type: "villa / luxury" }
];

export default function PricingTable() {
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});
  const [showOnlyDifferences, setShowOnlyDifferences] = useState(true);

  const toggleCategory = (cat: string) => {
    setOpenCategories(prev => ({ ...prev, [cat]: !prev[cat] }));
  };
  const expandAll = () => {
    const allObj: Record<string, boolean> = {};
    const categories = Array.from(new Set(pricingDifferences.map(d => d.category)));
    categories.forEach(c => allObj[c] = true);
    setOpenCategories(allObj);
  };
  const collapseAll = () => setOpenCategories({});

  const formatPrice = (p: number | null, areaSqft: number = 1) => {
    if (p === null) return "Price on request";
    return `₹${(p * areaSqft).toLocaleString("en-IN")}`;
  };

  const categories = Array.from(new Set(pricingDifferences.map(d => d.category)));

  return (
    <div className={styles.wrapper}>

      {/* 3. The Comparison Table */}
      <div className={styles.tableControls}>
        <div className={styles.toggleWrap}>
          <label className={styles.toggleLabel}>
            <input 
              type="checkbox" 
              checked={showOnlyDifferences} 
              onChange={(e) => setShowOnlyDifferences(e.target.checked)}
            />
            Show only differences
          </label>
        </div>
        <div className={styles.expandWrap}>
          <button onClick={expandAll} className={styles.textBtn}>Expand all</button>
          <span> | </span>
          <button onClick={collapseAll} className={styles.textBtn}>Collapse all</button>
        </div>
      </div>

      <div className={styles.tableContainer}>
        {/* Plan cards */}
        <div className={styles.stickyHeader}>
          <div className={styles.planCards}>
            {plans.map((p) => (
              <div key={p.id} className={`${styles.colPlanHead} ${p.id === "value-added" ? styles.colRecommended : ""}`}>
                <div className={styles.badgeSlot}>{p.id === "value-added" && <span className={styles.ribbon}>Recommended</span>}</div>
                <h3>{p.name}</h3>
                <div className={styles.priceSqft}>
                  {p.price ? `₹${p.price.toLocaleString("en-IN")}/sq ft` : "Price on request"}
                </div>
                <p className={styles.planType}>Best for {planRecommendations[p.id].bestFor}.</p>
                <ul className={styles.benefits}>{planRecommendations[p.id].benefits.map(benefit => <li key={benefit}>{benefit}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>

        {/* Trust strip for Structure */}
        <div className={styles.trustStrip}>
          <strong>Structure (Same in all plans):</strong> Every plan gets the same engineering: Vizag / JSW Neo steel, Ultratech / Ramco cement, M20/M25 design mix, 10 ft ceilings.
        </div>

        {/* Categories */}
        <div className={styles.tableBody}>
          <div className={`${styles.row} ${styles.comparisonHeader}`}>
            <div className={styles.colFeatureHead}>Inclusions</div>
            {plans.map(p => (
              <div key={p.id} className={`${styles.colPlanCell} ${p.id === "value-added" ? styles.colRecommendedCell : ""}`}>
                {p.name}
              </div>
            ))}
          </div>
          {categories.map(cat => {
            const isOpen = openCategories[cat];
            const catItems = pricingDifferences.filter(d => d.category === cat);
            // Quick summaries for collapsed state
            const getSummary = (pId: string) => {
              if (cat === "Doors & Windows") return pId === "basic" ? "Aluminium · 2 track" : pId === "value-added" ? "UPVC + mesh · 2.5 track" : "UPVC + mesh · 3 track";
              if (cat === "Kitchen") return pId === "basic" ? "SS Sink" : pId === "elite" ? "Granite Sink + Premium" : "SS Sink + Accessories";
              if (cat === "Bathroom") return pId === "basic" ? "Basic CP Fittings" : pId === "elite" ? "Kohler + Solar" : "Premium CP + Accessories";
              if (cat === "Painting") return pId === "basic" ? "Tractor Emulsion" : pId === "elite" ? "Royale Luxury" : "Premium Emulsion";
              if (cat === "Flooring") return pId === "basic" ? "Basic Tiles" : pId === "elite" ? "Luxury Granite/Tiles" : "Standard Tiles";
              if (cat === "Electrical") return pId === "basic" ? "Basic range" : pId === "elite" ? "Luxury range + EV" : "Premium range";
              if (cat === "Miscellaneous") return pId === "basic" ? "Basic tanks, MS Railing" : pId === "elite" ? "Larger tanks, Glass Railing" : "Standard tanks, SS Railing";
              return "";
            };

            return (
              <div key={cat} className={styles.categoryBlock}>
                <button 
                  className={styles.categoryHeader} 
                  onClick={() => toggleCategory(cat)}
                  aria-expanded={isOpen}
                >
                  <div className={styles.row}>
                    <div className={styles.colFeatureHead}>
                      <span className={styles.arrow}>{isOpen ? "▼" : "▶"}</span>
                      {cat}
                    </div>
                    {!isOpen && plans.map((p, i) => (
                      <div key={p.id} data-plan={p.name} className={`${styles.colPlanCell} ${p.id === "value-added" ? styles.colRecommendedCell : ""}`}>
                        <div className={styles.levelMeter}>
                          {[...Array(4)].map((_, idx) => (
                            <span key={idx} className={`${styles.bar} ${idx <= i ? styles.barActive : ""}`}></span>
                          ))}
                        </div>
                        <span className={styles.collapsedSummary}>{getSummary(p.id)}</span>
                      </div>
                    ))}
                  </div>
                </button>

                {isOpen && (
                  <div className={styles.categoryContent}>
                    {catItems.map((item, rowIdx) => {
                      // hide if all identical and showOnlyDifferences is true
                      const isIdentical = item.basic === item.valueAdded && item.valueAdded === item.premium && item.premium === item.elite;
                      if (showOnlyDifferences && isIdentical) return null;
                      
                      return (
                        <div key={rowIdx} className={styles.rowContent}>
                          <div className={styles.colFeatureCell}>{item.line}</div>
                          {plans.map((p) => {
                            const val = item[p.id === "value-added" ? "valueAdded" : p.id as keyof typeof item] as string;
                            const isDash = val === "—";
                            const thumbPath = item.thumbs ? item.thumbs[p.id === "value-added" ? "valueAdded" : p.id as "basic" | "premium" | "elite"] : null;
                            return (
                              <div key={p.id} data-plan={p.name} className={`${styles.colPlanCell} ${p.id === "value-added" ? styles.colRecommendedCell : ""}`}>
                                {thumbPath && (
                                  <img 
                                    src={`/assets/images/pricing/${thumbPath}`} 
                                    alt={val} 
                                    loading="lazy"
                                    className={styles.thumbnailImg} 
                                  />
                                )}
                                {isDash ? <span className={styles.mutedDash}>—</span> : <span>{val}</span>}
                              </div>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      
      {/* 6. CTA */}
      <div className={styles.ctaBand}>
        <h2>Ready to get started?</h2>
        <p>Book a free consultation and our engineer will discuss the best package for your needs.</p>
        <Link href={`/contact`} className={styles.ctaButton}>
          Book a consultation
        </Link>
      </div>
    </div>
  );
}
