import type { Metadata } from "next";

export const metadata: Metadata = { title: "Dealership opportunity" };

export default function DealersPage() {
  return (
    <section className="mx-auto max-w-[var(--container-page)] px-6 py-24 md:px-10">
      <h1 className="text-[clamp(48px,7vw,88px)]">Grow with an Indian EV brand.</h1>
      <p className="mt-6 max-w-xl text-[var(--color-body)]">
        Partner with GT Drive and be part of India&apos;s growing electric mobility revolution. Full dealer opportunity lands in the next milestone.
      </p>
    </section>
  );
}
