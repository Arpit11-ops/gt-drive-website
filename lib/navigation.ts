import { getModel, type ScooterModel } from "@/lib/models";

export const primaryLinks = [
  { href: "/electric-scooters/", label: "Electric scooters" },
  { href: "/about/", label: "About" },
  { href: "/dealers/", label: "For dealers" },
] as const;

export const mobileLinks = [
  { href: "/models/", label: "Models" },
  ...primaryLinks,
  { href: "/contact/", label: "Contact" },
] as const;

const featuredModelSlugs = [
  "gt-drive-pro",
  "gt-soul-nxt",
  "gt-ryd-plus",
] as const;

export const featuredModels: ScooterModel[] = featuredModelSlugs.map((slug) => {
  const model = getModel(slug);
  if (!model) {
    throw new Error(`Featured navigation model not found: ${slug}`);
  }
  return model;
});
