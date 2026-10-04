import Link from "next/link";
import { packages } from "@/data/packages";
import styles from "./page.module.css";

export default function PricingPage() {
  const formatPrice = (price: number | null) => {
    if (price === null) return "TODO";
    return `₹${price.toLocaleString("en-IN")}`;
  };

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <p className={styles.heroEyebrow}>Pricing &amp; Packages</p>
          <h1 className="display-text">Clear pricing for every budget.</h1>
        </div>
      </section>

      <section className={styles.pricingSection}>
        <div className="container">
          <div className={styles.grid}>
            {packages.map((pkg) => (
              <div key={pkg.id} className={styles.card}>
                <div className={styles.cardHeader}>
                  <h2 className={styles.packageName}>{pkg.name}</h2>
                  <div className={styles.priceBlock}>
                    <span className={styles.price}>{formatPrice(pkg.pricePerSqft)}</span>
                    <span className={styles.priceUnit}>/ sq ft</span>
                  </div>
                  <span className={styles.priceNote}>({pkg.priceNote})</span>
                </div>

                <div className={styles.cardBody}>
                  {pkg.categories.map((cat) => (
                    <div key={cat.title} className={styles.category}>
                      <h3>{cat.title}</h3>
                      <ul>
                        {cat.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className={styles.ctaBand}>
        <div className="container">
          <h2>Ready to get started?</h2>
          <p>Book a free consultation and our engineer will discuss the best package for your needs.</p>
          <Link href="/contact" className={styles.ctaButton}>
            Book a consultation
          </Link>
        </div>
      </section>
    </>
  );
}
