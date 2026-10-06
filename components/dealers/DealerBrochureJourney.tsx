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
          <div className="flex flex-col items-start">
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
              href={asset("/assets/gt-drive/brochure/gt-drive-dealership.pdf")}
              download="gt-drive-dealership-brochure.pdf"
              className="group mt-8 inline-flex h-11 items-center gap-2 rounded-full border border-[var(--color-green)] bg-white px-5 text-[12.5px] font-bold text-[var(--color-green-deep)] transition-colors hover:bg-[#f0faf2]"
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
          <div className="flex flex-col">
            <p className="mb-6 text-[11px] font-bold tracking-[0.2em] text-[var(--color-green-deep)] uppercase">
              Your GT Journey
            </p>
            <h2 className="font-display text-[clamp(30px,3.4vw,44px)] font-extrabold leading-[0.98] tracking-[-0.035em] text-[var(--color-ink)]">
              FROM ENQUIRY TO PARTNERSHIP.
            </h2>

            <ol className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-3">
              {steps.map((s) => (
                <li key={s.title} className="relative flex min-h-[142px] flex-col items-start rounded-2xl border border-[var(--color-green)]/20 bg-[#f5faf6] p-4 shadow-[0_8px_24px_rgba(17,17,17,0.04)] transition-transform hover:-translate-y-0.5 md:min-h-[160px] md:p-5">
                  <div className="flex h-8 items-center gap-3">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-[var(--color-green-deep)] shadow-sm">
                      <ArrowRight size={18} weight="bold" />
                    </span>
                  </div>
                  <div className="mt-4 font-display text-[12px] font-extrabold uppercase tracking-[0.1em] text-[var(--color-ink)]">
                    {s.title}
                  </div>
                  <p className="mt-2 max-w-[130px] text-[11px] leading-snug text-[var(--color-body)] md:text-[12px]">
                    {s.body}
                  </p>
                </li>
              ))}
            </ol>
            <div className="mt-8 overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white shadow-[0_12px_30px_rgba(17,17,17,0.08)]">
              <Image
                src={asset("/assets/gt-drive/dealer/marketing-support-final.jpeg")}
                alt="GT Drive marketing support materials for dealer partners"
                width={1535}
                height={1024}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
