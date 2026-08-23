import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-[var(--container-page)] px-6 py-24 md:px-10">
      <h1 className="text-[clamp(48px,7vw,88px)]">
        A brand from Houstan Innovations LLP.
      </h1>
      <p className="mt-6 max-w-xl text-[var(--color-body)]">
        GT Drive is the electric two-wheeler brand of Houstan Innovations LLP, headquartered in Greater Noida. Full company narrative lands in the next milestone.
      </p>
    </section>
  );
}
