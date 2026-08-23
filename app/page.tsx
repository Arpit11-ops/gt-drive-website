import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BatteryCharging, Factory, Headset, MapPin, Play, ShieldCheck, Storefront, Wrench } from "@phosphor-icons/react/dist/ssr";
import { ContactActions } from "@/components/ContactActions";
import { InquiryForm } from "@/components/InquiryForm";
import { ModelRunway } from "@/components/ModelRunway";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { ShowroomHero } from "@/components/ShowroomHero";
import { locations, models } from "@/lib/models";

const strengths = [
  { icon: BatteryCharging, title: "In-house lithium battery", copy: "Battery capability supporting GT Drive's electric mobility ecosystem." },
  { icon: Factory, title: "Advanced manufacturing", copy: "Infrastructure built around electric two-wheeler production." },
  { icon: Storefront, title: "Wide dealer network", copy: "A growing network serving riders and business partners across India." },
  { icon: Headset, title: "Reliable service support", copy: "Dependable support designed for riders and dealer partners." },
];

export default function HomePage() {
  const pro = models.find((model) => model.slug === "gt-drive-pro")!;
  return (
    <>
      <ShowroomHero />

      <section className="strength-rail" aria-label="GT Drive strengths">
        {strengths.map(({ icon: Icon, title, copy }) => <div className="strength-item" key={title}><Icon /><div><h2>{title}</h2><p>{copy}</p></div></div>)}
      </section>

      <section className="section section-runway">
        <Reveal className="section-heading split-heading"><div><span className="eyebrow">Our range</span><h2>Built for every<br />kind of ride.</h2></div><p>Explore a diverse electric scooter line-up, presented for clear product research and direct enquiry.</p></Reveal>
        <ModelRunway />
      </section>

      <section className="section catalogue-section">
        <Reveal className="section-heading inline-heading"><div><span className="eyebrow">Electric scooter catalogue</span><h2>Find the scooter<br />that fits your move.</h2></div><Link href="/models/" className="button button-outline">View all models <ArrowRight weight="bold" /></Link></Reveal>
        <div className="catalogue-grid home-catalogue">{models.map((model, index) => <ProductCard key={model.slug} model={model} compact priority={index < 5} />)}</div>
      </section>

      <section className="spotlight-section">
        <Reveal className="spotlight-copy"><span className="eyebrow">Model spotlight</span><h2>GT DRIVE<br /><em>PRO</em></h2><p>{pro.lead}</p><p>Verified specifications, available features, and enquiry options are presented on the dedicated model page.</p><Link href="/models/gt-drive-pro/" className="button button-green">View product details <ArrowRight weight="bold" /></Link></Reveal>
        <Reveal className="spotlight-media"><div className="speed-lines" /><Image src={pro.image} alt="GT Drive Pro electric scooter" width={900} height={620} /><span className="play-button" aria-hidden="true"><Play weight="fill" /></span><span className="media-label">Future product film</span></Reveal>
      </section>

      <section className="dealer-band">
        <div className="dealer-copy"><span className="eyebrow">Pan-India dealership opportunity</span><h2>Grow with a brand<br />driving electric mobility.</h2><p>Partner with GT Drive and be part of India&apos;s growing electric mobility revolution.</p><ContactActions /></div>
        <div className="dealer-visual"><Image src="/assets/gt-drive/brand/gt-drive-logo-primary-lockup.png" alt="GT Drive" width={620} height={153} className="dealer-logo" /><Image src="/assets/gt-drive/gt-drive-pro.png" alt="GT Drive Pro" width={700} height={540} className="dealer-scooter dealer-scooter-left" /><Image src="/assets/gt-drive/gt-one-plus-bmw.png" alt="GT One Plus" width={620} height={480} className="dealer-scooter dealer-scooter-right" /><div className="dealer-support"><div><Storefront /><span>Business support</span></div><div><Wrench /><span>Technical guidance</span></div><div><ShieldCheck /><span>Operational support</span></div></div></div>
      </section>

      <section className="section company-section">
        <Reveal className="company-intro"><span className="eyebrow">Houstan Innovations LLP</span><h2>Driving innovation.<br />Delivering a cleaner tomorrow.</h2><p>GT Drive is an Indian electric two-wheeler brand headquartered in Greater Noida, backed by in-house battery capability, manufacturing infrastructure, and a growing network.</p></Reveal>
        <div className="company-values"><Reveal><span>Mission</span><h3>Accessible electric mobility</h3><p>Reliable products, strong technology, and dependable support for riders and business partners.</p></Reveal><Reveal><span>Vision</span><h3>A trusted Indian EV brand</h3><p>A strong product, manufacturing, and dealership ecosystem that simplifies EV adoption.</p></Reveal></div>
      </section>

      <section className="section location-preview">
        <div className="section-heading inline-heading"><div><span className="eyebrow">Plant locations</span><h2>A growing footprint<br />across India.</h2></div><Link href="/locations/" className="text-link">View addresses <ArrowRight /></Link></div>
        <div className="location-row">{locations.map((location) => <Link href="/locations/" key={location.state} className="location-chip"><MapPin weight="fill" /><span>{location.state}</span></Link>)}</div>
      </section>

      <section className="contact-section">
        <div className="contact-copy"><span className="eyebrow">Get in touch</span><h2>We are here<br />to help.</h2><p>Reach out for product information, dealership enquiries, or company details.</p><ContactActions compact /></div>
        <InquiryForm />
      </section>
    </>
  );
}
