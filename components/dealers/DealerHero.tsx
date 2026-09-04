import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowDown, DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import { asset } from "@/lib/asset";

export function DealerHero() {
  return (
    <section className="relative isolate overflow-hidden bg-white pt-20">
      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-[var(--container-page)] grid-cols-1 md:grid-cols-12">
        {/* LEFT — copy */}
        <div className="relative z-10 col-span-1 flex flex-col justify-center px-6 py-12 md:col-span-6 md:px-12 md:py-16 lg:px-16">
          <p className="mb-8 text-[11px] font-bold tracking-[0.2em] text-[var(--color-green-deep)] uppercase">
            GT Drive <span className="mx-2 text-[var(--color-line)]">|</span> Dealership Partnership
          </p>

          <h1 className="font-display text-[clamp(40px,5.4vw,78px)] font-extrabold leading-[0.95] tracking-[-0.045em] text-[var(--color-ink)]">
            <span className="block whitespace-nowrap">BRING GT</span>
            <span className="block whitespace-nowrap">TO YOUR <span className="text-[var(--color-green)]">CITY.</span></span>
          </h1>

          <p className="mt-8 max-w-md text-[15px] leading-relaxed text-[var(--color-body)] md:text-base">
            Partner with GT Drive and build your business in the growing electric mobility market.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              href="#dealer-apply"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-[var(--color-green)] px-6 text-[13px] font-bold text-white transition-colors hover:bg-[var(--color-green-deep)]"
            >
              Apply for Dealership
              <ArrowRight size={15} weight="bold" className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="#brochure"
              className="group inline-flex items-center gap-2 text-[13px] font-bold text-[var(--color-ink)] transition-colors hover:text-[var(--color-green-deep)]"
            >
              Download Brochure
              <DownloadSimple size={15} weight="bold" className="transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>

          <div className="mt-16 hidden items-center gap-3 md:flex">
            <ArrowDown size={13} weight="bold" className="text-[var(--color-green)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-muted)]">Scroll to explore</span>
            <span className="ml-4 flex items-center gap-1">
              <span className="h-px w-8 bg-[var(--color-green)]" />
              <span className="h-px w-4 bg-[var(--color-line)]" />
              <span className="h-px w-4 bg-[var(--color-line)]" />
              <span className="h-px w-4 bg-[var(--color-line)]" />
            </span>
          </div>
        </div>

        {/* RIGHT — showroom image */}
        <div className="relative col-span-1 min-h-[360px] md:col-span-6 md:min-h-0">
          <Image
            src={asset("/assets/gt-drive/gt-drive-hero-showroom-ai-v1.webp")}
            alt="GT Drive showroom with electric scooter lineup"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover object-center"
          />
          {/* soft fade into left copy column on desktop */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 hidden w-40 bg-gradient-to-r from-white to-transparent md:block"
          />
        </div>
      </div>
    </section>
  );
}
