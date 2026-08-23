"use client";

import { PointerEvent, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { models } from "@/lib/models";
import { ProductCard } from "./ProductCard";

export function ModelRunway() {
  const track = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, startScroll: 0 });
  const [active, setActive] = useState(0);

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const center = element.scrollLeft + element.clientWidth / 2;
        let closest = 0;
        let smallest = Infinity;
        [...element.children].forEach((child, index) => {
          const card = child as HTMLElement;
          const distance = Math.abs(card.offsetLeft + card.offsetWidth / 2 - center);
          card.style.setProperty("--focus", Math.max(0, 1 - distance / element.clientWidth).toFixed(3));
          if (distance < smallest) { smallest = distance; closest = index; }
        });
        setActive(closest);
      });
    };
    update();
    element.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { cancelAnimationFrame(frame); element.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);

  const move = (direction: number) => {
    const element = track.current;
    if (!element) return;
    const card = element.firstElementChild as HTMLElement | null;
    element.scrollBy({ left: direction * ((card?.offsetWidth ?? 360) + 18), behavior: "smooth" });
  };
  const pointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const element = track.current;
    if (!element) return;
    drag.current = { active: true, startX: event.clientX, startScroll: element.scrollLeft };
    element.setPointerCapture(event.pointerId);
    element.dataset.dragging = "true";
  };
  const pointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (drag.current.active && track.current) track.current.scrollLeft = drag.current.startScroll - (event.clientX - drag.current.startX) * 1.15;
  };
  const pointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (!track.current) return;
    drag.current.active = false;
    if (track.current.hasPointerCapture(event.pointerId)) track.current.releasePointerCapture(event.pointerId);
    delete track.current.dataset.dragging;
  };

  return (
    <div className="runway-shell">
      <div className="runway-meta"><span>Drag to explore</span><strong>{String(active + 1).padStart(2, "0")} / {String(models.length).padStart(2, "0")}</strong></div>
      <div className="runway-controls"><button className="icon-button" onClick={() => move(-1)} aria-label="Previous models"><ArrowLeft /></button><button className="icon-button active" onClick={() => move(1)} aria-label="Next models"><ArrowRight /></button></div>
      <div className="model-runway" ref={track} onPointerDown={pointerDown} onPointerMove={pointerMove} onPointerUp={pointerUp} onPointerCancel={pointerUp}>{models.map((model) => <ProductCard key={model.slug} model={model} />)}</div>
    </div>
  );
}
