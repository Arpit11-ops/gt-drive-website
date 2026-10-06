import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Barcode, Check, ChatCircleText, Cube, EnvelopeSimple, FileText, GearSix, Headphones, Leaf, MapPin, Motorcycle, Phone, ShieldCheck, Truck, User, Wrench } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";
import { InquiryForm } from "@/components/InquiryForm";
import { asset } from "@/lib/asset";
import { models } from "@/lib/models";

export const metadata: Metadata = {
  title: "Support",
  description: "Product, customer, warranty and spare-parts support for GT Drive owners and dealers.",
};

const supportPaths = [
  { id: "product-support", title: "Product support", text: "Get practical help with your GT Drive scooter, its features, and everyday ownership.", icon: Wrench },
  { id: "customer-support", title: "Customer support", text: "Raise a question or complaint and we will connect you with the right assistance.", icon: Phone },
  { id: "warranty-support", title: "Warranty support", text: "Understand your component coverage and request help through your GT Drive dealer.", icon: ShieldCheck },
  { id: "spare-parts-support", title: "Spare parts support", text: "Ask for genuine GT Drive parts and check availability through the dealer network.", icon: Check },
];

const faqs = [
  ["How can I get support for my GT Drive scooter?", "You can raise a support request through our website with your product and contact details. Our team will assist you with your concern."],
  ["How can I register a product-related complaint?", "Submit the support form with your scooter details, chassis number and issue description. Our support team will review your request."],
  ["Where can I find my scooter’s chassis number?", "The chassis number is marked on your scooter and can be checked directly on the vehicle."],
  ["How can I get technical assistance for my scooter?", "Submit your technical concern through our support form, and our team will guide you with the required assistance."],
  ["How can I request repair or maintenance assistance?", "Contact your GT Drive dealer or submit a support request through our website for repair and maintenance assistance."],
  ["Where can I get genuine GT Drive spare parts?", "Genuine spare parts can be arranged through the GT Drive dealer network. Contact your dealer for availability and assistance."],
  ["How can I contact my nearest GT Drive dealer?", "You can contact the GT Drive dealer from whom you purchased your scooter for product and service-related assistance."],
  ["Do GT Drive dealers receive marketing support?", "Yes. GT Drive provides marketing support to dealers through promotional materials, branding assets and other marketing resources."],
  ["Do I need to pay any security amount to get a GT Drive dealership?", "No. GT Drive does not take any security amount for providing a dealership."],
  ["How can I apply for a GT Drive dealership?", "You can submit your dealership enquiry through our website, and our team will connect with you regarding the next steps."],
  ["What kind of support does GT Drive provide to its dealers?", "GT Drive provides dealership, marketing, technical and product support to help dealers grow and operate efficiently."],
  ["How can I contact GT Drive for dealership-related queries?", "You can submit your enquiry through the website or contact the GT Drive team directly for dealership-related assistance."],
];

const warranty = [
  ["Motor", "1 Year", "/assets/technology/motor.jpeg"],
  ["Controller", "1 Year", "/assets/technology/controller.jpeg"],
  ["Chassis", "1 Year", "/assets/support/chassis.jpeg"],
  ["Superior Graphine Battery", "1 Year", "/assets/support/graphene-battery.jpeg"],
  ["Lithium Battery", "3 Years", "/assets/technology/battery.jpeg"],
  ["Charger", "1 Year", "/assets/technology/charger.jpeg"],
];

export default function SupportPage() {
  return (
    <div className="bg-[#f5f8f5] text-[var(--color-ink)]">
      <section
        className="relative overflow-hidden bg-[#111] bg-cover bg-center text-white"
        style={{ backgroundImage: `linear-gradient(90deg, rgba(17,17,17,.98) 0%, rgba(17,17,17,.94) 34%, rgba(17,17,17,.46) 66%, rgba(17,17,17,.14) 100%), url(${asset("/assets/support/hero-banner.webp")})` }}
      >
        <div className="mx-auto max-w-[var(--container-page)] px-6 pb-16 pt-36 md:px-10 md:pb-24 md:pt-44">
          <Reveal className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-green)]"><span className="h-px w-12 bg-[var(--color-green)]" /> GT Drive care</Reveal>
          <Reveal delay={80} className="mt-7 max-w-4xl"><h1 className="text-[clamp(52px,8vw,116px)] leading-[0.88] tracking-[-0.06em]">Support that keeps<br /><span className="text-[var(--color-green)]">you moving.</span></h1></Reveal>
          <Reveal delay={160} className="mt-8 max-w-xl"><p className="text-base leading-relaxed text-white/65 md:text-lg">Whether you need product guidance or ownership help, GT Drive support is here to make the next step clear.</p></Reveal>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 md:px-10 md:py-20">
        <Reveal><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{supportPaths.map(({ id, title, text, icon: Icon }) => <a key={id} href={`#${id}`} className="group rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[0_12px_35px_rgba(17,17,17,0.04)] transition hover:-translate-y-1 hover:border-[var(--color-green)]/40"><span className="grid h-11 w-11 place-items-center rounded-full bg-[color-mix(in_srgb,var(--color-green)_12%,white)] text-[var(--color-green)]">{id === "spare-parts-support" ? <SparePartsIcon /> : <Icon size={21} weight="bold" />}</span><h2 className="mt-5 font-display text-xl font-bold">{title}</h2><p className="mt-2 text-sm leading-relaxed text-[var(--color-body)]">{text}</p><span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-green)]">Explore <ArrowRight size={13} /></span></a>)}</div></Reveal>

        <section id="product-support" className="mt-6 scroll-mt-28 rounded-[2rem] bg-[var(--color-green)] px-5 py-14 md:px-10 md:py-20"><div className="grid items-start gap-8"><div className="mx-auto text-center"><p className="text-xs font-bold uppercase tracking-[0.2em] text-white">Product support</p><h2 className="mt-4 text-4xl leading-[0.95] md:text-6xl">Tell us what<br /><span className="text-white">you need.</span></h2><p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-white/90">Share your scooter details and issue. Our support team will review your request and connect you with the right assistance.</p></div><SupportForm /></div></section>

        <section id="customer-support" className="scroll-mt-28 rounded-[2rem] bg-white py-12 sm:py-14 md:py-20"><div className="mb-8"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-green)]">Customer support</p><h2 className="mt-4 text-4xl leading-[0.95] sm:text-5xl md:text-6xl">Answers for the<br /><span className="text-[var(--color-green)]">road ahead.</span></h2></div><div className="grid items-start gap-3 md:grid-cols-2 md:gap-4">{faqs.map(([q, a]) => <details key={q} name="support-faq" className="group w-full self-start rounded-xl border border-black/[0.07] bg-[color-mix(in_srgb,var(--color-green)_9%,white)] px-4 py-4 sm:px-5"><summary className="cursor-pointer list-none pr-6 text-sm font-bold leading-snug marker:hidden">{q}<span className="float-right text-lg font-normal text-[var(--color-green)] transition group-open:rotate-45">+</span></summary><p className="mt-3 border-t border-black/[0.06] pt-3 text-sm leading-relaxed text-[var(--color-body)]">{a}</p></details>)}</div></section>

        <section id="warranty-support" className="scroll-mt-28 py-14 md:py-20"><div className="mx-auto mb-8 max-w-3xl text-center"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-green)]">Warranty support</p><h2 className="mt-4 text-4xl leading-[0.95] md:text-6xl">Peace of mind,<br />backed by <span className="text-[var(--color-green)]">GT Drive.</span></h2><p className="mt-6 text-base leading-relaxed text-[var(--color-body)]">We provide warranty coverage on key components so you can ride with confidence.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{warranty.map(([name, years, image]) => <div key={name} className="grid grid-cols-[0.9fr_1.1fr] items-center overflow-hidden rounded-2xl bg-[color-mix(in_srgb,var(--color-green)_9%,white)] p-4 shadow-[0_12px_35px_rgba(17,17,17,0.05)]"><div className="relative aspect-square overflow-hidden rounded-xl bg-white"><Image src={asset(image)} alt={name} fill sizes="180px" className="object-contain" /></div><div className="pl-4"><h3 className="font-display text-lg font-bold leading-tight">{name}</h3><span className="mt-3 inline-flex rounded-full bg-white px-3 py-1.5 font-display text-xl font-bold text-[var(--color-green)]">{years}</span><p className="mt-1 text-xs text-[var(--color-body)]">Warranty</p></div></div>)}</div><div className="mt-8 flex items-center gap-4 rounded-2xl bg-[color-mix(in_srgb,var(--color-green)_10%,white)] px-6 py-5 text-sm text-[var(--color-body)]"><ShieldCheck size={28} className="shrink-0 text-[var(--color-green)]" /><p>For warranty assistance, please contact your GT Drive dealer or submit a support request through our website.</p></div></section>

        <section id="spare-parts-support" className="scroll-mt-28 py-14 md:py-20"><div className="rounded-[2rem] bg-[var(--color-green)] p-4 sm:p-6 md:p-10"><div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8"><SparePartsForm /><div className="rounded-[1.5rem] bg-white p-5 sm:p-7"><div className="text-center"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-green)]">Spare parts support</p><h2 className="mt-3 text-3xl leading-[0.95] md:text-5xl">Why choose GT Drive<br /><span className="text-[var(--color-green)]">spare parts support?</span></h2></div><div className="mt-6 grid gap-3 sm:grid-cols-2">{[[ShieldCheck, "Genuine & Compatible Parts", "Original parts for long-lasting performance."], [GearSix, "Quick Assistance", "Our team gets back to you promptly."], [Truck, "Pan India Availability", "Spare parts support across India."], [Headphones, "Dedicated Support Team", "Trained to help with your requirement."]].map(([Icon, title, text]) => <div key={title as string} className="rounded-xl bg-[color-mix(in_srgb,var(--color-green)_9%,white)] p-4"><span className="grid h-9 w-9 place-items-center rounded-full bg-white text-[var(--color-green)]"><Icon size={19} weight="bold" /></span><h3 className="mt-3 text-sm font-bold">{title as string}</h3><p className="mt-1 text-xs leading-relaxed text-[var(--color-body)]">{text as string}</p></div>)}</div><div className="mt-4 flex items-center gap-4 rounded-xl bg-[color-mix(in_srgb,var(--color-green)_9%,white)] p-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-black"><Headphones size={24} weight="bold" /></span><div><h3 className="text-sm font-bold">Need immediate help?</h3><p className="text-xs text-[var(--color-body)]">Call our spare parts support team</p><a href="tel:+917065418590" className="mt-1 inline-block text-sm font-bold text-[var(--color-green)]">+91 70654 18590</a></div></div><div className="mt-4 grid grid-cols-3 divide-x divide-black/10 rounded-xl bg-white px-2 py-3 text-center text-[10px] font-semibold text-[var(--color-body)]"><span className="px-2"><Cube size={18} className="mx-auto mb-1 text-[var(--color-green)]" />Reliable Support</span><span className="px-2"><GearSix size={18} className="mx-auto mb-1 text-[var(--color-green)]" />Better Performance</span><span className="px-2"><Leaf size={18} className="mx-auto mb-1 text-[var(--color-green)]" />Longer Scooter Life</span></div></div></div></div></section>

        <section id="general-enquiry" className="scroll-mt-28 border-t border-black/[0.06] bg-[#f5f8f5] py-14 md:py-20">
          <div className="mx-auto grid max-w-[var(--container-page)] gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-start md:gap-12">
            <div className="pt-2">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-green)]">General enquiry</p>
              <h2 className="mt-4 text-4xl leading-[1.08] md:text-6xl">Still need<br /><span className="text-[var(--color-green)]">help?</span></h2>
              <p className="mt-8 max-w-sm text-[15px] leading-relaxed text-[var(--color-body)]">Tell us what you need and the GT Drive team will get back to you with the right next step.</p>
            </div>
            <InquiryForm defaultType="other" />
          </div>
        </section>

      </section>
    </div>
  );
}

function SparePartsForm() {
 return <form action={process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || asset("/api/contact.php")} method="post" encType="multipart/form-data" className="rounded-[1.5rem] bg-white p-5 shadow-[0_16px_50px_rgba(17,17,17,0.08)] sm:p-7 lg:flex lg:flex-col lg:justify-between"><input type="hidden" name="source" value="GT Drive spare parts support page" /><input type="hidden" name="type" value="spare-parts" /><input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-px w-px opacity-0" /><div className="mb-6"><h3 className="font-display text-2xl font-bold leading-tight">Spare Parts Enquiry</h3><p className="mt-1 text-xs text-[var(--color-muted)]">Fill in the details below and our team will get back to you shortly.</p></div><div className="grid gap-3 sm:grid-cols-2"><SupportSelect label="Scooter Model" name="model" icon={<Motorcycle size={15} />} required><option value="">Select your model</option>{models.filter((model) => model.status !== "coming-soon").map((model) => <option key={model.slug} value={model.slug}>{model.shortName}</option>)}</SupportSelect><SupportField label="Purchase Date" name="purchase_date" type="date" required /><SupportField label="Chassis / VIN Number" name="chassis" placeholder="Enter chassis number" /><SupportField label="City" name="city" placeholder="Enter your city" required /></div><label className="mt-3 block text-[10px] font-bold text-[var(--color-ink)]">Spare Part Requirement <span className="text-[var(--color-green)]">*</span><span className="relative mt-1 block"><textarea name="part_requirement" rows={3} maxLength={300} required placeholder="Describe your requirement (e.g. need brake pad, charger, headlight etc.)" className="w-full resize-none rounded-md border border-black/[0.1] bg-[#fbfcfb] px-3 py-3 text-sm font-normal outline-none focus:border-[var(--color-green)] sm:text-xs" /></span></label><div className="mt-3 grid gap-3 sm:grid-cols-2"><SupportField label="Quantity" name="quantity" type="number" placeholder="Enter quantity" required /><label className="block text-[10px] font-bold text-[var(--color-ink)]">Upload Photo <span className="font-normal text-[var(--color-muted)]">(Optional)</span><span className="mt-1 flex h-11 items-center justify-center rounded-md border border-dashed border-black/[0.14] bg-[#fbfcfb] text-xs text-[var(--color-muted)]"><input type="file" name="photo" accept="image/jpeg,image/png" className="w-full px-2 text-xs" /></span></label></div><div className="mt-3 grid gap-3 sm:grid-cols-2"><SupportField label="Your Name" name="name" placeholder="Enter your name" required /><SupportField label="Mobile Number" name="phone" type="tel" placeholder="Enter mobile number" required /></div><button type="submit" className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[var(--color-green-deep)] px-6 text-sm font-bold text-white shadow-[0_6px_16px_rgba(8,125,54,0.2)] hover:bg-[var(--color-green)] sm:h-10 sm:text-xs">Submit Request <ArrowRight size={15} /></button></form>;
}

function SupportForm() {
  return <form action={process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || asset("/api/contact.php")} method="post" className="rounded-[1.5rem] bg-white p-5 shadow-[0_16px_50px_rgba(17,17,17,0.08)] md:p-7"><input type="hidden" name="source" value="GT Drive support page" /><input type="hidden" name="type" value="support" /><input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-px w-px opacity-0" /><div className="mb-6 flex items-start gap-3"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[color-mix(in_srgb,var(--color-green)_13%,white)] text-[var(--color-green)]"><HeadphonesIcon /></span><div><h3 className="font-display text-xl font-bold leading-tight">Submit a Support Request</h3><p className="mt-1 text-[11px] text-[var(--color-muted)]">Share the details below and our team will assist you.</p></div></div><div className="grid gap-3"><SupportSelect label="Select Your Product" name="model" icon={<Motorcycle size={15} />} required><option value="">Choose your GT Drive model</option>{models.filter((model) => model.status !== "coming-soon").map((model) => <option key={model.slug} value={model.slug}>{model.shortName}</option>)}</SupportSelect><SupportField label="Chassis Number" name="chassis" placeholder="Enter your 17-digit chassis number" icon={<Barcode size={15} />} required /><SupportSelect label="Select Your Issue" name="issue" icon={<FileText size={15} />} required><option value="">Choose your issue</option><option>Technical assistance</option><option>Repair or maintenance</option><option>Warranty request</option><option>Spare parts enquiry</option><option>Other</option></SupportSelect><SupportSelect label="Where Did You Purchase" name="city" icon={<MapPin size={15} />} required><option value="">Select dealership / location</option><option>GT Drive dealer</option><option>Online enquiry</option><option>Other location</option></SupportSelect><div className="grid gap-3 sm:grid-cols-2"><SupportField label="Name" name="name" placeholder="Enter your full name" icon={<User size={15} />} required /><SupportField label="Email Address" name="email" type="email" placeholder="Enter your email address" icon={<EnvelopeSimple size={15} />} required /></div><SupportField label="Phone Number" name="phone" type="tel" placeholder="Enter your mobile number" icon={<Phone size={15} />} required /><label className="block text-[10px] font-bold text-[var(--color-ink)]">Tell Us About Your Issue <span className="text-[var(--color-green)]">*</span><span className="relative mt-1 block"><ChatCircleText size={15} className="pointer-events-none absolute left-3 top-3 text-[var(--color-body)]" /><textarea name="message" rows={4} maxLength={500} required placeholder="Describe your problem or query in detail..." className="w-full resize-none rounded-md border border-black/[0.1] bg-[#fbfcfb] py-3 pl-9 pr-3 text-xs font-normal outline-none focus:border-[var(--color-green)]" /><span className="absolute bottom-2 right-3 text-[9px] font-normal text-[var(--color-muted)]">0/500</span></span></label></div><label className="mt-4 flex items-start gap-2 text-[10px] leading-tight text-[var(--color-body)]"><input type="checkbox" name="consent" value="yes" required className="mt-0.5 h-3 w-3 accent-[var(--color-green)]" /> <span>I have read the <a href="/privacy-policy/" className="font-semibold text-[var(--color-green)] underline">Privacy Policy</a> and agree to the processing of my personal data for support purposes.</span></label><button type="submit" className="mt-5 inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-[var(--color-green-deep)] px-6 text-xs font-bold text-white shadow-[0_6px_16px_rgba(8,125,54,0.2)] hover:bg-[var(--color-green)]">Submit Request <ArrowRight size={15} /></button></form>;
}

function SupportField({ label, name, type = "text", required = false, placeholder, icon }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string; icon?: React.ReactNode }) {
  return <label className="block text-[10px] font-bold text-[var(--color-ink)]">{label} {required && <span className="text-[var(--color-green)]">*</span>}<span className="relative mt-1 block">{icon && <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-body)]">{icon}</span>}<input name={name} type={type} required={required} placeholder={placeholder} className={`h-11 w-full rounded-md border border-black/[0.1] bg-[#fbfcfb] py-2 text-sm font-normal outline-none placeholder:text-[var(--color-muted)] focus:border-[var(--color-green)] sm:h-9 sm:text-xs ${icon ? "pl-9 pr-3" : "px-3"}`} /></span></label>;
}

function SupportSelect({ label, name, required = false, icon, children }: { label: string; name: string; required?: boolean; icon?: React.ReactNode; children: React.ReactNode }) {
  return <label className="block text-[10px] font-bold text-[var(--color-ink)]">{label} {required && <span className="text-[var(--color-green)]">*</span>}<span className="relative mt-1 block">{icon && <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-body)]">{icon}</span>}<select name={name} required={required} defaultValue="" className="h-11 w-full appearance-none rounded-md border border-black/[0.1] bg-[#fbfcfb] px-9 text-sm font-normal text-[var(--color-body)] outline-none focus:border-[var(--color-green)] sm:h-9 sm:text-xs">{children}</select><span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-body)]">⌄</span></span></label>;
}

function HeadphonesIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 13v-1a8 8 0 0 1 16 0v1" /><path d="M4 13h3v6H5a1 1 0 0 1-1-1v-5Zm16 0h-3v6h2a1 1 0 0 0 1-1v-5Z" /><path d="M17 19c0 1.1-.9 2-2 2h-2" /></svg>;
}

function SparePartsIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="m4 17 12 4 12-4-4-5-8 3-8-3-4 5Z" />
      <path d="M7 18v8l9 3 9-3v-8M16 21v8" />
      <path d="M17.5 13.5 21 10a4.5 4.5 0 0 1 5.5-5.5l-2.6 2.6.5 2.5 2.5.5 2.6-2.6A4.5 4.5 0 0 1 24 13l-2.5 2.5" />
      <circle cx="12.2" cy="10.5" r="2.4" />
      <path d="M12.2 6.5v1.6m0 4.8v1.6m-4-4h1.6m4.8 0h1.6M9.4 7.7l1.1 1.1m3.4 3.4 1.1 1.1m0-5.6-1.1 1.1m-3.4 3.4-1.1 1.1" />
    </svg>
  );
}
