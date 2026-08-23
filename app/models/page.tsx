import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { models } from "@/lib/models";

export const metadata: Metadata = { title: "Electric Scooter Models", description: "Explore the complete GT Drive electric scooter catalogue." };

export default function ModelsPage() {
  return <><section className="page-hero"><div className="page-hero-copy"><span className="eyebrow">Electric scooter catalogue</span><h1>THE GT DRIVE<br />RANGE</h1><p>Browse every model in the current brochure. Each product page keeps its verified specifications, features, colors, and availability status together.</p></div></section><section className="section models-page"><div className="catalogue-grid">{models.map((model, index) => <ProductCard key={model.slug} model={model} priority={index < 4} />)}</div></section></>;
}
