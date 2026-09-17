import type { Metadata } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

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
  title: "SUCI Constructions — Engineer-Led Construction Company in Hyderabad",
  description: "Structural engineers who design and build villas, homes and commercial spaces across Hyderabad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/assets/images/hero/building-final.webp" type="image/webp" />
        <link rel="preload" as="image" href="/assets/images/hero/building-structure.webp" type="image/webp" />
      </head>
      <body className={`${bodoni.variable} ${manrope.variable}`}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
