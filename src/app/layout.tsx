import type { Metadata } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import JsonLd from "@/components/JsonLd/JsonLd";
import "./globals.css";
import { site } from "@/lib/site";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-bodoni",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  robots: { index: true, follow: true, googleBot: { "max-image-preview": "large", "max-snippet": -1 } },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || "",
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION || "",
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon-48.png', type: 'image/png', sizes: '48x48' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', type: 'image/png', sizes: '180x180' }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "GeneralContractor",
        "@id": `${site.url}/#business`,
        "name": site.name,
        "url": site.url,
        "logo": `${site.url}/assets/logos/suci-logo.png`,
        "image": `${site.url}/og/default.jpg`,
        "description": "Engineer-led construction company in Hyderabad building villas, independent houses and commercial buildings across Telangana and Andhra Pradesh.",
        "telephone": site.phoneE164,
        "email": site.email,
        "foundingDate": site.founded,
        "priceRange": "₹2,090–₹2,950 per sq ft",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "2-4-216, Road No. 9A, Snehapuri Colony, New Nagole",
          "addressLocality": "Hyderabad",
          "addressRegion": "Telangana",
          "postalCode": site.pinCode,
          "addressCountry": "IN"
        },
        "geo": { "@type": "GeoCoordinates", "latitude": site.geo.latitude, "longitude": site.geo.longitude },
        "hasMap": site.socials.googleMaps,
        "openingHoursSpecification": [{
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:30",
          "closes": "18:30"
        }],
        "areaServed": [
          { "@type": "City", "name": "Hyderabad" },
          { "@type": "State", "name": "Telangana" },
          { "@type": "State", "name": "Andhra Pradesh" }
        ],
        "sameAs": [
          site.socials.instagram,
          site.socials.youtube
        ],
        "founder": { "@type": "Person", "name": "C. A. Prasad", "jobTitle": "Founder & Director" }
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        "url": site.url,
        "name": site.name,
        "inLanguage": "en-IN",
        "publisher": { "@id": `${site.url}/#business` }
      }
    ]
  };

  return (
    <html lang="en-IN">
      <body className={`${bodoni.variable} ${manrope.variable}`}>
        <JsonLd data={jsonLd} />
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
