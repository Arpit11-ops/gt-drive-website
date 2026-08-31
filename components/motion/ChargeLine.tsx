"use client";

import { useInView } from "./useInView";

type Props = {
  /** Line width in px when drawn. Default 96. */
  width?: number;
  /** ms delay before draw. */
  delay?: number;
  className?: string;
  /** Colour tone — main or deep. */
  tone?: "green" | "green-deep" | "white";
};

/**
 * The named GT Drive "charge line" — a short green horizontal line
 * that draws in on scroll-into-view. Sits above page-hero headlines.
 */
export function ChargeLine({
  width = 96,
  delay = 0,
  className = "",
  tone = "green",
}: Props) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.3 });
  const bg =
    tone === "green"
      ? "var(--color-green)"
      : tone === "green-deep"
        ? "var(--color-green-deep)"
        : "var(--color-white)";
  return (
    <span
      ref={ref}
      aria-hidden="true"
      className={`charge-line ${inView ? "charge-on" : ""} ${className}`}
      style={
        {
          ["--charge-width" as never]: `${width}px`,
          transitionDelay: `${delay}ms`,
          background: bg,
        } as never
      }
    />
  );
}
