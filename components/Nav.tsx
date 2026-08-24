"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CaretDown, List, Phone, WhatsappLogo, X } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { ModelMegaMenu } from "@/components/ModelMegaMenu";
import { contact } from "@/lib/models";
import { featuredModels, mobileLinks, primaryLinks } from "@/lib/navigation";

const modelsMenuId = "models-mega-menu";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [modelsOpen, setModelsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const modelsButtonRef = useRef<HTMLButtonElement>(null);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);
  const modelsOpenBeforePointerDownRef = useRef(false);
  const pathname = usePathname();
  const previousPathname = useRef(pathname);

  const closeAll = useCallback(() => {
    setModelsOpen(false);
    setMobileOpen(false);
  }, []);

  const closeAfterNavigation = useCallback(() => {
    window.setTimeout(closeAll, 100);
  }, [closeAll]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (previousPathname.current && pathname && previousPathname.current !== pathname) closeAll();
    previousPathname.current = pathname;
  }, [closeAll, pathname]);

  useEffect(() => {
    if (!modelsOpen && !mobileOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      const restoreModelsFocus = modelsOpen;
      const restoreMobileFocus = mobileOpen;
      closeAll();
      requestAnimationFrame(() => {
        if (restoreModelsFocus) modelsButtonRef.current?.focus();
        else if (restoreMobileFocus) mobileButtonRef.current?.focus();
      });
    };

    const onPointerDown = (event: PointerEvent) => {
      if (modelsOpen && !headerRef.current?.contains(event.target as Node)) setModelsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [closeAll, mobileOpen, modelsOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-50 h-20 border-b transition-all duration-300 ${
          scrolled || modelsOpen
            ? "border-black/[0.06] bg-white/90 shadow-[0_8px_35px_rgba(20,30,24,0.08)] backdrop-blur-xl"
            : "border-white/30 bg-white/45 shadow-[0_4px_30px_rgba(0,0,0,0.035)] backdrop-blur-md"
        }`}
      >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-6 px-6">
        <Link href="/" onClick={closeAfterNavigation} className="relative z-50 flex shrink-0 items-center" aria-label="GT Drive home">
          <Image src="/assets/gt-drive/brand/gt-drive-logo-header.png" alt="GT Drive" width={150} height={29} priority />
        </Link>

        <nav aria-label="Primary" className="hidden h-full items-center gap-7 lg:flex">
          <div
            className="relative flex h-full items-center py-5"
            onMouseEnter={() => setModelsOpen(true)}
            onMouseLeave={() => setModelsOpen(false)}
            onBlur={(event) => {
              const nextTarget = event.relatedTarget as Node | null;
              if (nextTarget && event.currentTarget.contains(nextTarget)) return;
              const wrapper = event.currentTarget;
              requestAnimationFrame(() => {
                if (!wrapper.contains(document.activeElement)) setModelsOpen(false);
              });
            }}
          >
            <button
              ref={modelsButtonRef}
              type="button"
              aria-controls={modelsMenuId}
              aria-expanded={modelsOpen}
              onFocus={() => setModelsOpen(true)}
              onPointerDown={() => {
                modelsOpenBeforePointerDownRef.current = modelsOpen;
              }}
              onClick={(event) => {
                if (event.detail === 0) setModelsOpen((current) => !current);
                else setModelsOpen(!modelsOpenBeforePointerDownRef.current);
              }}
              className="flex items-center gap-1.5 py-2 text-[14px] font-bold text-[var(--color-ink)] transition-colors hover:text-[var(--color-green-deep)]"
            >
              Models
              <CaretDown
                aria-hidden="true"
                size={11}
                weight="bold"
                className={`opacity-45 transition-all duration-300 ${modelsOpen ? "-rotate-180 opacity-100" : ""}`}
              />
            </button>
            <ModelMegaMenu id={modelsMenuId} open={modelsOpen} onNavigate={closeAfterNavigation} />
          </div>

          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeAfterNavigation}
              className="text-[14px] font-bold text-[var(--color-ink)] transition-colors hover:text-[var(--color-green-deep)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="relative z-50 hidden items-center gap-5 lg:flex">
          <a
            href={`https://wa.me/${contact.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[13px] font-bold text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
          >
            <WhatsappLogo size={16} weight="bold" />
            WhatsApp
          </a>
          <Link
            href="/contact/"
            onClick={closeAfterNavigation}
            className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-[var(--color-ink)] px-6 py-3 text-[13px] font-bold text-white shadow-lg transition-shadow hover:shadow-xl"
          >
            <span className="absolute inset-0 origin-left scale-x-0 bg-[var(--color-green-deep)] transition-transform duration-300 group-hover:scale-x-100" />
            <span className="relative z-10">Request information</span>
            <ArrowRight className="relative z-10 transition-transform group-hover:translate-x-1" size={14} weight="bold" />
          </Link>
        </div>

        <button
          ref={mobileButtonRef}
          type="button"
          aria-controls="mobile-nav"
          aria-expanded={mobileOpen}
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
          className="relative z-50 grid h-10 w-10 place-items-center rounded-full text-[var(--color-ink)] transition-colors hover:bg-black/[0.05] lg:hidden"
        >
          <List size={23} weight="bold" />
        </button>
      </div>
      </header>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
        className={`fixed inset-0 z-[60] overflow-y-auto bg-[#fafafa]/95 backdrop-blur-xl transition-[transform,opacity] duration-500 ease-[var(--ease-signature)] lg:hidden ${
          mobileOpen ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-full opacity-0"
        }`}
      >
        <div className="pointer-events-none absolute -left-5 top-14 select-none font-display text-[150px] font-black leading-none text-[color-mix(in_srgb,var(--color-green)_7%,transparent)]">
          GT
        </div>

        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
          className="absolute right-6 top-5 z-10 grid h-12 w-12 place-items-center rounded-full text-[var(--color-ink)] transition-colors hover:bg-[color-mix(in_srgb,var(--color-green)_9%,transparent)]"
        >
          <X size={26} weight="bold" />
        </button>

        <div className="relative z-[1] mx-auto flex min-h-dvh w-full max-w-md flex-col items-center justify-center px-6 py-20 text-center">
          <Image src="/assets/gt-drive/brand/gt-drive-logo-header.png" alt="GT Drive" width={180} height={35} className="mb-10" />

          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-green-deep)]">
            Featured models
          </p>
          <div className="w-full border-t border-black/[0.08]">
            {featuredModels.map((model) => (
              <Link
                key={model.slug}
                href={`/models/${model.slug}/`}
                onClick={closeAfterNavigation}
                className="block w-full border-b border-black/[0.08] py-3 font-display text-[26px] font-bold tracking-[-0.035em] text-[var(--color-ink)] transition-colors hover:text-[var(--color-green-deep)]"
              >
                {model.shortName}
              </Link>
            ))}
          </div>

          <div className="mt-7 flex max-w-sm flex-wrap justify-center gap-x-5 gap-y-3">
            {mobileLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeAfterNavigation}
                className="text-[13px] font-bold text-[var(--color-muted)] transition-colors hover:text-[var(--color-green-deep)]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/contact/"
            onClick={closeAfterNavigation}
            className="group relative mt-8 flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-[var(--color-ink)] px-8 py-4 text-[15px] font-bold text-white shadow-xl"
          >
            <span className="absolute inset-0 origin-left scale-x-0 bg-[var(--color-green-deep)] transition-transform duration-300 group-hover:scale-x-100" />
            <span className="relative z-10">Request information</span>
            <ArrowRight className="relative z-10" size={16} weight="bold" />
          </Link>

          <div className="mt-5 flex items-center gap-5 text-[12px] font-semibold text-[var(--color-muted)]">
            <a href={`tel:${contact.phones[0].replace(/\s/g, "")}`} className="flex items-center gap-1.5 hover:text-[var(--color-ink)]">
              <Phone size={14} weight="bold" /> Call
            </a>
            <a href={`https://wa.me/${contact.whatsapp}`} className="flex items-center gap-1.5 hover:text-[var(--color-ink)]">
              <WhatsappLogo size={14} weight="bold" /> WhatsApp
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
