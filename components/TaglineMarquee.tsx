export function TaglineMarquee() {
  const item = (
    <span className="mx-8 inline-flex items-baseline gap-8 whitespace-nowrap">
      <span className="text-[var(--color-ink)]">Drive Clean.</span>
      <span className="text-[var(--color-green)]">Go Green.</span>
      <span aria-hidden="true" className="text-[var(--color-line)]">·</span>
    </span>
  );
  return (
    <section
      aria-hidden="true"
      className="relative overflow-hidden border-y border-[var(--color-line)] bg-white py-10 md:py-16"
    >
      <div className="flex w-max animate-[marquee_45s_linear_infinite] whitespace-nowrap text-[clamp(60px,12vw,220px)] font-extrabold leading-none tracking-[-0.03em]">
        <span className="flex shrink-0 items-baseline">{item}{item}{item}{item}</span>
        <span className="flex shrink-0 items-baseline" aria-hidden="true">{item}{item}{item}{item}</span>
      </div>
    </section>
  );
}
