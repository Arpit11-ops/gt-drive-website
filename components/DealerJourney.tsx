import Link from "next/link";
import { ArrowDown } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";

const steps = [
  {
    title: "Send an enquiry",
    body: "Share your city, current business, and the dealership scale you have in mind through the form below or by phone.",
  },
  {
    title: "First conversation",
    body: "A GT Drive representative walks through the range, the support programme, and answers the questions specific to your market.",
  },
  {
    title: "Territory alignment",
    body: "We align on location, showroom scope, and how a GT Drive presence fits alongside the wider Indian network.",
  },
  {
    title: "Onboarding and go-live",
    body: "Once agreed, onboarding covers inventory, staff training, marketing rollout, and service setup — then the showroom opens.",
  },
];

export function DealerJourney() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[var(--container-page)] px-6 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="text-[clamp(36px,4.8vw,68px)] font-semibold leading-[0.98] tracking-[-0.03em] text-[var(--color-ink)]">
                From enquiry to opening,{" "}
                <span className="text-[var(--color-green)]">
                  in four steps.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-[var(--color-body)]">
                We can&apos;t promise a fixed timeline until we&apos;ve met. What we can
                describe is the shape of the conversation.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <Link
                href="#dealer-enquiry"
                className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-green-deep)] transition-colors hover:text-[var(--color-ink)]"
              >
                Jump to the enquiry form
                <ArrowDown size={16} weight="bold" />
              </Link>
            </Reveal>
          </div>

          <ol className="lg:col-span-6 lg:col-start-7">
            {steps.map((step, index) => (
              <Reveal key={step.title} delay={100 + index * 80}>
                <li className="grid grid-cols-[auto_1fr] gap-6 border-t border-[var(--color-line)] py-8 last:border-b">
                  <span
                    className="pt-2 text-4xl font-semibold leading-none tracking-tight text-[var(--color-green)] motion-safe:animate-[step-number-in_500ms_cubic-bezier(0.16,1,0.3,1)_both]"
                    style={{ animationDelay: `${200 + index * 80}ms` }}
                  >
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-2xl font-medium tracking-tight text-[var(--color-ink)]">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-lg text-[15px] leading-[1.6] text-[var(--color-body)]">
                      {step.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
