import Image from "next/image";
import { BatteryCharging, Factory, Gear, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { asset } from "@/lib/asset";
import { SectionKicker } from "@/components/about/SectionKicker";

type Pillar = {
  Icon: typeof Factory;
  title: string;
};

const pillars: Pillar[] = [
  { Icon: Factory, title: "Advanced\nManufacturing\nFacility" },
  { Icon: BatteryCharging, title: "In-House\nBattery\nCapability" },
  { Icon: Gear, title: "R&D\nTechnology\nInnovation" },
  { Icon: ShieldCheck, title: "Quality & Safety\nAt Every\nStep" },
];

export function AboutManufacturing() {
  return (
    <section id="manufacturing" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-[var(--container-page)] px-6 md:px-0">
        <div className="grid grid-cols-1 items-stretch gap-12 md:grid-cols-12 md:gap-0">
          {/* LEFT — copy + pillars */}
          <div className="flex flex-col justify-center md:col-span-5 md:pl-12 md:pr-10 lg:pl-16">
            <SectionKicker n="03" />
            <h2 className="font-display text-[clamp(28px,2.8vw,40px)] font-extrabold uppercase leading-[1] tracking-[-0.025em] text-[var(--color-ink)]">
              Manufacturing Excellence
            </h2>
            <p className="mt-6 max-w-md text-[14px] leading-relaxed text-[var(--color-body)]">
              In-house capability. Advanced technology. Built for India. Made for the future.
            </p>

            {/* 4 icon pillars in a row */}
            <div className="mt-12 grid grid-cols-4 gap-3 md:gap-4">
              {pillars.map((p) => (
                <div key={p.title} className="flex flex-col items-center text-center">
                  <p.Icon size={30} weight="regular" className="mb-3 text-[var(--color-green)]" />
                  <h3 className="whitespace-pre-line font-display text-[10px] font-extrabold uppercase leading-[1.25] tracking-[0.05em] text-[var(--color-ink)]">
                    {p.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — factory floor image (placeholder until real photo lands) */}
          <div className="relative min-h-[380px] overflow-hidden md:col-span-7 md:min-h-0 md:aspect-auto">
            <Image
              src={asset("/assets/gt-drive/cover-scooter-lineup.webp")}
              alt="GT Drive manufacturing floor"
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover object-center"
            />
            {/* thin green top-left angled accent, matches the "diagonal transition" note in the SRS */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 hidden w-8 bg-white md:block"
              style={{ clipPath: "polygon(0 0, 0 100%, 100% 0)" }}
            />
            {/* placeholder badge */}
            <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-[color-mix(in_srgb,var(--color-ink)_82%,transparent)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
              <Factory size={12} weight="bold" className="text-[var(--color-green)]" />
              Assembly floor
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
