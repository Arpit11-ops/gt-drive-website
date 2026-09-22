import { InquiryForm } from "@/components/InquiryForm";

export function DealerApplicationForm() {
  return (
    <section id="dealer-apply" className="relative overflow-hidden bg-[var(--color-surface)] py-20 md:py-28">
      <div className="mx-auto grid max-w-[var(--container-page)] gap-12 px-6 md:grid-cols-[0.8fr_1.4fr] md:gap-16 md:px-12 lg:px-16">
        <div>
          <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-green-deep)]">Take the next step</p>
          <h2 className="font-display text-[clamp(38px,4vw,60px)] font-extrabold leading-[0.96] tracking-[-0.035em] text-[var(--color-ink)]">Ready to bring GT Drive to your city?</h2>
          <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-[var(--color-body)]">Tell us about your business, experience and preferred location. Our partnership team will review your details and contact you about the next step.</p>
        </div>
        <div className="rounded-lg bg-[color-mix(in_srgb,var(--color-green)_6%,white)] p-6 md:p-10">
          <InquiryForm defaultType="dealership" />
        </div>
      </div>
    </section>
  );
}
