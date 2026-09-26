import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plug } from "@phosphor-icons/react/dist/ssr";
import { asset } from "@/lib/asset";

export function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden bg-white pt-20">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-[var(--container-page)] grid-cols-1 md:grid-cols-12">
        {/* LEFT — copy */}
        <div className="relative z-10 col-span-1 flex flex-col justify-center px-6 py-14 md:col-span-6 md:px-12 md:py-16 lg:px-16">
          <h1 className="font-display text-[clamp(40px,5.4vw,78px)] font-extrabold leading-[0.95] tracking-[-0.045em] text-[var(--color-ink)]">
            <span className="block whitespace-nowrap">DRIVE CLEAN,</span>
            <span className="block whitespace-nowrap text-[var(--color-green)]">GO GREEN.</span>
          </h1>

          {/* green underline flourish with plug at the tip */}
          <div className="mt-6 flex items-center gap-2">
            <span className="h-[3px] w-[120px] bg-[var(--color-green)]" />
            <span className="h-[3px] w-[26px] bg-[var(--color-green)]" />
            <Plug size={16} weight="fill" className="-ml-1 text-[var(--color-green)]" />
          </div>

          <p className="mt-5 text-[12px] font-bold uppercase tracking-[0.28em] text-[var(--color-muted)]">
            It starts here.
          </p>

          <div className="mt-10">
            <Link
              href="/models/"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-[var(--color-green)] px-6 text-[13px] font-bold tracking-[0.05em] text-white uppercase transition-colors hover:bg-[var(--color-green-deep)]"
            >
              Explore the range
              <ArrowRight size={15} weight="bold" className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* RIGHT — Greater Noida plant image with the diagonal cut on the far right */}
        <div className="relative col-span-1 min-h-[380px] overflow-hidden md:col-span-6 md:min-h-0 md:[clip-path:polygon(30%_0,100%_0,100%_100%,0_100%)]">
          <Image
            src={asset("/assets/gt-drive/factory-banner.jpeg")}
            alt="GT Drive Greater Noida manufacturing plant"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
