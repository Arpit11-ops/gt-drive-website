"use client";

import { FormEvent, useId, useState } from "react";
import { models } from "@/lib/models";
import { asset } from "@/lib/asset";

type Props = { defaultModel?: string; defaultType?: string };

export function InquiryForm({
  defaultModel = "",
  defaultType = "dealership",
}: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const messageId = useId();
  const consentId = useId();

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setStatus("sending");
    try {
      const response = await fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form action={asset("/api/contact.php")} method="post" onSubmit={submit} className="gt-card flex flex-col gap-8 rounded-[1.5rem] bg-white p-6 shadow-[0_16px_40px_rgba(17,17,17,0.07)] md:p-10">
      <input type="hidden" name="source" value="GT Drive website" />
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-px w-px opacity-0" />
      <div className="grid gap-6 md:grid-cols-2">
        <Field
          label="Your name"
          name="name"
          autoComplete="name"
          required
        />
        <Field
          label="Business or dealership name"
          name="organisation"
          autoComplete="organization"
          required
        />
        <Field
          label="Phone number"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
        />
        <Field
          label="Email address"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <Field
          label="City"
          name="city"
          autoComplete="address-level2"
          required
        />
        <Field
          label="State"
          name="state"
          autoComplete="address-level1"
          required
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <SelectField label="Enquiry type" name="type" defaultValue={defaultType}>
          <option value="dealership">Dealership opportunity</option>
          <option value="fleet">Fleet or bulk enquiry</option>
          <option value="service">Service partnership</option>
          <option value="media">Media or press</option>
          <option value="other">Other enquiry</option>
        </SelectField>
        <SelectField
          label="Model of interest (optional)"
          name="model"
          defaultValue={defaultModel}
        >
          <option value="">No specific model</option>
          {models.map((model) => (
            <option key={model.slug} value={model.slug}>
              {model.shortName}
            </option>
          ))}
        </SelectField>
      </div>

      <div className="flex flex-col gap-3">
        <label
          htmlFor={messageId}
          className="text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]"
        >
          Message
        </label>
        <textarea
          id={messageId}
          name="message"
          rows={4}
          required
          placeholder="Tell us what you would like to know about GT Drive."
          className="border-b border-[var(--color-line)] bg-transparent py-2 text-base leading-[1.5] text-[var(--color-ink)] outline-none placeholder:text-[var(--color-muted)] focus:border-[var(--color-green)]"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id={consentId}
          type="checkbox"
          required
          className="mt-1 h-4 w-4 accent-[var(--color-green)]"
        />
        <label htmlFor={consentId} className="text-sm text-[var(--color-body)]">
          I agree to be contacted about this enquiry.
        </label>
      </div>

      <div className="flex flex-wrap items-center gap-6">
        <button
          type="submit"
          className="inline-flex h-[52px] items-center justify-center rounded-sm bg-[var(--color-green)] px-6 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-green-deep)]"
        >
          Send enquiry
        </button>
        {status !== "idle" && (
          <p role="status" className="text-sm text-[var(--color-green-deep)]">
            {status === "sending" && "Sending your enquiry…"}
            {status === "success" && "Thanks — your enquiry has been sent. We’ll be in touch shortly."}
            {status === "error" && "We couldn’t send this right now. Please call, WhatsApp, or email us directly."}
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
      <label
        htmlFor={id}
        className="text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]"
      >
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
      <label
        htmlFor={id}
        className="text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]"
      >
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
