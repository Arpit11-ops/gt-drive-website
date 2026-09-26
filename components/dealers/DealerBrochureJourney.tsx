import Image from "next/image";
import { ArrowRight, DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import { asset } from "@/lib/asset";

const steps = [
  { title: "APPLY", body: "Share your details." },
  { title: "CONNECT", body: "Our team gets in touch." },
  { title: "EVALUATE", body: "Business and location are reviewed." },
  { title: "PARTNER", body: "Complete the dealership onboarding." },
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
              READY TO EXPLORE THE OPPORTUNITY?
            </h2>
            <p className="mt-6 max-w-md text-[14px] leading-relaxed text-[var(--color-body)]">
              Download the GT Drive dealership brochure for the opportunity, support areas and next steps.
            </p>
            <a
              href="/assets/gt-drive/brochure/gt-drive-dealership.pdf"
              download="gt-drive-dealership-brochure.pdf"
              className="group mt-8 inline-flex h-11 items-center gap-2 rounded-full border border-[var(--color-ink)] px-5 text-[12.5px] font-bold text-[var(--color-ink)] transition-colors hover:bg-[var(--color-ink)] hover:text-white"
            >
              Download the brochure
              <DownloadSimple size={14} weight="bold" className="transition-transform group-hover:translate-y-0.5" />
            </a>

            {/* supplied dealership brochure artwork */}
            <div className="relative mt-12 hidden aspect-square w-[300px] rotate-[-4deg] overflow-hidden rounded-xl bg-white shadow-[0_20px_50px_rgba(17,17,17,0.16)] md:block">
              <Image
                src={asset("/assets/gt-drive/brochure/dealership-opportunity-cover.png")}
                alt="GT Drive dealership opportunity brochure cover"
                fill
                sizes="300px"
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT — journey */}
          <div className="flex flex-col justify-center">
            <p className="mb-6 text-[11px] font-bold tracking-[0.2em] text-[var(--color-green-deep)] uppercase">
              Your GT Journey
            </p>
            <h2 className="font-display text-[clamp(30px,3.4vw,44px)] font-extrabold leading-[0.98] tracking-[-0.035em] text-[var(--color-ink)]">
              FROM ENQUIRY TO PARTNERSHIP.
            </h2>

            <ol className="mt-12 grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-y-0">
              {steps.map((s, i) => (
                <li key={s.title} className="relative flex flex-col items-start">
                  <div className="flex h-8 items-center gap-3">
                    {i > 0 && (
                      <ArrowRight size={24} weight="bold" className="text-[var(--color-green)]" />
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
