"use client";

import React, { useState, useMemo } from "react";
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

const buildingTypes = [
  { label: "Rental / to let out", plan: "basic" },
  { label: "Our first family home", plan: "value-added" },
  { label: "Long-term family home", plan: "premium" },
  { label: "Villa / luxury home", plan: "elite" }
];

const mustHaveChips = [
  { label: "UPVC windows with mosquito mesh", minPlan: "value-added" },
  { label: "Teak pooja room door", minPlan: "value-added" },
  { label: "Bathroom accessories included", minPlan: "value-added" },
  { label: "Solar water heater provision", minPlan: "premium" },
  { label: "UPS / inverter wiring", minPlan: "premium" },
  { label: "Stainless steel staircase railing", minPlan: "premium" },
  { label: "Granite-finish kitchen sink option", minPlan: "premium" },
  { label: "EV charging point", minPlan: "elite" },
  { label: "Glass staircase railing", minPlan: "elite" },
  { label: "Piped copper gas connection", minPlan: "elite" },
  { label: "Luxury interior paint (Royale)", minPlan: "elite" }
];

const planRank = { "basic": 0, "value-added": 1, "premium": 2, "elite": 3 };

export default function PricingTable() {
  const [area, setArea] = useState(1500);
  const [buildingType, setBuildingType] = useState(buildingTypes[1]); // Default first home
  const [selectedChips, setSelectedChips] = useState<string[]>([]);
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});
  const [showOnlyDifferences, setShowOnlyDifferences] = useState(true);

  // Recommendations
  const recommendedPlanIdx = useMemo(() => {
    let rank = planRank[buildingType.plan as keyof typeof planRank];
    for (const chipLabel of selectedChips) {
      const chip = mustHaveChips.find(c => c.label === chipLabel);
      if (chip) {
        const chipRank = planRank[chip.minPlan as keyof typeof planRank];
        if (chipRank > rank) rank = chipRank;
      }
    }
    return rank;
  }, [buildingType, selectedChips]);

  const recommendedPlan = plans[recommendedPlanIdx];
  const nextPlan = recommendedPlanIdx < 3 ? plans[recommendedPlanIdx + 1] : null;

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

  // Upgrade strip text logic
  const upgradeText = (idx: number) => {
    if (idx === 0) return { diff: 200, items: ["UPVC windows", "Pooja room door", "Bathroom accessories"] };
    if (idx === 1) return { diff: 410, items: ["Solar provision", "UPS wiring", "SS railing"] };
    if (idx === 2) return { diff: null, items: ["EV charger", "Glass railing", "Copper gas line"] }; // Elite price unknown
    return null;
  };

  return (
    <div className={styles.wrapper}>
      {/* 1. Heading + area input */}
      <div className={styles.areaInputSection}>
        <h2 className={styles.sectionHeading}>Your built-up area</h2>
        <div className={styles.sliderWrap}>
          <input
            type="range"
            min="600"
            max="6000"
            step="100"
            value={area}
            onChange={(e) => setArea(Number(e.target.value))}
            className={styles.slider}
            aria-label="Built-up area"
          />
          <div className={styles.numberBoxWrap}>
            <input
              type="number"
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className={styles.numberBox}
              aria-label="Built-up area number"
            />
            <span>sq ft</span>
          </div>
        </div>
      </div>

      {/* 2. Find my plan */}
      <div className={styles.findPlanSection}>
        <h2 className={styles.sectionHeading}>Find my plan</h2>
        <div className={styles.pickerRow}>
          <div className={styles.pickerCol}>
            <h3>What are you building?</h3>
            <select
              aria-label="What are you building?"
              value={buildingType.label}
              onChange={(e) => setBuildingType(buildingTypes.find(b => b.label === e.target.value)!)}
              className={styles.select}
            >
              {buildingTypes.map(b => (
                <option key={b.label} value={b.label}>{b.label}</option>
              ))}
            </select>
          </div>
          <div className={styles.pickerCol}>
            <h3>What must it have?</h3>
            <div className={styles.chipsWrap}>
              {mustHaveChips.map(chip => (
                <button
                  key={chip.label}
                  className={`${styles.chip} ${selectedChips.includes(chip.label) ? styles.chipActive : ""}`}
                  onClick={() => {
                    setSelectedChips(prev => 
                      prev.includes(chip.label) ? prev.filter(c => c !== chip.label) : [...prev, chip.label]
                    )
                  }}
                  aria-pressed={selectedChips.includes(chip.label)}
                >
                  {chip.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className={styles.recommendationResult}>
          <p className={styles.recPrimary}>
            <strong>Recommendation: {recommendedPlan.name}</strong> 
            — Based on your selections, this is the best fit.
          </p>
          {nextPlan && nextPlan.price && (
            <p className={styles.recNudge}>
              For {formatPrice((nextPlan.price - (recommendedPlan.price || 0)))} more per sq ft ({formatPrice((nextPlan.price - (recommendedPlan.price || 0)) * area)} total), 
              <strong> {nextPlan.name}</strong> also adds {upgradeText(recommendedPlanIdx)?.items.join(", ")}.
            </p>
          )}
        </div>
      </div>

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
          <div className={`${styles.row} ${styles.planCardsRow}`}>
            <div className={styles.colFeatureHead} style={{ borderBottom: "none" }}>
              <div style={{ height: "100%", display: "flex", alignItems: "flex-end", paddingBottom: "16px" }}>
                <h3 style={{ fontSize: "24px", color: "var(--color-deccan-slate)" }}>Compare Plans</h3>
              </div>
            </div>
            {plans.map((p) => (
              <div key={p.id} className={`${styles.colPlanHead} ${p.id === "value-added" ? styles.colRecommendedHead : ""}`}>
                <div className={styles.badgeSlot}>{p.id === "value-added" && <span className={styles.ribbon}>Recommended</span>}</div>
                <h3>{p.name}</h3>
                <div className={styles.priceSqft}>
                  {p.price ? `₹${p.price.toLocaleString("en-IN")}/sq ft` : "Price on request"}
                </div>
                <div className={styles.priceTotal}>
                  {p.price ? `₹${(p.price * area).toLocaleString("en-IN")}` : ""}
                </div>
                <p className={styles.planType}>Best for {planRecommendations[p.id].bestFor}.</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.tableBody}>
          {/* Trust strip as a full-width row inside the table */}
          <div className={styles.trustStripRow}>
            <strong>Structure (Same in all plans):</strong> Every plan gets the same engineering: Vizag / JSW Neo steel, Ultratech / Ramco cement, M20/M25 design mix, 10 ft ceilings.
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
        <Link href={`/contact?plan=${recommendedPlan.name}`} className={styles.ctaButton}>
          Book a consultation
        </Link>
      </div>
    </div>
  );
}
