import type { MetadataRoute } from "next";
import { models } from "@/lib/models";

export const dynamic = "force-static";

const base = "https://gtdrivepro.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "about", "models", "dealers", "contact"].map((path) => ({
    url: path ? `${base}/${path}/` : `${base}/`,
    lastModified: new Date(),
    changeFrequency: path === "models" ? "weekly" as const : "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
  return [...pages, ...models.map((model) => ({
    url: `${base}/models/${model.slug}/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7,
  }))];
}
