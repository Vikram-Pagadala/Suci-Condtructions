import type { Metadata } from "next";
import PricingTable from "@/components/PricingTable/PricingTable";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Construction Packages & Pricing | Hyderabad Home Builders | SUCI",
  description: "Transparent construction packages in Hyderabad and Telangana. See our Basic, Standard, and Premium pricing for building your dream home.",
  keywords: "home construction cost Hyderabad, building packages Telangana, construction pricing AP, villa construction cost per sqft",
};

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
