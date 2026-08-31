import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { asset } from "@/lib/asset";

export function MissionStatement() {
  return (
    <section className="bg-white px-6 sm:px-8">
      <div className="mx-auto max-w-[var(--container-page)] py-20 sm:py-28">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <p className="text-3xl leading-[1.1] font-semibold tracking-tight text-black sm:text-4xl lg:text-[42px]">
              Our mission is to make electric mobility more accessible with{" "}
              <span className="text-[var(--color-green)]">
                reliable products, strong technology, and dependable support.
              </span>
            </p>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5 lg:col-start-8">
            <p className="text-3xl leading-[1.1] font-semibold tracking-tight text-black sm:text-4xl lg:text-[42px]">
              Our vision is to build a trusted Indian EV brand with the{" "}
              <span className="text-[var(--color-green)]">
                product, manufacturing, and dealership ecosystem
              </span>{" "}
              to make adoption simpler across India.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200} className="mt-20">
          <div className="overflow-hidden rounded-3xl border border-black/5 bg-[var(--color-stage)]">
            <Image
              src={asset("/assets/gt-drive/cover-scooter-lineup.webp")}
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
