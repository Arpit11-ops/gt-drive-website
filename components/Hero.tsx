"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChargeLine } from "@/components/motion/ChargeLine";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { asset } from "@/lib/asset";

const slides = [
  {
    image: "/assets/gt-drive/generated/hero-moped-perfect.webp",
    slug: "gt-drive-pro",
    title: "GT Drive Pro",
    subtitle: "The flagship. Indian roads, Indian scale, GT engineering.",
  },
  {
    image: "/assets/gt-drive/generated/hero-slide-new-2.webp",
    slug: "gt-flying",
    title: "GT Flying",
    subtitle: "Sporty stance. Five two-tone finishes, one confident ride.",
  },
  {
    image: "/assets/gt-drive/generated/hero-slide-new-3.webp",
    slug: "gt-champion",
    title: "GT Champion",
    subtitle: "Extra-long wheelbase. Five colours. Built for the city.",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Parallax effect
  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    if (!section || !bg) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;

    let rafId = 0;

    const handleMove = (event: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = (event.clientX - centerX) / (rect.width / 2);
      const dy = (event.clientY - centerY) / (rect.height / 2);
      
      const translateX = dx * -15; 
      const translateY = dy * -15;

      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        bg.style.transform = `translate(${translateX.toFixed(2)}px, ${translateY.toFixed(2)}px)`;
      });
    };

    const handleLeave = () => {
      cancelAnimationFrame(rafId);
      bg.style.transform = "translate(0px, 0px)";
    };

    section.addEventListener("mousemove", handleMove);
    section.addEventListener("mouseleave", handleLeave);

    return () => {
      cancelAnimationFrame(rafId);
      section.removeEventListener("mousemove", handleMove);
      section.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  const slide = slides[currentSlide];

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[calc(100svh-5rem)] mt-20 w-full items-center overflow-hidden bg-white"
    >
      {/* Background Images with Crossfade */}
      <div 
        ref={bgRef}
        className="absolute inset-0 z-0 h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-transform"
      >
        {slides.map((s, index) => (
          <Image
            key={s.image}
            src={asset(s.image)}
            alt={s.title}
            fill
            priority={index === 0}
            className={`object-cover object-center mix-blend-multiply transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
            sizes="100vw"
          />
        ))}
      </div>

      {/* Content Grid */}
      <div className="relative z-10 mx-auto grid w-full max-w-[var(--container-page)] grid-cols-1 items-center gap-12 px-6 md:px-10 py-20 pointer-events-none">
        <div className="flex max-w-2xl flex-col items-start gap-5 pointer-events-auto">
          <ChargeLine key={`cl-${currentSlide}`} width={80} tone="green" />
          <MaskReveal
            key={`t-${currentSlide}`}
            as="h1"
            className="font-display text-5xl font-extrabold tracking-tight text-[var(--color-ink)] drop-shadow-sm md:text-6xl lg:text-7xl"
          >
            {slide.title.split(" ")[0]}{" "}
            <span className="text-[var(--color-green)]">
              {slide.title.substring(slide.title.indexOf(" ") + 1)}
            </span>
          </MaskReveal>

          <p
            key={`s-${currentSlide}`}
            className="mt-2 max-w-md text-base font-medium leading-relaxed text-[var(--color-body)]"
          >
            {slide.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-6">
            <Link
              href={`/models/${slide.slug}/`}
              className="inline-flex h-[52px] items-center gap-2 rounded-sm bg-[var(--color-green)] px-6 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-green-deep)]"
            >
              View {slide.title}
              <span className="transition-transform">→</span>
            </Link>
            <Link
              href="/contact/"
              className="text-sm font-semibold text-[var(--color-ink)] underline decoration-[var(--color-ink)]/30 underline-offset-[6px] hover:decoration-[var(--color-ink)]"
            >
              Request information
            </Link>
          </div>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-500 rounded-full ${
              currentSlide === idx 
                ? 'w-8 h-2 bg-[var(--color-green)]' 
                : 'w-2 h-2 bg-[var(--color-ink)]/20 hover:bg-[var(--color-ink)]/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
