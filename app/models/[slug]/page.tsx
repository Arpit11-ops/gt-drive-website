import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getModel, models } from "@/lib/models";

export function generateStaticParams() {
  return models.map((model) => ({ slug: model.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const model = getModel((await params).slug);
  return model ? { title: model.shortName, description: model.lead } : {};
}

export default async function ModelPage({ params }: { params: Promise<{ slug: string }> }) {
  const model = getModel((await params).slug);
  if (!model) notFound();

  return (
    <section className="mx-auto max-w-[var(--container-page)] px-6 py-24 md:px-10">
      <Link
        href="/models/"
        className="text-sm text-[var(--color-muted)] hover:text-[var(--color-green-deep)]"
      >
        ← Back to range
      </Link>
      <h1 className="mt-6 text-[clamp(56px,8vw,120px)]">{model.shortName}</h1>
      <p className="mt-6 max-w-xl text-[var(--color-body)]">{model.lead}</p>
    </section>
  );
}
