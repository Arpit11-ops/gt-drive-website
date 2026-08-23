"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "@phosphor-icons/react";
import { models } from "@/lib/models";

export function InquiryForm({ defaultModel = "" }: { defaultModel?: string }) {
  const [submitted, setSubmitted] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="inquiry-form" onSubmit={submit}>
      <div className="field-row"><label>Full name<input name="name" autoComplete="name" required /></label><label>Phone number<input name="phone" type="tel" autoComplete="tel" required /></label></div>
      <div className="field-row"><label>Email address<input name="email" type="email" autoComplete="email" required /></label><label>City<input name="city" autoComplete="address-level2" required /></label></div>
      <div className="field-row"><label>Enquiry type<select name="type" defaultValue="product"><option value="product">Product information</option><option value="dealer">Dealership opportunity</option><option value="service">Service support</option><option value="other">Other enquiry</option></select></label><label>Model interest<select name="model" defaultValue={defaultModel}><option value="">Select a model</option>{models.map((model) => <option key={model.slug} value={model.slug}>{model.shortName}</option>)}</select></label></div>
      <label>Message<textarea name="message" rows={5} placeholder="How can we help?" required /></label>
      <label className="consent"><input type="checkbox" required /> I agree to be contacted regarding this enquiry.</label>
      <div className="form-submit"><button className="button button-green" type="submit">Request information <ArrowRight weight="bold" /></button>{submitted && <p role="status">Thank you. Form delivery will be connected before launch; please use WhatsApp, phone, or email for immediate contact.</p>}</div>
    </form>
  );
}
