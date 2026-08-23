"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "@phosphor-icons/react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export function ShowroomHero() {
  const root = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .from(".showroom-copy > *", { y: 26, opacity: .68, duration: .75, stagger: .08 })
        .from(".showroom-scooter", { x: 90, opacity: .55, scale: .94, duration: 1.05 }, "-=.65")
        .from(".showroom-rail", { scaleX: 0, duration: .9, transformOrigin: "left" }, "-=.8");
    }, root);
    return () => ctx.revert();
  }, []);
  return (
    <section className="showroom-hero" ref={root}>
      <div className="showroom-architecture" aria-hidden="true"><span /><span /><span /><span /></div>
      <div className="showroom-copy">
        <Image src="/assets/gt-drive/brand/gt-drive-logo-primary-lockup.png" alt="GT Drive, Drive Clean Go Green" width={620} height={153} priority className="showroom-logo" />
        <h1>Product information first.</h1>
        <p>Explore GT Drive electric scooters, verified brochure details, and dealership opportunities across India.</p>
        <div className="hero-actions"><Link href="/models/" className="button button-green">Explore models <ArrowRight weight="bold" /></Link><Link href="/contact/" className="button button-outline">Request information</Link></div>
      </div>
      <div className="showroom-stage">
        <div className="showroom-model-label"><span>Featured model</span><strong>GT Soul</strong></div>
        <Image src="/assets/gt-drive/gt-soul-sl.png" alt="GT Soul electric scooter" width={1100} height={820} priority className="showroom-scooter" />
        <button className="showroom-media" aria-label="Future GT Drive product film"><Play weight="fill" /><span>Product film<br /><small>Media slot ready</small></span></button>
        <div className="showroom-rail" />
      </div>
    </section>
  );
}
