import type { Metadata } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
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
  title: "SUCI Constructions — Engineer-Led Construction Company in Telangana and Andhra Pradesh",
  description: "Structural engineers who design and build villas, homes and commercial spaces. We serve both Telangana and Andhra Pradesh.",
  openGraph: {
    images: '/icon.png',
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
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/assets/images/hero/hero-finished-synced.webp" type="image/webp" />
        <link rel="preload" as="image" href="/assets/images/hero/hero-structure-synced.webp" type="image/webp" />
      </head>
      <body className={`${bodoni.variable} ${manrope.variable}`}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
