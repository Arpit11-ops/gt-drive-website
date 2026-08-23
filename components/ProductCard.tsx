import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import type { ScooterModel } from "@/lib/models";

export function ProductCard({ model, priority = false, compact = false }: { model: ScooterModel; priority?: boolean; compact?: boolean }) {
  return (
    <article className={`product-card ${compact ? "is-compact" : ""} ${model.status ? "coming-soon" : ""}`}>
      <Link href={`/models/${model.slug}/`} className="product-image-wrap" aria-label={`View ${model.shortName}`}>
        {model.status && <span className="status-tag">Coming Soon</span>}
        <Image src={model.image} alt={model.shortName} width={520} height={420} priority={priority} className="product-image" />
      </Link>
      <div className="product-card-copy">
        <div><span className="model-code">{model.code ? `Model ${model.code}` : "GT Drive"}</span><h3>{model.shortName}</h3></div>
        <Link href={`/models/${model.slug}/`} className="round-link" aria-label={`View details for ${model.shortName}`}><ArrowUpRight weight="bold" /></Link>
      </div>
    </article>
  );
}
