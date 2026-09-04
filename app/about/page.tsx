import type { Metadata } from "next";
import { AboutDirectorAndNetwork } from "@/components/about/AboutDirectorAndNetwork";
import { AboutFinalCTA } from "@/components/about/AboutFinalCTA";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutManufacturing } from "@/components/about/AboutManufacturing";
import { AboutWhoAndMission } from "@/components/about/AboutWhoAndMission";

export const metadata: Metadata = {
  title: "About",
  description:
    "About GT Drive and Houstan Innovations LLP — an Indian electric two-wheeler brand headquartered in Greater Noida, with manufacturing across five states and a nine-model catalogue.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutWhoAndMission />
      <AboutManufacturing />
      <AboutDirectorAndNetwork />
      <AboutFinalCTA />
    </>
  );
}
