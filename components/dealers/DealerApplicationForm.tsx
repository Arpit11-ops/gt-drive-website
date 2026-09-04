"use client";

import Image from "next/image";
import { FormEvent, useId, useState } from "react";
import { ArrowRight } from "@phosphor-icons/react";
import { asset } from "@/lib/asset";

export function DealerApplicationForm() {
  const [submitted, setSubmitted] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="dealer-apply" className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[var(--container-page)] px-6 md:px-12 lg:px-16">
        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          {/* LEFT — intro */}
          <div className="md:col-span-4">
            <p className="mb-6 text-[11px] font-bold tracking-[0.2em] text-[var(--color-green-deep)] uppercase">
              Take The Next Step
            </p>
            <h2 className="font-display text-[clamp(32px,3.6vw,48px)] font-extrabold leading-[0.98] tracking-[-0.035em] text-[var(--color-ink)]">
              READY TO PARTNER WITH GT?
            </h2>
            <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-[var(--color-body)]">
              Tell us about yourself and your preferred location. Our team will get in touch with you.
            </p>
            <p
              className="mt-10 text-[26px] font-normal italic text-[var(--color-green)]"
              style={{ fontFamily: '"Brush Script MT", "Segoe Script", cursive' }}
            >
              Drive Clean
              <br />
              Go Green
            </p>
          </div>

          {/* RIGHT — form */}
          <div className="relative md:col-span-8">
            <div className="relative overflow-hidden rounded-lg bg-[color-mix(in_srgb,var(--color-green)_6%,white)] p-6 md:p-10">
              <form onSubmit={submit} className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-3">
                <Field label="Full Name" name="name" required autoComplete="name" placeholder="Enter your name" />
                <Field label="Mobile Number" name="phone" type="tel" required autoComplete="tel" placeholder="Enter mobile number" />
                <Field label="Email" name="email" type="email" required autoComplete="email" placeholder="Enter your email" />

                <SelectField label="State" name="state" required>
                  <option value="">Select state</option>
                  {STATES.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </SelectField>
                <SelectField label="City" name="city" required>
                  <option value="">Select city</option>
                </SelectField>
                <Field label="Preferred Location" name="location" placeholder="e.g. Area / Locality" />

                <SelectField label="Current Business / Profession" name="profession">
                  <option value="">Select</option>
                  <option>Automobile dealer</option>
                  <option>Retail / Showroom</option>
                  <option>Service centre operator</option>
                  <option>Entrepreneur / Investor</option>
                  <option>Other</option>
                </SelectField>
                <SelectField label="Years of Experience (Optional)" name="experience">
                  <option value="">Select</option>
                  <option>0–2 years</option>
                  <option>3–5 years</option>
                  <option>6–10 years</option>
                  <option>10+ years</option>
                </SelectField>
                <div className="hidden md:block" />

                <div className="col-span-1 md:col-span-3">
                  <button
                    type="submit"
                    className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[var(--color-green)] text-[13px] font-bold text-white transition-colors hover:bg-[var(--color-green-deep)]"
                  >
                    Submit Application
                    <ArrowRight size={15} weight="bold" className="transition-transform group-hover:translate-x-1" />
                  </button>
                  {submitted && (
                    <p role="status" className="mt-4 text-center text-[13px] text-[var(--color-green-deep)]">
                      Thanks — we&apos;ll be in touch shortly.
                    </p>
                  )}
                </div>
              </form>
            </div>

            {/* subtle scooter imagery bleeding in from the right */}
            <div className="pointer-events-none absolute -right-24 -top-16 hidden h-64 w-96 opacity-90 lg:block">
              <Image
                src={asset("/assets/gt-drive/gt-soul-nxt-dl-real.webp")}
                alt=""
                fill
                sizes="384px"
                className="object-contain object-right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  const id = useId();
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[11px] font-semibold text-[var(--color-ink)]">
        {label} {required && <span className="text-[var(--color-green)]">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        className="h-11 rounded-md border border-[var(--color-line)] bg-white px-3 text-[13px] text-[var(--color-ink)] outline-none placeholder:text-[var(--color-muted)] focus:border-[var(--color-green)]"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  required,
  children,
}: {
  label: string;
  name: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  const id = useId();
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[11px] font-semibold text-[var(--color-ink)]">
        {label} {required && <span className="text-[var(--color-green)]">*</span>}
      </label>
      <select
        id={id}
        name={name}
        required={required}
        defaultValue=""
        className="h-11 rounded-md border border-[var(--color-line)] bg-white px-3 text-[13px] text-[var(--color-ink)] outline-none focus:border-[var(--color-green)]"
      >
        {children}
      </select>
    </div>
  );
}

const STATES = [
  "Andhra Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Tamil Nadu",
  "Telangana",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];
