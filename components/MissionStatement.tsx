import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export function MissionStatement() {
  return (
    <section className="bg-white px-6 sm:px-8">
      <div className="mx-auto max-w-[var(--container-page)] py-20 sm:py-28">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
              Our mission
            </h2>
          </Reveal>
          <div className="lg:col-span-8">
            <Reveal delay={80}>
              <p className="mb-8 text-3xl leading-tight font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl">
                Make electric mobility more accessible with reliable products,
                strong technology, and dependable support.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="max-w-4xl text-xl leading-relaxed text-black/60">
                GT Drive&apos;s vision is to build a trusted Indian electric mobility
                brand with a strong product, manufacturing, and dealership
                ecosystem that makes EV adoption simpler for riders and business partners.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={200} className="mt-16">
          <div className="overflow-hidden rounded-3xl border border-black/5 bg-[var(--color-stage)]">
            <Image
              src="/assets/gt-drive/cover-scooter-lineup.png"
              alt="GT Drive electric scooter lineup"
              width={970}
              height={385}
              sizes="(min-width: 1440px) 1360px, 100vw"
              className="h-auto w-full object-contain sm:h-[480px] lg:h-[600px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
