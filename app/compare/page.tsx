import type { Metadata } from "next";

export const metadata: Metadata = { title: "Compare all nine" };

export default function ComparePage() {
  return (
    <section className="mx-auto max-w-[var(--container-page)] px-6 py-24 md:px-10">
      <h1 className="text-[clamp(48px,7vw,88px)]">Compare all nine.</h1>
      <p className="mt-6 max-w-xl text-[var(--color-body)]">
        Side-by-side comparison of every GT Drive model, brochure-verified. Lands in the next milestone.
      </p>
    </section>
  );
}
