import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { ContactActions } from "@/components/ContactActions";
import { InquiryForm } from "@/components/InquiryForm";
import { ProductCard } from "@/components/ProductCard";
import { ProductMediaGallery } from "@/components/ProductMediaGallery";
import { getModel, models } from "@/lib/models";

export function generateStaticParams() { return models.map((model) => ({ slug: model.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const model = getModel((await params).slug);
  return model ? { title: model.shortName, description: model.lead } : {};
}

export default async function ModelPage({ params }: { params: Promise<{ slug: string }> }) {
  const model = getModel((await params).slug);
  if (!model) notFound();
  const related = models.filter((item) => item.slug !== model.slug).slice(0, 3);
  return <>
    <section className="product-hero">
      <ProductMediaGallery src={model.image} alt={model.shortName} />
      <div className="product-summary"><div className="breadcrumb"><Link href="/models/">Models</Link><span>/</span><span>{model.shortName}</span></div><span className="product-code">{model.status ? "Coming Soon" : model.code ? `Model ${model.code}` : "GT Drive model"}</span><h1>{model.name}</h1><p>{model.lead}</p>{model.note && <p className="product-note">{model.note}</p>}<ContactActions /></div>
    </section>
    <section className="product-detail-section"><div className="detail-grid"><div className="inner-heading"><span className="eyebrow">Product information</span><h2>{model.status ? "Details coming soon." : "Verified brochure specifications."}</h2><p>{model.status ? "The brochure does not provide tyre, brake, controller, battery, or motor details for this model. We will publish confirmed information when it is supplied." : "These details are transcribed from the GT Drive brochure. Unlisted performance figures have not been estimated or added."}</p><h3>Available colors</h3><div className="color-list">{model.colors.map((color) => <span className="color-chip" key={color}>{color}</span>)}</div></div>{model.specs.length ? <div className="spec-grid">{model.specs.map((spec) => <div className="spec-item" key={spec.label}><span>{spec.label}</span><strong>{spec.value}</strong></div>)}</div> : <div className="support-card"><CheckCircle /><h3>Coming Soon</h3><p>Contact GT Drive to register your interest and request future product information.</p></div>}</div></section>
    <section className="product-detail-section feature-section"><div className="section-heading"><span className="eyebrow">Features shown in the brochure</span><h2>Built around everyday confidence.</h2></div><div className="feature-list">{model.features.map((feature) => <div className="feature-item" key={feature}><CheckCircle weight="fill" />{feature}</div>)}</div></section>
    <section className="contact-section"><div className="contact-copy"><span className="eyebrow">Ask about {model.shortName}</span><h2>Request product<br />information.</h2><p>Share your details and the GT Drive team can respond to your enquiry.</p></div><InquiryForm defaultModel={model.slug} /></section>
    <section className="section"><div className="section-heading inline-heading"><div><span className="eyebrow">Continue exploring</span><h2>Related models.</h2></div><Link href="/models/" className="text-link">View all models <ArrowRight /></Link></div><div className="catalogue-grid">{related.map((item) => <ProductCard key={item.slug} model={item} />)}</div></section>
  </>;
}
