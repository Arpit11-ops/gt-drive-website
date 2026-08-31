import { ChargeLine } from "@/components/motion/ChargeLine";
import { Reveal } from "@/components/Reveal";
import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  headline: ReactNode;
  lead?: string;
  children?: ReactNode;
  theme?: "light" | "dark" | "green";
};

export function PageHero({ eyebrow, headline, lead, children, theme = "light" }: Props) {
  const bg =
    theme === "dark"
      ? "bg-[#111111] text-white"
      : theme === "green"
      ? "bg-[var(--color-green-deep)] text-white"
      : "bg-white text-[var(--color-ink)]";
  const eyebrowColor =
    theme === "light" ? "text-[var(--color-green-deep)]" : "text-[var(--color-green)]";
  const leadColor = theme === "light" ? "text-[var(--color-body)]" : "text-white/70";

  return (
    <section className={`relative overflow-hidden ${bg}`}>
      <div className="mx-auto max-w-[var(--container-page)] px-6 pb-20 pt-20 md:px-10 md:pb-28 md:pt-24">
        {eyebrow && (
          <Reveal className={`flex items-center gap-4 text-sm font-medium ${eyebrowColor}`}>
            <ChargeLine
              width={56}
              tone={theme === "light" ? "green-deep" : "green"}
            />
            {eyebrow}
          </Reveal>
        )}
        <Reveal delay={80} className="mt-6">
          <h1 className="text-[clamp(48px,7vw,132px)] leading-[0.94] tracking-[-0.035em]">
            {headline}
          </h1>
        </Reveal>
        {lead && (
          <Reveal delay={160}>
            <p className={`mt-8 max-w-2xl text-[15px] leading-[1.65] md:text-base ${leadColor}`}>
              {lead}
            </p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={240} className="mt-10">
            {children}
          </Reveal>
        )}
      </div>
    </section>
  );
}
