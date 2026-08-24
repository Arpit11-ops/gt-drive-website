"use client";

import { FormEvent, useId, useState } from "react";
import Image from "next/image";
import { ArrowRight, Check, EnvelopeSimple, Phone } from "@phosphor-icons/react";
import { Reveal } from "@/components/Reveal";
import { contact, models } from "@/lib/models";

const highlights = [
  "Marketing and branding support",
  "Inventory and business support",
  "Service and technical support",
  "Training and operational guidance",
];

export function DealerPartnership() {
  const [submitted, setSubmitted] = useState(false);
  const nameId = useId();
  const emailId = useId();
  const organisationId = useId();
  const messageId = useId();

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="dealer-enquiry" className="scroll-mt-20 bg-[var(--color-stage)] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[var(--container-page)] gap-10 lg:grid-cols-[1.03fr_0.97fr] lg:gap-16">
        <Reveal>
          <div className="rounded-[32px] bg-white p-7 shadow-[0_20px_70px_rgba(17,17,17,0.07)] md:p-10 lg:p-12">
            <p className="text-xs font-semibold tracking-[0.16em] text-[var(--color-green-deep)] uppercase">Start the conversation</p>
            <h2 className="mt-5 text-[clamp(38px,5vw,62px)] leading-[0.94] tracking-[-0.045em]">Tell us where you want to grow.</h2>
            <form onSubmit={submit} className="mt-10 space-y-7">
              <div className="grid gap-7 md:grid-cols-2">
                <FormField id={nameId} label="Full name" name="name" autoComplete="name" required />
                <FormField id={emailId} label="Email address" name="email" type="email" autoComplete="email" required />
              </div>
              <FormField id={organisationId} label="City / organization" name="organisation" required />
              <div>
                <label htmlFor={messageId} className="text-xs font-semibold tracking-[0.1em] text-[var(--color-muted)] uppercase">Your dealership enquiry</label>
                <textarea
                  id={messageId}
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about your location and dealership plans"
                  className="mt-3 w-full resize-none rounded-2xl border border-[var(--color-line)] bg-[var(--color-stage)] px-5 py-4 text-sm outline-none transition-colors placeholder:text-[var(--color-muted)] focus:border-[var(--color-green)]"
                />
              </div>
              <button type="submit" className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-[var(--color-ink)] px-7 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-green-deep)]">
                Submit dealer enquiry <ArrowRight size={17} weight="bold" />
              </button>
              {submitted && (
                <p role="status" className="text-sm leading-relaxed text-[var(--color-green-deep)]">
                  Thanks. Form delivery will be connected before launch. Please call or email GT Drive for an immediate response.
                </p>
              )}
            </form>
          </div>
        </Reveal>

        <Reveal delay={100} className="flex items-center">
          <div className="w-full lg:py-8">
            <div className="flex items-center">
              {models.slice(0, 3).map((model, index) => (
                <div key={model.slug} className={`${index > 0 ? "-ml-3" : ""} relative h-12 w-12 overflow-hidden rounded-full border-2 border-[var(--color-stage)] bg-white`}>
                  <Image src={model.image} alt="" fill sizes="48px" className="object-cover" />
                </div>
              ))}
              <span className="ml-4 text-sm font-semibold text-[var(--color-body)]">09 brochure-listed models</span>
            </div>

            <h2 className="mt-8 text-[clamp(48px,6vw,86px)] leading-[0.88] tracking-[-0.055em]">Partner with purpose.</h2>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-[var(--color-body)] md:text-lg">
              Build a local GT Drive presence with a product range and support programme designed for India&apos;s electric mobility market.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-start gap-3 rounded-2xl border border-[var(--color-line)] bg-white/60 p-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-green)] text-white">
                    <Check size={14} weight="bold" />
                  </span>
                  <span className="text-sm font-medium leading-snug text-[var(--color-ink)]">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-5 rounded-3xl bg-[var(--color-ink)] p-6 text-white sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold tracking-[0.14em] text-[var(--color-green)] uppercase">Dealer enquiries</p>
                <div className="mt-3 flex flex-col gap-2 text-sm text-white/72">
                  <a href={`tel:${contact.phones[0].replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-white"><Phone size={16} weight="fill" /> {contact.phones[0]}</a>
                  <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-white"><EnvelopeSimple size={16} weight="fill" /> {contact.email}</a>
                </div>
              </div>
              <a href={`tel:${contact.phones[0].replace(/\s/g, "")}`} className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:bg-[var(--color-green)] hover:text-white">
                Call GT Drive
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FormField({ id, label, name, type = "text", ...props }: { id: string; label: string; name: string; type?: string; autoComplete?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="text-xs font-semibold tracking-[0.1em] text-[var(--color-muted)] uppercase">{label}</label>
      <input id={id} name={name} type={type} {...props} className="mt-3 h-13 w-full rounded-2xl border border-[var(--color-line)] bg-[var(--color-stage)] px-5 text-sm outline-none transition-colors focus:border-[var(--color-green)]" />
    </div>
  );
}
