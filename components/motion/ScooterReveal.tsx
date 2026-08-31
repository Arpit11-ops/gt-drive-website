"use client";

import { ReactNode } from "react";
import { useInView } from "./useInView";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/**
 * Wraps a scooter image (or any hero visual) so it "resolves" into focus
 * — blur-clear + subtle scale settle on first entry.
 */
export function ScooterReveal({ children, className = "", delay = 0 }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });
  return (
    <div
      ref={ref}
      className={`scooter-reveal ${inView ? "sr-on" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
