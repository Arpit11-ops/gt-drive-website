import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye, Target, Wind } from "@phosphor-icons/react/dist/ssr";
import { asset } from "@/lib/asset";
import { SectionKicker } from "@/components/about/SectionKicker";

export function AboutWhoAndMission() {
  return (
    <section className="bg-[var(--color-green)] py-16 md:py-20">
      <div className="mx-auto max-w-[var(--container-page)] px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-14">
          {/* 01 — WHO WE ARE */}
          <div className="gt-card grid grid-cols-1 gap-8 rounded-[1.5rem] bg-white p-6 shadow-[0_10px_30px_rgba(17,17,17,0.04)] md:grid-cols-5 md:gap-6 md:p-8">
            <div className="md:col-span-3">
              <SectionKicker n="01" />
              <h2 className="font-display text-[clamp(28px,2.6vw,36px)] font-extrabold uppercase leading-[1] tracking-[-0.025em] text-[var(--color-ink)]">
                Who We Are
              </h2>
              <p className="mt-6 max-w-md text-[14px] leading-relaxed text-[var(--color-body)]">
                GT Drive is the electric two-wheeler brand of{" "}
                <span className="font-semibold text-[var(--color-green-deep)]">Houstan Innovations LLP</span>
                , headquartered in Greater Noida. The brand is building electric scooters backed by in-house
                lithium battery capability, manufacturing infrastructure and a growing network across India.
              </p>
              <div className="mt-8">
                <Link
                  href="#manufacturing"
                  className="group inline-flex h-10 items-center gap-2 rounded-full border border-[var(--color-ink)] px-5 text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--color-ink)] transition-colors hover:bg-[var(--color-ink)] hover:text-white"
                >
                  See how we build
                  <ArrowRight size={13} weight="bold" className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Clean-air image and message */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[var(--color-stage)] md:col-span-2 md:aspect-auto md:min-h-[280px]">
              <Image
                src={asset("/assets/gt-drive/about-clean-air-mirror.png")}
                alt="A greener city journey reflected in a scooter mirror"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover object-[62%_center]"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center gap-2.5 bg-[color-mix(in_srgb,var(--color-ink)_88%,transparent)] px-4 py-3 text-[10px] font-semibold leading-snug tracking-[0.08em] text-white">
                <Wind size={17} weight="bold" className="shrink-0 text-[var(--color-green)]" />
                <span>Let’s clean air be a part of every journey.</span>
              </div>
            </div>
          </div>

          {/* 02 — OUR MISSION & VISION */}
          <div className="gt-card rounded-[1.5rem] bg-white p-6 shadow-[0_10px_30px_rgba(17,17,17,0.04)] md:p-8">
            <SectionKicker n="02" />
            <h2 className="font-display text-[clamp(28px,2.6vw,36px)] font-extrabold uppercase leading-[1] tracking-[-0.025em] text-[var(--color-ink)]">
              Our Vision &amp; Mission
            </h2>

            <div className="relative mt-10 grid grid-cols-2 gap-8">
              {/* vertical divider */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-y-2 left-1/2 -translate-x-1/2 w-px bg-[var(--color-line)]"
              />

              {/* VISION */}
              <div className="flex flex-col items-center pr-2 text-center">
                <span className="mb-4 grid h-14 w-14 place-items-center rounded-full bg-[color-mix(in_srgb,var(--color-green)_10%,white)]">
                  <Eye size={26} weight="regular" className="text-[var(--color-green-deep)]" />
                </span>
                <h3 className="font-display text-[12px] font-extrabold uppercase tracking-[0.15em] text-[var(--color-green-deep)]">
                  Our Vision
                </h3>
                <p className="mt-4 max-w-[200px] text-[12.5px] leading-relaxed text-[var(--color-body)]">
                  To build a trusted Indian electric mobility brand with a strong product,
                  manufacturing and dealership ecosystem that makes EV adoption simpler and more accessible.
                </p>
              </div>

              {/* MISSION */}
              <div className="flex flex-col items-center pl-2 text-center">
                <span className="mb-4 grid h-14 w-14 place-items-center rounded-full bg-[color-mix(in_srgb,var(--color-green)_10%,white)]">
                  <Target size={26} weight="regular" className="text-[var(--color-green-deep)]" />
                </span>
                <h3 className="font-display text-[12px] font-extrabold uppercase tracking-[0.15em] text-[var(--color-green-deep)]">
                  Our Mission
                </h3>
                <p className="mt-4 max-w-[200px] text-[12.5px] leading-relaxed text-[var(--color-body)]">
                  To make electric mobility more accessible with reliable products, strong technology
                  and dependable support for riders and business partners across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
