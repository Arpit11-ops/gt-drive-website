import Image from "next/image";
import Link from "next/link";

import { MaskReveal } from "@/components/motion/MaskReveal";
import { ScooterReveal } from "@/components/motion/ScooterReveal";
import { Reveal } from "@/components/Reveal";
import { getModel, sharedFeatures } from "@/lib/models";

const linkClass =
  "group inline-flex w-fit items-center gap-5 text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-ink)] transition-colors hover:text-[var(--color-green-deep)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-green-deep)]";

const tagClass =
  "border border-[var(--color-ink)] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em]";

export function StoryChapters() {
  const drivePro = getModel("gt-drive-pro")!;
  const braking = drivePro.specs.find(
    (spec) => spec.label === "Braking technology",
  );
  const controller = drivePro.specs.find((spec) => spec.label === "Controller");

  return (
    <section
      id="features"
      aria-label="GT Drive stories"
      className="border-b border-[var(--color-line)] bg-[var(--color-stage)]"
    >
      <article className="w-full grid grid-cols-1 border-x border-[var(--color-line)] md:grid-cols-12">
        <div className="order-2 flex min-h-[500px] flex-col justify-between border-t border-[var(--color-line)] bg-white p-10 md:order-1 md:col-span-5 md:min-h-0 md:border-r md:border-t-0 md:p-20">
          <Reveal>
            <div>
              <h2 className="text-[clamp(3rem,5.7vw,6.25rem)] uppercase leading-[0.86] tracking-[-0.055em] text-[var(--color-ink)]">
                <MaskReveal as="span" className="block">
                  GT — Drive
                </MaskReveal>
                <MaskReveal as="span" className="block text-[var(--color-green)]" delay={140}>
                  Pro
                </MaskReveal>
              </h2>
              <p className="mt-8 max-w-md text-[15px] leading-7 text-[var(--color-body)]">
                {drivePro.lead}
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-14">
              <div className="flex flex-wrap gap-2">
                {braking ? (
                  <span className={tagClass}>{braking.value}</span>
                ) : null}
                {controller ? (
                  <span className={tagClass}>
                    {controller.value} controller
                  </span>
                ) : null}
              </div>
              <Link
                href={`/models/${drivePro.slug}/`}
                className={`${linkClass} mt-9`}
              >
                View model
                <span
                  aria-hidden="true"
                  className="text-xl transition-transform group-hover:translate-x-1"
                >
                  ⟶
                </span>
              </Link>
            </div>
          </Reveal>
        </div>

        <ScooterReveal className="group relative order-1 h-[60vh] min-h-[440px] overflow-hidden rounded-3xl bg-white md:order-2 md:col-span-7 md:h-[80vh] md:min-h-[660px]">
          <Image
            src={drivePro.image}
            alt={drivePro.shortName}
            fill
            sizes="(min-width: 768px) 58vw, 100vw"
            className="object-cover grayscale transition duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0"
          />
          <div className="pointer-events-none absolute inset-0 bg-black/10 transition-colors duration-700 group-hover:bg-transparent" />
        </ScooterReveal>
      </article>

      <article className="w-full grid grid-cols-1 border-x border-t border-[var(--color-line)] md:grid-cols-12">
        <ScooterReveal className="group relative order-1 h-[60vh] min-h-[440px] overflow-hidden rounded-3xl bg-white md:col-span-7 md:h-[80vh] md:min-h-[660px] md:border-r md:border-[var(--color-line)]">
          <Image
            src="/assets/gt-drive/cover-scooter-lineup.webp"
            alt="GT Drive electric scooter range"
            fill
            sizes="(min-width: 768px) 58vw, 100vw"
            className="object-cover grayscale transition duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0"
          />
          <div className="pointer-events-none absolute inset-0 bg-black/10 transition-colors duration-700 group-hover:bg-transparent" />
        </ScooterReveal>

        <div className="order-2 flex min-h-[500px] flex-col justify-between border-t border-[var(--color-line)] bg-white p-10 md:col-span-5 md:min-h-0 md:border-t-0 md:p-20">
          <Reveal>
            <div>
              <h2 className="text-[clamp(3rem,5.7vw,6.25rem)] uppercase leading-[0.86] tracking-[-0.055em] text-[var(--color-ink)]">
                <MaskReveal as="span" className="block">
                  One
                </MaskReveal>
                <MaskReveal as="span" className="block text-[var(--color-green)]" delay={140}>
                  feature set
                </MaskReveal>
              </h2>
              <p className="mt-8 max-w-md text-[15px] leading-7 text-[var(--color-body)]">
                Every GT Drive scooter ships with the same core — long battery
                life, hydraulic suspension, LED projector head lamp,
                regenerative braking, and remote lock. What changes between
                models is scale, stance, and colour.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-14">
              <div className="flex flex-wrap gap-2">
                {sharedFeatures.slice(1, 3).map((feature) => (
                  <span key={feature} className={tagClass}>
                    {feature}
                  </span>
                ))}
              </div>
              <Link href="/models/" className={`${linkClass} mt-9`}>
                Explore all models
                <span
                  aria-hidden="true"
                  className="text-xl transition-transform group-hover:translate-x-1"
                >
                  ⟶
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </article>
    </section>
  );
}
