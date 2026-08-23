import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";

const display = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "GT Drive — Electric two-wheeler brand from Houstan Innovations LLP",
    template: "%s · GT Drive",
  },
  description:
    "GT Drive is the electric two-wheeler brand from Houstan Innovations LLP — nine scooters, engineered and built in India, sold through a growing pan-India dealer network.",
  metadataBase: new URL("https://gtdrivepro.com"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
