import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { asset } from "@/lib/asset";

export function AboutDirectionSections() {
  return (
    <>
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-[var(--container-page)] items-center gap-12 px-6 md:grid-cols-12 md:gap-16 md:px-12 lg:px-16">
          <div className="md:col-span-5">
            <p className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--color-green-deep)]">
              <span className="h-[2px] w-8 bg-[var(--color-green)]" />
              The road ahead
            </p>
            <h2 className="font-display text-[clamp(32px,4vw,58px)] font-extrabold uppercase leading-[0.96] tracking-[-0.04em] text-[var(--color-ink)]">
              A cleaner route for everyday life.
            </h2>
            <p className="mt-7 max-w-md text-[15px] leading-relaxed text-[var(--color-body)]">
              Change does not have to feel complicated. It can begin with one practical ride, one dependable charge,
              and a better choice made every day.
            </p>
            <Link
              href="/models/"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-green)] px-6 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[var(--color-green-deep)]"
            >
              Find your ride
              <ArrowRight size={15} weight="bold" className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="gt-card relative aspect-square overflow-hidden rounded-[1.5rem] bg-[var(--color-stage)] md:col-span-7">
            <Image
              src={asset("/assets/gt-drive/about-green-route.png")}
              alt="A scooter travelling along a tree-lined road"
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-stage)] py-20 md:py-28">
        <div className="mx-auto grid max-w-[var(--container-page)] items-center gap-12 px-6 md:grid-cols-12 md:gap-16 md:px-12 lg:px-16">
          <div className="gt-card relative order-2 aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-white md:order-1 md:col-span-7">
            <Image
              src={asset("/assets/gt-drive/about-change-direction.png")}
              alt="A green road turning away from a petrol route"
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2 md:col-span-5">
            <p className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--color-green-deep)]">
              <span className="h-[2px] w-8 bg-[var(--color-green)]" />
              Make the shift
            </p>
            <h2 className="font-display text-[clamp(32px,4vw,58px)] font-extrabold uppercase leading-[0.96] tracking-[-0.04em] text-[var(--color-ink)]">
              Change the direction.
            </h2>
            <p className="mt-7 max-w-md text-[15px] leading-relaxed text-[var(--color-body)]">
              GT Drive is here for the moment when a better direction becomes real: reliable electric scooters,
              thoughtful technology, and support that stays with you after the first mile.
            </p>
            <Link
              href="/contact/"
              className="group mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--color-ink)] px-6 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-[var(--color-ink)] transition-colors hover:bg-[var(--color-ink)] hover:text-white"
            >
              Talk to GT Drive
              <ArrowRight size={15} weight="bold" className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
