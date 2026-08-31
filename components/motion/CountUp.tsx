"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "./useInView";

type Props = {
  to: number;
  duration?: number;
  pad?: number;
  className?: string;
};

/**
 * Counts from 0 up to `to` on first entry into the viewport.
 * `pad` zero-pads the visible number (e.g. 2 → "09").
 */
export function CountUp({ to, duration = 900, pad, className = "" }: Props) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.3 });
  const [n, setN] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    // Respect reduced motion — snap to final.
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setN(to);
      return;
    }

    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // ease-out (cubic)
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(eased * to));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  const display = pad ? String(n).padStart(pad, "0") : String(n);
  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
