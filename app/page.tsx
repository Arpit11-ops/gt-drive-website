import { BrandStatement } from "@/components/BrandStatement";
import { ContactClose } from "@/components/ContactClose";
import { DealerBand } from "@/components/DealerBand";
import { Hero } from "@/components/Hero";
import { IndiaFootprint } from "@/components/IndiaFootprint";
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
      <IndiaFootprint />
      <TaglineMarquee />
      <ContactClose />
    </>
  );
}
