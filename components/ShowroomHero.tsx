"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export function ShowroomHero() {
  const root = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: "expo.out" } })
        .from(".showroom-copy > *", { y: 24, opacity: .76, duration: .85, stagger: .07 })
        .from(".showroom-visual", { clipPath: "inset(0 0 0 100%)", duration: 1.15 }, "-=.72")
        .from(".showroom-banner", { scale: 1.035, duration: 1.25 }, "-=1.05");
    }, root);
    return () => ctx.revert();
  }, []);
  return (
    <section className="showroom-hero" ref={root} aria-labelledby="showroom-title">
      <div className="showroom-visual">
        <Image
          src="/assets/gt-drive/gt-drive-hero-showroom-ai-v1.webp"
          alt="White electric scooter presented in a bright GT Drive showroom"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="showroom-banner"
        />
      </div>
      <div className="showroom-copy">
        <span className="showroom-kicker">GT Drive electric vehicles</span>
        <Image src="/assets/gt-drive/brand/gt-drive-logo-primary-lockup.png" alt="GT Drive, Drive Clean Go Green" width={620} height={153} priority className="showroom-logo" />
        <h1 id="showroom-title">Meet the GT Drive electric range.</h1>
        <p>Explore electric scooter models, available colours and product features, with direct support for customer and dealership enquiries.</p>
        <div className="hero-actions"><Link href="/models/" className="button button-green">Explore models <ArrowRight weight="bold" /></Link><Link href="/contact/" className="button button-outline">Request information</Link></div>
      </div>
    </section>
  );
}
