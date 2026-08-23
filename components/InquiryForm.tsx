"use client";

import { FormEvent, useState } from "react";
import { models } from "@/lib/models";

type Props = { defaultModel?: string; defaultType?: string };

export function InquiryForm({ defaultModel = "", defaultType = "product" }: Props) {
  const [submitted, setSubmitted] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-8">
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Full name" name="name" autoComplete="name" required />
        <Field label="Phone number" name="phone" type="tel" autoComplete="tel" required />
        <Field label="Email address" name="email" type="email" autoComplete="email" required />
        <Field label="City" name="city" autoComplete="address-level2" required />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <SelectField label="Enquiry type" name="type" defaultValue={defaultType}>
          <option value="product">Product information</option>
          <option value="dealer">Dealership opportunity</option>
          <option value="service">Service support</option>
          <option value="other">Other enquiry</option>
        </SelectField>
        <SelectField label="Model of interest" name="model" defaultValue={defaultModel}>
          <option value="">No specific model</option>
          {models.map((model) => (
            <option key={model.slug} value={model.slug}>
              {model.shortName}
            </option>
          ))}
        </SelectField>
      </div>

      <label className="flex flex-col gap-3">
        <span className="text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">
          Message
        </span>
        <textarea
          name="message"
          rows={4}
          required
          placeholder="How can we help?"
          className="border-b border-[var(--color-line)] bg-transparent py-2 text-base leading-[1.5] text-[var(--color-ink)] outline-none placeholder:text-[var(--color-muted)] focus:border-[var(--color-green)]"
        />
      </label>

      <label className="flex items-center gap-3 text-sm text-[var(--color-body)]">
        <input
          type="checkbox"
          required
          className="h-4 w-4 accent-[var(--color-green)]"
        />
        <span>I agree to be contacted regarding this enquiry.</span>
      </label>

      <div className="flex flex-wrap items-center gap-6">
        <button
          type="submit"
          className="inline-flex h-[52px] items-center justify-center rounded-sm bg-[var(--color-green)] px-6 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-green-deep)]"
        >
          Send enquiry
        </button>
        {submitted && (
          <p role="status" className="text-sm text-[var(--color-green-deep)]">
            Thanks. Form delivery will be connected before launch — please use
            WhatsApp, phone or email for immediate contact.
          </p>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  ...props
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-3">
      <span className="text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">
        {label}
      </span>
      <input
        name={name}
        type={type}
        {...props}
        className="border-b border-[var(--color-line)] bg-transparent py-2 text-base text-[var(--color-ink)] outline-none focus:border-[var(--color-green)]"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  defaultValue,
  children,
}: {
  label: string;
  name: string;
  defaultValue?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-3">
      <span className="text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">
        {label}
      </span>
      <select
        name={name}
        defaultValue={defaultValue}
        className="border-b border-[var(--color-line)] bg-transparent py-2 text-base text-[var(--color-ink)] outline-none focus:border-[var(--color-green)]"
      >
        {children}
      </select>
    </label>
  );
}
