import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-tagline"
      className="relative overflow-hidden bg-white"
    >
      {/* UPPER ZONE — the scooter */}
      <div className="relative mx-auto flex max-w-[var(--container-page)] items-end justify-center px-6 pt-14 md:px-10 md:pt-20">
        {/* Top-left identifier — desktop only */}
        <div className="absolute left-10 top-20 z-10 hidden max-w-[240px] text-[14px] font-medium leading-[1.4] md:block">
          <div className="text-[var(--color-ink)]">
            <span>G</span>
            <span className="italic text-[var(--color-green)]">T</span>
            <span> DRIVE</span>
          </div>
          <div className="mt-1 font-normal text-[var(--color-body)]">Electric two-wheeler brand,</div>
          <div className="font-normal text-[var(--color-body)]">engineered and built in India.</div>
        </div>

        {/* Top-right featured mark — desktop only */}
        <div className="absolute right-10 top-20 z-10 hidden text-[12px] text-[var(--color-muted)] md:block">
          Model featured · GT — Drive Pro
        </div>

        {/* The scooter */}
        <div className="relative w-full max-w-[900px]">
          <Image
            src="/assets/gt-drive/generated/hero-drive-pro.png"
            alt="GT Drive Pro electric scooter"
            width={1536}
            height={1024}
            priority
            className="mx-auto h-auto w-full object-contain"
          />
        </div>
      </div>

      {/* Mobile-only featured mark (below scooter) */}
      <div className="mx-auto max-w-[var(--container-page)] px-6 pt-2 text-[11px] text-[var(--color-muted)] md:hidden">
        Model featured · GT — Drive Pro
      </div>

      {/* LOWER ZONE — tagline + supporting */}
      <div className="mx-auto grid max-w-[var(--container-page)] gap-8 px-6 pt-6 pb-20 md:grid-cols-[1.5fr_1fr] md:gap-16 md:px-10 md:pt-4 md:pb-28">
        <h1
          id="hero-tagline"
          className="text-[clamp(48px,11vw,168px)] leading-[0.92]"
        >
          <span className="block text-[var(--color-ink)]">Drive Clean.</span>
          <span className="block text-[var(--color-green)]">Go Green.</span>
        </h1>

        <div className="flex flex-col justify-end gap-6 md:gap-8">
          <p className="max-w-md text-[15px] leading-[1.55] text-[var(--color-body)] md:text-base">
            The electric two-wheeler brand from Houstan Innovations LLP. Nine
            scooters, engineered and built in India, sold through a growing
            pan-India dealer network.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
            <Link
              href="/models/"
              className="font-semibold text-[var(--color-green-deep)] underline underline-offset-[6px]"
            >
              Explore the range
            </Link>
            <span className="text-[var(--color-muted)]">·</span>
            <Link
              href="/compare/"
              className="font-semibold text-[var(--color-green-deep)] underline underline-offset-[6px]"
            >
              Compare all nine
            </Link>
            <span className="text-[var(--color-muted)]">·</span>
            <Link
              href="/dealers/"
              className="font-semibold text-[var(--color-green-deep)] underline underline-offset-[6px]"
            >
              Become a dealer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
