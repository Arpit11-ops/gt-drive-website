import Image from "next/image";
import { Plug } from "@phosphor-icons/react/dist/ssr";
import { asset } from "@/lib/asset";

export function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden bg-white pt-20">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-[var(--container-page)] grid-cols-1 md:grid-cols-12">
        {/* LEFT — copy */}
        <div className="relative z-10 col-span-1 flex flex-col justify-center px-6 py-14 md:col-span-5 md:px-12 md:py-16 lg:px-16">
          <p className="mb-6 text-[11px] font-bold tracking-[0.24em] text-[var(--color-green-deep)] uppercase">
            Contact Us
          </p>

          <h1 className="font-display text-[clamp(40px,5.4vw,78px)] font-extrabold leading-[0.95] tracking-[-0.045em] text-[var(--color-ink)]">
            <span className="block">LET&apos;S</span>
            <span className="block text-[var(--color-green)]">CONNECT.</span>
          </h1>

          {/* green underline flourish with plug at the tip */}
          <div className="mt-6 flex items-center gap-2">
            <span className="h-[3px] w-[120px] bg-[var(--color-green)]" />
            <span className="h-[3px] w-[26px] bg-[var(--color-green)]" />
            <Plug size={16} weight="fill" className="-ml-1 text-[var(--color-green)]" />
          </div>

          <p className="mt-8 max-w-sm text-[15px] leading-relaxed text-[var(--color-body)]">
            We&apos;re here to listen,<br />
            help and drive you forward.
          </p>
        </div>

        {/* RIGHT — office reception image (placeholder until real photo lands) */}
        <div className="relative col-span-1 min-h-[380px] md:col-span-7 md:min-h-0">
          <Image
            src={asset("/assets/gt-drive/gt-drive-hero-showroom-ai-v1.webp")}
            alt="GT Drive reception"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 58vw"
            className="object-cover object-center"
          />
          {/* soft white fade into the left copy column */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 hidden w-32 bg-gradient-to-r from-white to-transparent md:block"
          />
          {/* placeholder chip */}
          <div className="absolute right-4 top-4 rounded-full bg-[color-mix(in_srgb,var(--color-ink)_82%,transparent)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
            Office photo pending
          </div>
        </div>
      </div>
    </section>
  );
}
