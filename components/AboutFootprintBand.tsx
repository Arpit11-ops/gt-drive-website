import Link from "next/link";
import { ArrowRight, MapPin } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";
import { locations } from "@/lib/models";

export function AboutFootprintBand() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-ink)] text-white">
      <div className="mx-auto grid max-w-[var(--container-page)] grid-cols-1 gap-16 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <Reveal>
            <h2 className="text-[clamp(36px,4.6vw,64px)] font-semibold leading-[0.98] tracking-[-0.03em]">
              Five states.
              <br />
              <span className="text-white/55">One India-wide base.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 max-w-md text-base leading-relaxed text-white/70">
              GT Drive&apos;s production and assembly sit across Uttar Pradesh,
              Bihar, Maharashtra, Madhya Pradesh, and Telangana — closer to
              riders and dealer partners, wherever they are.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <Link
              href="/locations/"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-green)] transition-colors hover:text-white"
            >
              See every plant address
              <ArrowRight size={16} weight="bold" />
            </Link>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {locations.map(({ state }, index) => (
              <Reveal key={state} delay={80 + index * 60}>
                <li className="flex items-center gap-4 py-6">
                  <MapPin
                    weight="light"
                    className="h-6 w-6 text-[var(--color-green)]"
                  />
                  <span className="text-2xl font-medium tracking-tight text-white">
                    {state}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
