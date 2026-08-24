import { Reveal } from "@/components/Reveal";

export function TaglineMarquee() {
  return (
    <Reveal>
      <section
        aria-label="Drive Clean. Go Green."
        className="overflow-hidden bg-[var(--color-green)] py-12 text-[var(--color-stage)]"
      >
        <div
          aria-hidden="true"
          className="flex w-max animate-[marquee_20s_linear_infinite] whitespace-nowrap font-display text-6xl leading-none font-black tracking-[-0.035em] uppercase md:text-8xl"
        >
          <span className="mx-8 shrink-0">Drive Clean • Go Green • </span>
          <span className="mx-8 shrink-0">Drive Clean • Go Green • </span>
          <span className="mx-8 shrink-0">Drive Clean • Go Green • </span>
          <span className="mx-8 shrink-0">Drive Clean • Go Green • </span>
        </div>
      </section>
    </Reveal>
  );
}
