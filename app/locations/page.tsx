import type { Metadata } from "next";
import { locations } from "@/lib/models";

export const metadata: Metadata = { title: "Plant locations" };

export default function LocationsPage() {
  return (
    <section className="mx-auto max-w-[var(--container-page)] px-6 py-24 md:px-10">
      <h1 className="text-[clamp(48px,7vw,88px)]">
        Plants across five Indian states.
      </h1>
      <ul className="mt-16 grid gap-10 md:grid-cols-2">
        {locations.map((location) => (
          <li key={location.state}>
            <h2 className="text-2xl">{location.state}</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-body)]">
              {location.address}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
