"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const scooterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const scooter = scooterRef.current;
    if (!section || !scooter) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;

    let rafId = 0;

    const handleMove = (event: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = (event.clientX - centerX) / (rect.width / 2);
      const dy = (event.clientY - centerY) / (rect.height / 2);
      const rotateX = -dy * 4;
      const rotateY = dx * 6;
      const translateX = dx * 6;

      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        scooter.style.transform = `perspective(1400px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateX(${translateX.toFixed(2)}px)`;
      });
    };

    const handleLeave = () => {
      cancelAnimationFrame(rafId);
      scooter.style.transform = "perspective(1400px) rotateX(0deg) rotateY(0deg) translateX(0px)";
    };

    section.addEventListener("mousemove", handleMove);
    section.addEventListener("mouseleave", handleLeave);

    return () => {
      cancelAnimationFrame(rafId);
      section.removeEventListener("mousemove", handleMove);
      section.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="hero-tagline"
      className="relative flex min-h-[calc(100svh-44px)] flex-col overflow-hidden bg-white"
    >
      {/* UPPER ZONE — the scooter */}
      <div className="relative mx-auto flex w-full max-w-[var(--container-page)] flex-1 items-center justify-center px-6 pt-4 md:px-10 md:pt-6">
        {/* Top-left identifier — desktop only */}
        <div className="absolute left-6 top-4 z-10 hidden max-w-[240px] text-[13px] font-medium leading-[1.4] md:left-10 md:top-6 md:block">
          <div className="text-[var(--color-ink)]">
            <span>G</span>
            <span className="italic text-[var(--color-green)]">T</span>
            <span> DRIVE</span>
          </div>
          <div className="mt-1 font-normal text-[var(--color-body)]">Electric two-wheeler brand,</div>
          <div className="font-normal text-[var(--color-body)]">engineered and built in India.</div>
        </div>

        {/* Top-right featured mark — desktop only */}
        <div className="absolute right-6 top-4 z-10 hidden text-[11px] text-[var(--color-muted)] md:right-10 md:top-6 md:block">
          Model featured · GT — Drive Pro
        </div>

        {/* The scooter (interactive tilt) */}
        <div
          ref={scooterRef}
          className="relative flex w-full items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-transform"
          style={{ transform: "perspective(1400px) rotateX(0deg) rotateY(0deg) translateX(0px)" }}
        >
          <Image
            src="/assets/gt-drive/generated/hero-drive-pro.png"
            alt="GT Drive Pro electric scooter"
            width={1536}
            height={1024}
            priority
            className="h-auto max-h-[42vh] w-auto max-w-full object-contain md:max-h-[48vh]"
          />
        </div>
      </div>

      {/* Mobile-only featured mark (below scooter) */}
      <div className="mx-auto w-full max-w-[var(--container-page)] px-6 pt-1 text-[11px] text-[var(--color-muted)] md:hidden">
        Model featured · GT — Drive Pro
      </div>

      {/* LOWER ZONE — tagline + supporting */}
      <div className="mx-auto grid w-full max-w-[var(--container-page)] shrink-0 gap-4 px-6 pb-6 pt-4 md:grid-cols-[1.5fr_1fr] md:items-end md:gap-12 md:px-10 md:pb-8 md:pt-4">
        <h1
          id="hero-tagline"
          className="text-[clamp(38px,6.8vw,110px)] leading-[0.94]"
        >
          <span className="block text-[var(--color-ink)]">Drive Clean.</span>
          <span className="block text-[var(--color-green)]">Go Green.</span>
        </h1>

        <div className="flex flex-col gap-4 md:pb-2">
          <p className="max-w-md text-[13px] leading-[1.55] text-[var(--color-body)] md:text-[14px]">
            The electric two-wheeler brand from Houstan Innovations LLP. Nine
            scooters, engineered and built in India, sold through a growing
            pan-India dealer network.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px]">
            <Link
              href="/models/"
              className="font-semibold text-[var(--color-green-deep)] underline underline-offset-[6px]"
            >
              Explore the range
            </Link>
            <span className="text-[var(--color-muted)]">·</span>
            <Link
              href="/compare/"
              className="font-semibold text-[var(--color-green-deep)] underline underline-offset-[6px]"
            >
              Compare all nine
            </Link>
            <span className="text-[var(--color-muted)]">·</span>
            <Link
              href="/dealers/"
              className="font-semibold text-[var(--color-green-deep)] underline underline-offset-[6px]"
            >
              Become a dealer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
