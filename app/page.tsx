import { Hero } from "@/components/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="mx-auto max-w-[var(--container-page)] px-6 py-24 md:px-10">
        <p className="text-sm text-[var(--color-muted)]">
          Next sections land in the following milestone — brand statement, featured model spotlight, nine-model range, dealer opportunity, plant footprint, contact close.
        </p>
      </section>
    </>
  );
}
