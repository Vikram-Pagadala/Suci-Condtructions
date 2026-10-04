import PricingTable from "@/components/PricingTable/PricingTable";
import styles from "./page.module.css";

export default function PricingPage() {
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
          <PricingTable />
        </div>
      </section>
    </>
  );
}
