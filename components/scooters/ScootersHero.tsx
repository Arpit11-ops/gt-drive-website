import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { asset } from "@/lib/asset";

export function ScootersHero() {
  return (
    <section className="relative isolate overflow-hidden bg-white pt-20">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-[var(--container-page)] grid-cols-1 md:grid-cols-12">
        {/* LEFT — copy */}
        <div className="relative z-10 col-span-1 flex flex-col justify-center px-6 py-14 md:col-span-5 md:px-12 md:py-16 lg:px-16">
          <p className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--color-green-deep)]">
            <span className="font-display text-[15px] font-extrabold italic leading-none text-[var(--color-green)]">01</span>
            <span className="h-[2px] w-6 bg-[var(--color-green)]" />
            Hero Product
          </p>

          <h1 className="font-display text-[clamp(48px,6.4vw,96px)] font-extrabold uppercase leading-[0.95] tracking-[-0.045em] text-[var(--color-ink)]">
            GT <span className="text-[var(--color-green)]">Flying.</span>
          </h1>

          <p className="mt-6 max-w-sm text-[16px] leading-relaxed text-[var(--color-body)]">
            Designed for the city.
            <br />
            Built for the future.
          </p>

          <div className="mt-10 flex flex-col items-start gap-6">
            <Link
              href="/models/gt-flying/"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-[var(--color-green)] px-6 text-[13px] font-bold text-white transition-colors hover:bg-[var(--color-green-deep)]"
            >
              Explore GT Flying
              <ArrowRight size={15} weight="bold" className="transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/models/"
              className="group inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
            >
              <ArrowDown size={13} weight="bold" className="text-[var(--color-green)]" />
              Explore All Models
            </Link>
          </div>
        </div>

        {/* RIGHT — GT Flying image with diagonal green accent + faded GT watermark */}
        <div className="relative col-span-1 min-h-[420px] md:col-span-7 md:min-h-0">
          {/* background diagonal light-grey wedge on the far right */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-14 hidden w-[42%] bg-[var(--color-stage)] md:block"
            style={{ clipPath: "polygon(100% 0, 100% 100%, 0 82%, 26% 18%)" }}
          />
          {/* faded GT watermark */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-4 top-1/2 hidden -translate-y-1/2 select-none font-display text-[180px] font-black leading-none tracking-[-0.06em] text-black/[0.045] md:block lg:right-12 lg:text-[240px]"
          >
            GT
          </div>

          {/* hero scooter on top */}
          <div className="relative z-[1] h-full w-full">
            <Image
              src={asset("/assets/gt-drive/gt-flying-e4-real.webp")}
              alt="GT Flying electric scooter"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-contain object-center"
            />
          </div>

          {/* green vertical accent stripe on the far right edge */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-[2] hidden w-10 bg-[var(--color-green)] md:block"
            style={{ clipPath: "polygon(100% 0, 0 55%, 100% 100%)" }}
          />
        </div>
      </div>
    </section>
  );
}
