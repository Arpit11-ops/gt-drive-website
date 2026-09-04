import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plug } from "@phosphor-icons/react/dist/ssr";
import { asset } from "@/lib/asset";

export function AboutFinalCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[var(--container-page)] px-6 md:px-12 lg:px-16">
        <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-8">
          {/* LEFT — headline + green flourish */}
          <div className="md:col-span-5">
            <h2 className="font-display text-[clamp(30px,3.4vw,46px)] font-extrabold uppercase leading-[1.02] tracking-[-0.035em] text-[var(--color-ink)]">
              <span className="block">Be Part of the</span>
              <span className="block">
                GT Drive <span className="text-[var(--color-green)]">Journey.</span>
              </span>
            </h2>

            <div className="mt-5 flex items-center gap-2">
              <span className="h-[3px] w-[110px] bg-[var(--color-green)]" />
              <span className="h-[3px] w-[22px] bg-[var(--color-green)]" />
              <Plug size={15} weight="fill" className="-ml-1 text-[var(--color-green)]" />
            </div>
          </div>

          {/* CENTER — CTAs */}
          <div className="flex flex-wrap items-center gap-4 md:col-span-4 md:justify-center">
            <Link
              href="/models/"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-[var(--color-green)] px-6 text-[12px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[var(--color-green-deep)]"
            >
              Explore Scooters
              <ArrowRight size={14} weight="bold" className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/dealers/"
              className="group inline-flex h-12 items-center gap-2 rounded-full border border-[var(--color-ink)] px-6 text-[12px] font-bold uppercase tracking-[0.08em] text-[var(--color-ink)] transition-colors hover:bg-[var(--color-ink)] hover:text-white"
            >
              Join Dealership
              <ArrowRight size={14} weight="bold" className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* RIGHT — partial scooter image bleeding in from the right edge */}
          <div className="relative hidden h-32 md:col-span-3 md:block">
            <div className="pointer-events-none absolute -right-16 top-1/2 h-64 w-[420px] -translate-y-1/2">
              <Image
                src={asset("/assets/gt-drive/gt-drive-pro-real.webp")}
                alt=""
                fill
                sizes="420px"
                className="object-contain object-right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
