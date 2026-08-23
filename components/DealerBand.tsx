import Link from "next/link";

const support = [
  "Attractive dealership benefits",
  "Marketing and branding support",
  "Inventory and business support",
  "Service and technical support",
  "Training and operational guidance",
];

export function DealerBand() {
  return (
    <section
      aria-labelledby="dealer-headline"
      className="bg-[var(--color-stage)]"
    >
      <div className="mx-auto grid max-w-[var(--container-page)] gap-12 px-6 py-24 md:grid-cols-[1.2fr_1fr] md:gap-20 md:px-10 md:py-32">
        <div>
          <div className="text-sm font-medium text-[var(--color-green-deep)]">
            Pan-India dealership opportunity
          </div>
          <h2
            id="dealer-headline"
            className="mt-6 text-[clamp(40px,5.5vw,84px)] leading-[0.98]"
          >
            Grow with an Indian EV brand.
          </h2>
          <p className="mt-8 max-w-md text-[15px] leading-[1.65] text-[var(--color-body)] md:text-base">
            Partner with GT Drive and be part of India&apos;s growing electric
            mobility revolution. The brochure identifies five areas of support
            for prospective dealer partners.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              href="/dealers/"
              className="inline-flex h-[52px] items-center justify-center rounded-sm bg-[var(--color-green)] px-6 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-green-deep)]"
            >
              Enquire about dealership
            </Link>
            <Link
              href="/locations/"
              className="text-sm font-semibold text-[var(--color-green-deep)] underline underline-offset-[6px]"
            >
              View plant locations
            </Link>
          </div>
        </div>
        <ul className="flex flex-col divide-y divide-[var(--color-line)] border-y border-[var(--color-line)] md:mt-16">
          {support.map((item) => (
            <li
              key={item}
              className="flex items-baseline gap-4 py-5 text-[15px] font-medium text-[var(--color-ink)] md:text-base"
            >
              <span
                aria-hidden="true"
                className="text-lg leading-none text-[var(--color-green)]"
              >
                •
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
