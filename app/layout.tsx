import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const display = localFont({
  src: "./fonts/archivo-latin.woff2",
  weight: "100 900",
  variable: "--font-archivo",
  display: "swap",
});

const body = localFont({
  src: "./fonts/inter-latin.woff2",
  weight: "100 900",
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "GT Drive — Electric two-wheeler brand from Houstan Innovations LLP",
    template: "%s · GT Drive",
  },
  description:
    "Explore GT Drive electric scooters, dealership opportunities and service support across India.",
  metadataBase: new URL("https://gtdrivepro.com"),
  alternates: { canonical: "/" },
  keywords: ["electric scooters India", "electric two wheelers", "GT Drive", "electric scooter dealership", "electric mobility Uttar Pradesh"],
  openGraph: {
    type: "website", siteName: "GT Drive", locale: "en_IN",
    title: "GT Drive electric scooters", description: "Electric scooters for everyday city travel, backed by dealership and service support across India.",
    url: "https://gtdrivepro.com/",
  },
  twitter: { card: "summary_large_image", title: "GT Drive electric scooters", description: "Explore electric scooters made for everyday city travel." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "Organization", name: "GT Drive", legalName: "Houstan Innovations LLP", url: "https://gtdrivepro.com", email: "info@gtdrivepro.com", telephone: "+91 70112 06686", sameAs: ["https://www.instagram.com/gtdrivepro/", "https://www.facebook.com/p/GT-DRIVE-PRO-61587639792258/"],
        }) }} />
      </body>
    </html>
  );
}
