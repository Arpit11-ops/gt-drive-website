"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      setVisible(true);
      return;
    }
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" },
    );
    observer.observe(node);

    // Safety fallback: reveal after 2s regardless — some environments never fire IO
    const fallback = window.setTimeout(() => setVisible(true), 2000);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  const style: CSSProperties = {
    transitionDelay: `${delay}ms`,
    transitionProperty: "transform, opacity",
    transitionDuration: "700ms",
    transitionTimingFunction: "cubic-bezier(0.2, 0.8, 0.2, 1)",
    transform: visible ? "translateY(0)" : "translateY(24px)",
    opacity: visible ? 1 : 0,
    willChange: "transform, opacity",
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
