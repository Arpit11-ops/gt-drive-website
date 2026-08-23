import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-tagline"
      className="relative flex min-h-[calc(100svh-44px)] flex-col justify-between overflow-hidden bg-white"
    >
      {/* UPPER ZONE — the scooter */}
      <div className="relative mx-auto flex w-full max-w-[var(--container-page)] flex-1 items-center justify-center px-6 pt-6 md:px-10 md:pt-10">
        {/* Top-left identifier — desktop only */}
        <div className="absolute left-6 top-6 z-10 hidden max-w-[240px] text-[14px] font-medium leading-[1.4] md:left-10 md:top-10 md:block">
          <div className="text-[var(--color-ink)]">
            <span>G</span>
            <span className="italic text-[var(--color-green)]">T</span>
            <span> DRIVE</span>
          </div>
          <div className="mt-1 font-normal text-[var(--color-body)]">Electric two-wheeler brand,</div>
          <div className="font-normal text-[var(--color-body)]">engineered and built in India.</div>
        </div>

        {/* Top-right featured mark — desktop only */}
        <div className="absolute right-6 top-6 z-10 hidden text-[12px] text-[var(--color-muted)] md:right-10 md:top-10 md:block">
          Model featured · GT — Drive Pro
        </div>

        {/* The scooter */}
        <div className="relative flex w-full items-center justify-center">
          <Image
            src="/assets/gt-drive/generated/hero-drive-pro.png"
            alt="GT Drive Pro electric scooter"
            width={1536}
            height={1024}
            priority
            className="max-h-[52vh] w-auto max-w-full object-contain md:max-h-[58vh]"
          />
        </div>
      </div>

      {/* Mobile-only featured mark (below scooter) */}
      <div className="mx-auto w-full max-w-[var(--container-page)] px-6 pt-2 text-[11px] text-[var(--color-muted)] md:hidden">
        Model featured · GT — Drive Pro
      </div>

      {/* LOWER ZONE — tagline + supporting */}
      <div className="mx-auto grid w-full max-w-[var(--container-page)] shrink-0 gap-6 px-6 pb-8 pt-6 md:grid-cols-[1.5fr_1fr] md:items-end md:gap-16 md:px-10 md:pb-10 md:pt-4">
        <h1
          id="hero-tagline"
          className="text-[clamp(44px,9vw,132px)] leading-[0.92]"
        >
          <span className="block text-[var(--color-ink)]">Drive Clean.</span>
          <span className="block text-[var(--color-green)]">Go Green.</span>
        </h1>

        <div className="flex flex-col gap-5 md:pb-3">
          <p className="max-w-md text-[14px] leading-[1.55] text-[var(--color-body)] md:text-[15px]">
            The electric two-wheeler brand from Houstan Innovations LLP. Nine
            scooters, engineered and built in India, sold through a growing
            pan-India dealer network.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-[13px]">
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
