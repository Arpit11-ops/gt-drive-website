import { Reveal } from "@/components/Reveal";

export function TaglineMarquee() {
  return (
    <Reveal>
      <section
        aria-label="Drive Clean. Go Green."
        className="group overflow-hidden bg-[var(--color-green)] py-7 text-[var(--color-stage)] md:py-12"
      >
        <div
          aria-hidden="true"
          className="flex w-max animate-[marquee_20s_linear_infinite] whitespace-nowrap font-display text-3xl leading-none font-black tracking-[-0.035em] uppercase [animation-play-state:running] group-hover:[animation-play-state:paused] md:text-8xl"
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
