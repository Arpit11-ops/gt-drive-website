import type { Metadata } from "next";
import { CompareTable } from "@/components/CompareTable";

export const metadata: Metadata = {
  title: "Compare all nine",
  description: "Side-by-side comparison of every GT Drive electric scooter, brochure-verified.",
};

export default function ComparePage() {
  return <CompareTable />;
}
