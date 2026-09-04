import { ArrowRight, DownloadSimple } from "@phosphor-icons/react/dist/ssr";

const steps = [
  { n: "01", title: "APPLY", body: "Share your details." },
  { n: "02", title: "CONNECT", body: "Our team gets in touch." },
  { n: "03", title: "EVALUATE", body: "Business and location are reviewed." },
  { n: "04", title: "PARTNER", body: "Complete the dealership onboarding." },
];

export function DealerBrochureJourney() {
  return (
    <section id="brochure" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[var(--container-page)] px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-12">
          {/* LEFT — brochure */}
          <div className="flex flex-col items-start justify-center">
            <p className="mb-6 text-[11px] font-bold tracking-[0.2em] text-[var(--color-green-deep)] uppercase">
              Get The Details
            </p>
            <h2 className="font-display text-[clamp(30px,3.4vw,44px)] font-extrabold leading-[0.98] tracking-[-0.035em] text-[var(--color-ink)]">
              WANT TO KNOW MORE?
            </h2>
            <p className="mt-6 max-w-md text-[14px] leading-relaxed text-[var(--color-body)]">
              Download the GT Drive Dealership Brochure for complete information about the opportunity, requirements and process.
            </p>
            <a
              href="/assets/gt-drive/brochure/gt-drive-dealership.pdf"
              className="group mt-8 inline-flex h-11 items-center gap-2 rounded-full border border-[var(--color-ink)] px-5 text-[12.5px] font-bold text-[var(--color-ink)] transition-colors hover:bg-[var(--color-ink)] hover:text-white"
            >
              Download Brochure
              <DownloadSimple size={14} weight="bold" className="transition-transform group-hover:translate-y-0.5" />
            </a>

            {/* stylised brochure mockup */}
            <div className="relative mt-12 hidden h-[240px] w-[300px] rotate-[-8deg] md:block">
              <div className="absolute inset-0 rounded-md bg-white shadow-[0_20px_50px_rgba(17,17,17,0.14)]">
                <div className="flex h-full flex-col justify-between p-5">
                  <div>
                    <span className="font-display text-[13px] font-extrabold tracking-tight text-[var(--color-ink)]">
                      GT<span className="text-[var(--color-green)]">DRIVE</span>
                    </span>
                    <div className="mt-1 h-px w-10 bg-[var(--color-green)]" />
                  </div>
                  <div>
                    <div className="h-1 w-14 bg-[var(--color-green)]" />
                    <p className="mt-3 font-display text-[15px] font-extrabold uppercase leading-tight text-[var(--color-ink)]">
                      Dealership<br />Opportunity
                    </p>
                    <p className="mt-4 text-[9px] font-bold tracking-[0.2em] text-[var(--color-green-deep)] uppercase">
                      Drive Clean · Go Green
                    </p>
                  </div>
                </div>
              </div>
              {/* second sheet peek */}
              <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-md bg-[var(--color-stage)] shadow-[0_10px_30px_rgba(17,17,17,0.08)]" />
            </div>
          </div>

          {/* RIGHT — journey */}
          <div className="flex flex-col justify-center">
            <p className="mb-6 text-[11px] font-bold tracking-[0.2em] text-[var(--color-green-deep)] uppercase">
              Your GT Journey
            </p>
            <h2 className="font-display text-[clamp(30px,3.4vw,44px)] font-extrabold leading-[0.98] tracking-[-0.035em] text-[var(--color-ink)]">
              FROM INTEREST TO PARTNERSHIP.
            </h2>

            <ol className="mt-12 grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-y-0">
              {steps.map((s, i) => (
                <li key={s.n} className="relative flex flex-col items-start">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-full border-2 border-[var(--color-green)] font-display text-[13px] font-extrabold text-[var(--color-ink)]">
                      {s.n}
                    </span>
                    {i < steps.length - 1 && (
                      <ArrowRight size={16} weight="bold" className="hidden text-[var(--color-green)] md:block" />
                    )}
                  </div>
                  <div className="mt-4 font-display text-[12px] font-extrabold uppercase tracking-[0.1em] text-[var(--color-ink)]">
                    {s.title}
                  </div>
                  <p className="mt-2 max-w-[130px] text-[12px] leading-snug text-[var(--color-body)]">
                    {s.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
