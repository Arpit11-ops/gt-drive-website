import { BrandStatement } from "@/components/BrandStatement";
import { ContactClose } from "@/components/ContactClose";
import { DealerBand } from "@/components/DealerBand";
import { Footprint } from "@/components/Footprint";
import { Hero } from "@/components/Hero";
import { ModelStoryRail } from "@/components/ModelStoryRail";
import { StoryChapters } from "@/components/StoryChapters";
import { TaglineMarquee } from "@/components/TaglineMarquee";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandStatement />
      <StoryChapters />
      <ModelStoryRail />
      <DealerBand />
      <Footprint />
      <TaglineMarquee />
      <ContactClose />
    </>
  );
}
