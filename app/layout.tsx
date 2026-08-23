import type { Metadata } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileContactBar } from "@/components/ContactActions";

const display = Barlow_Condensed({ subsets: ["latin"], weight: ["500", "600", "700", "800"], style: ["normal", "italic"], variable: "--font-display" });
const body = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body" });

export const metadata: Metadata = {
  title: { default: "GT Drive | Electric Scooters", template: "%s | GT Drive" },
  description: "Explore GT Drive electric scooters, product information, dealership opportunities, plant locations, and contact options.",
  metadataBase: new URL("https://gtdrivepro.com"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body><Header /><main>{children}</main><Footer /><MobileContactBar /></body>
    </html>
  );
}
