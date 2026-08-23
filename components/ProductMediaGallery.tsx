"use client";

import Image from "next/image";
import { useState } from "react";

const views = [{ label: "Full view", className: "gallery-full" }, { label: "Front detail", className: "gallery-front" }, { label: "Profile detail", className: "gallery-profile" }];

export function ProductMediaGallery({ src, alt }: { src: string; alt: string }) {
  const [active, setActive] = useState(0);
  return (
    <div className="product-gallery">
      <div className={`gallery-main ${views[active].className}`}><Image src={src} alt={`${alt}, ${views[active].label}`} width={1000} height={760} priority /></div>
      <div className="gallery-selector" aria-label="Product image views">{views.map((view, index) => <button key={view.label} className={active === index ? "active" : ""} onClick={() => setActive(index)} aria-pressed={active === index}><span><Image src={src} alt="" width={150} height={100} /></span>{view.label}</button>)}</div>
    </div>
  );
}
