"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  alt: string;
};

export function ModelViewer({ src, alt }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;
    const container = containerRef.current;
    void import("@google/model-viewer").then(() => {
      if (!active || !container) return;
      const viewer = document.createElement("model-viewer");
      viewer.setAttribute("src", src);
      viewer.setAttribute("alt", alt);
      viewer.setAttribute("camera-controls", "");
      viewer.setAttribute("auto-rotate", "");
      viewer.setAttribute("rotation-per-second", "18deg");
      viewer.setAttribute("shadow-intensity", "0.8");
      viewer.setAttribute("exposure", "1");
      viewer.setAttribute("environment-image", "neutral");
      viewer.setAttribute("interaction-prompt", "auto");
      viewer.style.width = "100%";
      viewer.style.height = "100%";
      viewer.style.background = "#eef0ed";
      container.replaceChildren(viewer);
    });
    return () => {
      active = false;
      container?.replaceChildren();
    };
  }, [alt, src]);

  return <div ref={containerRef} className="h-full w-full" aria-label={alt} />;
}
