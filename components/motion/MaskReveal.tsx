"use client";

import { ReactNode, isValidElement, Children } from "react";
import { useInView } from "./useInView";

type Props = {
  children: ReactNode;
  className?: string;
  /** Delay (in ms) applied before the first word animates. */
  delay?: number;
  /** Element tag — h1 by default */
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
};

/**
 * Wraps a headline so each word (and nested <span> islands) animates in
 * from below via clip-path. Structural + semantic, respects reduced motion.
 *
 * Nested spans (used for the green accent word/phrase) keep their className
 * and animate as a single unit.
 */
export function MaskReveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "h1",
}: Props) {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.2 });
  const nodes = flatten(children);

  return (
    <Tag
      ref={ref as never}
      className={`${className} ${inView ? "mr-on" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {nodes.map((node, i) => (
        <span
          key={i}
          className={`mr-word ${node.className ?? ""}`}
          style={{ ["--mr-i" as never]: i } as never}
        >
          {node.text}
          {node.trailingSpace ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}

type Piece = { text: string; className?: string; trailingSpace: boolean };

function flatten(children: ReactNode): Piece[] {
  const out: Piece[] = [];
  Children.forEach(children, (child) => {
    if (typeof child === "string") {
      const words = child.split(/(\s+)/).filter((s) => s.length > 0);
      words.forEach((w, i) => {
        if (/^\s+$/.test(w)) return;
        const next = words[i + 1];
        const trailingSpace = Boolean(next && /^\s+$/.test(next));
        out.push({ text: w, trailingSpace });
      });
    } else if (isValidElement<{ className?: string; children?: ReactNode }>(child)) {
      // treat a nested <span className="..."> as one animated unit
      const text = getTextContent(child.props.children);
      if (text) out.push({ text, className: child.props.className, trailingSpace: true });
    }
  });
  return out;
}

function getTextContent(children: ReactNode): string {
  let s = "";
  Children.forEach(children, (child) => {
    if (typeof child === "string") s += child;
    else if (typeof child === "number") s += String(child);
    else if (isValidElement<{ children?: ReactNode }>(child))
      s += getTextContent(child.props.children);
  });
  return s;
}
