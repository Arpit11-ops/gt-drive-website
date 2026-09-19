import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { asset } from "@/lib/asset";

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
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#dfe5e7] text-white">
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
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(135deg,rgba(250,252,252,0.72)_0%,rgba(250,252,252,0.34)_20%,transparent_42%),linear-gradient(to_top,rgba(0,0,0,0.2),transparent_38%)]" />
        <div className="relative z-10 flex min-h-[100svh] items-start px-5 pt-24 md:px-10 md:pt-28 lg:px-14 lg:pt-32">
          <div className="max-w-[12.5rem] rounded-lg border border-white/45 bg-white/35 p-3 shadow-[0_10px_24px_rgba(17,17,17,0.05)] backdrop-blur-[2px] md:max-w-[14rem] md:p-3.5">
            <p className="mb-1.5 flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.18em] text-[var(--color-green-deep)]">
              <span className="h-px w-4 bg-[var(--color-green)]" />
              {kicker}
            </p>
            <h1 className="font-display text-[clamp(29px,3.25vw,48px)] font-extrabold uppercase leading-[0.88] tracking-[-0.055em] text-[var(--color-ink)]">
              {lead && <>{lead} </>}
              <span className="text-[var(--color-green)]">{highlight}.</span>
            </h1>
            <p className="mt-2 max-w-[11rem] whitespace-pre-line text-[10px] leading-relaxed text-[var(--color-body)] md:text-[11px]">{tagline}</p>
            <Link href={cta.href} className="mt-3 inline-flex h-8 items-center gap-1.5 rounded-full bg-[var(--color-green)] px-3 text-[9px] font-bold text-white transition-colors hover:bg-[var(--color-green-deep)]">
              {cta.label}
              <ArrowRight size={15} weight="bold" />
            </Link>
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
                    <p className="mt-2 leading-relaxed text-[var(--color-body)]">{colors.length} finishes · {colors.slice(0, 2).join(" · ")}{colors.length > 2 ? " · +more" : ""}</p>
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
