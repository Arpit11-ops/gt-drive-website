import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export function BrandStatement() {
  return (
    <section
      aria-labelledby="brand-headline"
      className="border-y border-[var(--color-line)]"
    >
      <div className="mx-auto grid max-w-[var(--container-page)] grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-[1.15fr_0.85fr] md:gap-16 md:px-10 md:py-24 lg:gap-20">
        <div>
          <Reveal>
            <h2
              id="brand-headline"
              className="max-w-[920px] text-[clamp(44px,5.5vw,96px)] leading-[0.94] tracking-[-0.04em]"
            >
              <span className="block">Nine models.</span>
              <span className="block">Five states.</span>
              <span className="block text-[var(--color-green)]">One India.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-10 max-w-[520px] text-[15px] leading-[1.65] text-[var(--color-body)] md:text-base">
              Headquartered in Greater Noida, Houstan Innovations LLP builds the
              GT Drive electric two-wheeler range with in-house lithium battery
              capability and manufacturing across five Indian states.
            </p>
          </Reveal>
        </div>

        <Reveal delay={160} className="w-full md:ml-auto md:max-w-[520px]">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
            <Image
              src="/assets/gt-drive/one-india-atmosphere.webp"
              alt="Golden-hour Indian road with a lone electric scooter in the distance"
              fill
              sizes="(min-width: 768px) 520px, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
