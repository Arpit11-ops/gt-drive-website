import type { Metadata } from "next";
import Link from "next/link";
import { models } from "@/lib/models";

export const metadata: Metadata = { title: "Electric scooter range" };

export default function ModelsPage() {
  return (
    <section className="mx-auto max-w-[var(--container-page)] px-6 py-24 md:px-10">
      <h1 className="text-[clamp(48px,7vw,88px)]">The GT Drive range.</h1>
      <p className="mt-6 max-w-xl text-[var(--color-body)]">
        Nine confirmed models, presented with brochure-verified specifications, colours and features.
      </p>
      <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {models.map((model) => (
          <li key={model.slug}>
            <Link
              href={`/models/${model.slug}/`}
              className="block text-lg font-semibold text-[var(--color-ink)] underline underline-offset-[6px] hover:text-[var(--color-green-deep)]"
            >
              {model.shortName}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
