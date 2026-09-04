import Link from "next/link";
import { Reveal } from "@/components/Reveal";

const support = [
  "Attractive dealership benefits",
  "Marketing and branding support",
  "Inventory and business support",
  "Service and technical support",
  "Training and operational guidance",
];

export function DealerBand() {
  return (
    <section
      aria-labelledby="dealer-headline"
      className="relative overflow-hidden bg-[#111111] text-white"
    >
      <div className="mx-auto grid max-w-[var(--container-page)] gap-14 px-6 py-28 md:grid-cols-[1.2fr_1fr] md:gap-20 md:px-10 md:py-40">
        <div>
          <Reveal>
            <h2
              id="dealer-headline"
              className="text-[clamp(44px,6vw,96px)] leading-[0.94] tracking-[-0.03em] text-white"
            >
              Open a GT Drive <span className="text-[var(--color-green)]">showroom</span>, in your city.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-md text-[15px] leading-[1.65] text-white/70 md:text-base">
              Partner with GT Drive and be part of India&apos;s growing electric
              mobility revolution. Our dealer programme covers five areas of
              support, from day one.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                href="/dealers/"
                className="inline-flex h-[52px] items-center justify-center rounded-sm bg-[var(--color-green)] px-6 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-green-deep)]"
              >
                Enquire about dealership
              </Link>
            </div>
          </Reveal>
        </div>
        <Reveal delay={200} className="md:mt-16">
          <ul className="flex flex-col divide-y divide-white/15 border-y border-white/15">
            {support.map((item) => (
              <li
                key={item}
                className="flex items-baseline gap-4 py-5 text-[15px] font-medium text-white md:text-base"
              >
                <span
                  aria-hidden="true"
                  className="text-lg leading-none text-[var(--color-green)]"
                >
                  •
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
