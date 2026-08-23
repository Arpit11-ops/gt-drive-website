import { BrandStatement } from "@/components/BrandStatement";
import { ContactClose } from "@/components/ContactClose";
import { DealerBand } from "@/components/DealerBand";
import { Footprint } from "@/components/Footprint";
import { Hero } from "@/components/Hero";
import { ModelRange } from "@/components/ModelRange";
import { ModelSpotlight } from "@/components/ModelSpotlight";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandStatement />
      <ModelSpotlight />
      <ModelRange />
      <DealerBand />
      <Footprint />
      <ContactClose />
    </>
  );
}
