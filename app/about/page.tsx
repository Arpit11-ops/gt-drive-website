import type { Metadata } from "next";
import { AboutDirectorAndNetwork } from "@/components/about/AboutDirectorAndNetwork";
import { AboutFinalCTA } from "@/components/about/AboutFinalCTA";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutManufacturing } from "@/components/about/AboutManufacturing";
import { AboutWhoAndMission } from "@/components/about/AboutWhoAndMission";
import { ContactClose } from "@/components/ContactClose";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "GT Drive is the electric two-wheeler brand of Houstan Innovations LLP, headquartered in Greater Noida, with in-house battery capabilities, strong manufacturing infrastructure and a growing network across India.",
};

export default function AboutPage() {
  return (
    <>
      <Reveal className="motion-page-enter"><AboutHero /></Reveal>
      <Reveal delay={80}><AboutWhoAndMission /></Reveal>
      <Reveal delay={80}><AboutManufacturing /></Reveal>
      <Reveal delay={80}><AboutDirectorAndNetwork /></Reveal>
      <Reveal delay={80}><AboutFinalCTA /></Reveal>
      <Reveal delay={80}><ContactClose /></Reveal>
    </>
  );
}
