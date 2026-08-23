"use client";

import { FormEvent, useId, useState } from "react";
import { models } from "@/lib/models";

type Props = { defaultModel?: string; defaultType?: string };

export function InquiryForm({ defaultModel = "", defaultType = "product" }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const messageId = useId();
  const consentId = useId();

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

      <div className="flex flex-col gap-3">
        <label htmlFor={messageId} className="text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">
          Message
        </label>
        <textarea
          id={messageId}
          name="message"
          rows={4}
          required
          placeholder="How can we help?"
          className="border-b border-[var(--color-line)] bg-transparent py-2 text-base leading-[1.5] text-[var(--color-ink)] outline-none placeholder:text-[var(--color-muted)] focus:border-[var(--color-green)]"
        />
      </div>

      <div className="flex items-center gap-3">
        <input
          id={consentId}
          type="checkbox"
          required
          className="h-4 w-4 accent-[var(--color-green)]"
        />
        <label htmlFor={consentId} className="text-sm text-[var(--color-body)]">
          I agree to be contacted regarding this enquiry.
        </label>
      </div>

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
  const id = useId();
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={id} className="text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        {...props}
        className="border-b border-[var(--color-line)] bg-transparent py-2 text-base text-[var(--color-ink)] outline-none focus:border-[var(--color-green)]"
      />
    </div>
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
  const id = useId();
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={id} className="text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">
        {label}
      </label>
      <select
        id={id}
        name={name}
        defaultValue={defaultValue}
        className="border-b border-[var(--color-line)] bg-transparent py-2 text-base text-[var(--color-ink)] outline-none focus:border-[var(--color-green)]"
      >
        {children}
      </select>
    </div>
  );
}
