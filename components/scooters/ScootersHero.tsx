import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import type { CSSProperties } from "react";
import { asset } from "@/lib/asset";

const colourValues: Record<string, string> = {
  white: "#f5f5f2",
  black: "#17191a",
  grey: "#8b8f93",
  "honda grey": "#737982",
  orange: "#e97822",
  maroon: "#762536",
  "silver grey": "#c5c9ce",
  green: "#2f9f54",
  "matte shale green": "#617568",
  "matte coffee brown": "#80604c",
  "tyrant gold": "#c9a53f",
  red: "#b82731",
  "peacock blue": "#24728a",
  yellow: "#e1bd2e",
};

function colourSwatchStyle(label: string): CSSProperties {
  const parts = label.split("/").map((part) => part.trim().toLowerCase());
  if (parts.length > 1) {
    const first = colourValues[parts[0]] ?? "#b8b8b8";
    const second = colourValues[parts[1]] ?? "#242424";
    return { background: `linear-gradient(135deg, ${first} 0 50%, ${second} 50% 100%)` };
  }

  const value = colourValues[parts[0]];
  return value
    ? { backgroundColor: value }
    : { background: "linear-gradient(135deg, #f2f2f0 0 50%, #b8b8b8 50% 100%)" };
}

type Props = {
  /** Full display name, e.g. "GT Flying" or "GT Soul NXT". Last word is highlighted green. */
  name: string;
  /** Two-line tagline. Use \n for the break. */
  tagline: string;
  /** Path (already relative to /public) for the scooter image. */
  image: string;
  /** Optional hero video. When provided, it replaces the hero image. */
  video?: string;
  /** Alt text for the hero image. */
  alt: string;
  /** Primary CTA — href + label. */
  cta: { href: string; label: string };
  /** Optional secondary link below the CTA (defaults to "Explore All Models"). */
  secondary?: { href: string; label: string } | null;
  /** Kicker override — defaults to "01 · Hero Product". */
  kicker?: string;
  /** Small product metadata shown beneath the hero actions. */
  colors?: string[];
  featureCount?: number;
};

export function ScootersHero({
  name,
  tagline,
  image,
  video,
  alt,
  cta,
  secondary = { href: "/models/", label: "Explore All Models" },
  kicker = "Hero Product",
  colors = [],
  featureCount,
}: Props) {
  const parts = name.trim().split(/\s+/);
  const lead = parts.slice(0, -1).join(" ");
  const highlight = parts[parts.length - 1];

  if (video) {
    return (
      <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-[#dfe5e7] pt-20 text-white">
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          src={asset(video)}
          poster={asset(image)}
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          preload="auto"
          aria-label={alt}
        />
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(90deg,rgba(250,252,252,0.68)_0%,rgba(250,252,252,0.35)_28%,rgba(250,252,252,0.04)_58%,rgba(0,0,0,0.12)_100%),linear-gradient(to_top,rgba(0,0,0,0.18),transparent_42%)]" />
        <div aria-hidden className="pointer-events-none absolute right-0 top-0 z-[2] h-full w-8 bg-[var(--color-green)] opacity-90 [clip-path:polygon(100%_0,0_15%,0_85%,100%_100%)]" />
        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] max-w-[var(--container-page)] items-center px-6 py-12 md:px-12 lg:px-16">
          <div className="max-w-[18rem] rounded-[1rem] border border-white/70 bg-white/78 p-4 text-[var(--color-ink)] shadow-[0_14px_34px_rgba(17,17,17,0.12)] backdrop-blur-md md:max-w-[19rem] md:p-5">
            <p className="mb-4 flex items-center gap-2.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--color-green-deep)]"><span className="h-[2px] w-5 bg-[var(--color-green)]" />{kicker}</p>
            <h1 className="font-display text-[clamp(38px,4.5vw,64px)] font-extrabold uppercase leading-[0.9] tracking-[-0.055em]">{lead && <>{lead} </>}<span className="text-[var(--color-green)]">{highlight}.</span></h1>
            <p className="mt-4 max-w-xs whitespace-pre-line text-[12px] leading-relaxed text-[var(--color-body)]">{tagline}</p>
            <Link href={cta.href} className="group mt-5 inline-flex h-9 items-center gap-2 rounded-full bg-[var(--color-green)] px-4 text-[10px] font-bold text-white transition-colors hover:bg-[var(--color-green-deep)]">{cta.label}<ArrowRight size={13} weight="bold" className="transition-transform group-hover:translate-x-1" /></Link>
            <div className="mt-5 grid grid-cols-2 gap-3 border-t border-black/10 pt-3 text-[9px]"><div><p className="font-bold uppercase tracking-[0.14em] text-[var(--color-muted)]">Range</p><p className="mt-1 text-[var(--color-body)]">Everyday city riding</p></div><div><p className="font-bold uppercase tracking-[0.14em] text-[var(--color-muted)]">GT Drive</p><p className="mt-1 text-[var(--color-body)]">Electric mobility</p></div></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative isolate overflow-hidden bg-white pt-20">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-[var(--container-page)] grid-cols-1 md:grid-cols-12">
        {/* LEFT — copy */}
        <div className="relative z-10 col-span-1 flex flex-col justify-center px-6 py-14 md:col-span-5 md:px-12 md:py-16 lg:px-16">
          <p className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--color-green-deep)]">
            <span className="h-[2px] w-6 bg-[var(--color-green)]" />
            {kicker}
          </p>

          <h1 className="font-display text-[clamp(48px,6.4vw,96px)] font-extrabold uppercase leading-[0.95] tracking-[-0.045em] text-[var(--color-ink)]">
            {lead && <>{lead} </>}
            <span className="text-[var(--color-green)]">{highlight}.</span>
          </h1>

          <p className="mt-6 max-w-sm whitespace-pre-line text-[16px] leading-relaxed text-[var(--color-body)]">
            {tagline}
          </p>

          <div className="mt-10 flex flex-col items-start gap-6">
            <Link
              href={cta.href}
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-[var(--color-green)] px-6 text-[13px] font-bold text-white transition-colors hover:bg-[var(--color-green-deep)]"
            >
              {cta.label}
              <ArrowRight size={15} weight="bold" className="transition-transform group-hover:translate-x-1" />
            </Link>

            {secondary && (
              <Link
                href={secondary.href}
                className="group inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
              >
                <ArrowDown size={13} weight="bold" className="text-[var(--color-green)]" />
                {secondary.label}
              </Link>
            )}

            {(colors.length > 0 || featureCount) && (
              <div className="mt-2 grid max-w-sm grid-cols-2 gap-5 border-t border-black/10 pt-5 text-[11px]">
                {colors.length > 0 && (
                  <div>
                    <p className="font-bold uppercase tracking-[0.16em] text-[var(--color-muted)]">Colour options</p>
                    <div className="mt-2 flex items-center gap-2.5">
                      <div className="flex flex-wrap gap-1.5" aria-label={`${colors.length} colour options`}>
                        {colors.map((colour) => (
                          <span
                            key={colour}
                            role="img"
                            aria-label={`${colour} finish`}
                            title={colour}
                            className="h-5 w-5 rounded-full border border-black/15 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.22)]"
                            style={colourSwatchStyle(colour)}
                          />
                        ))}
                      </div>
                      <span className="text-[11px] text-[var(--color-body)]">{colors.length} finish{colors.length === 1 ? "" : "es"}</span>
                    </div>
                  </div>
                )}
                {featureCount && (
                  <div>
                    <p className="font-bold uppercase tracking-[0.16em] text-[var(--color-muted)]">Built around</p>
                    <p className="mt-2 leading-relaxed text-[var(--color-body)]">{featureCount} considered features</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT — image with diagonal green accent + faded GT watermark */}
        <div className="relative col-span-1 min-h-[420px] md:col-span-7 md:min-h-0">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-14 hidden w-[42%] bg-[var(--color-stage)] md:block"
            style={{ clipPath: "polygon(100% 0, 100% 100%, 0 82%, 26% 18%)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-4 top-1/2 hidden -translate-y-1/2 select-none font-display text-[180px] font-black leading-none tracking-[-0.06em] text-black/[0.045] md:block lg:right-12 lg:text-[240px]"
          >
            GT
          </div>

          <div className={video ? "relative z-[1] flex h-full w-full items-center px-6 pb-10 md:px-8 md:py-12 lg:px-12" : "relative z-[1] h-full w-full"}>
            {video ? (
              <div className="aspect-video w-full overflow-hidden rounded-[1.5rem] border border-black/5 bg-[var(--color-stage)] shadow-[0_20px_60px_rgba(17,17,17,0.12)] md:rounded-[2rem]">
              <video
                className="block h-full w-full object-cover object-center"
                src={asset(video)}
                poster={asset(image)}
                autoPlay
                muted
                loop
                playsInline
                disablePictureInPicture
                disableRemotePlayback
                preload="metadata"
                aria-label={alt}
              />
              </div>
            ) : (
              <Image
                src={asset(image)}
                alt={alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-contain object-center"
              />
            )}
          </div>

          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-[2] hidden w-10 bg-[var(--color-green)] md:block"
            style={{ clipPath: "polygon(100% 0, 0 55%, 100% 100%)" }}
          />
        </div>
      </div>
    </section>
  );
}
