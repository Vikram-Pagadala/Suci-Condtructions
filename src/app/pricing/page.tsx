import type { Metadata } from "next";
import PricingTable from "@/components/PricingTable/PricingTable";
import styles from "./page.module.css";
import Breadcrumbs from "@/components/Breadcrumbs";

import { buildMetadata } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: `House Construction Cost in Hyderabad | ₹${site.packages.basic.price}–₹${site.packages.elite.price}/sq ft`,
  description: `House construction packages in Hyderabad from ₹${site.packages.basic.price} to ₹${site.packages.elite.price} per sq ft incl. GST. Compare Basic, Value Added, Premium and Elite, brands listed.`,
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Pricing", path: "/pricing" }]} />
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
