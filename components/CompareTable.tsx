import Image from "next/image";
import Link from "next/link";
import { models } from "@/lib/models";

const rows: { label: string; key: string }[] = [
  { label: "Model code", key: "code" },
  { label: "Front tyre", key: "Front tyre" },
  { label: "Rear tyre", key: "Rear tyre" },
  { label: "Tyre type", key: "Tyre type" },
  { label: "Braking", key: "Braking technology" },
  { label: "Front brake", key: "Front brake" },
  { label: "Rear brake", key: "Rear brake" },
  { label: "Controller", key: "Controller" },
];

function valueFor(modelSlug: string, key: string) {
  const model = models.find((m) => m.slug === modelSlug);
  if (!model) return "—";
  if (key === "code") return model.code ?? "—";
  const spec = model.specs.find((s) => s.label === key);
  return spec?.value ?? "—";
}

export function CompareTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[900px] border-collapse text-left">
        <thead>
          <tr className="border-b border-[var(--color-line)]">
            <th className="sticky left-0 z-10 min-w-[180px] bg-white p-4 text-left text-[11px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
              Model
            </th>
            {models.map((model) => (
              <th
                key={model.slug}
                className="min-w-[160px] border-l border-[var(--color-line)] bg-white p-4 align-bottom"
              >
                <Link href={`/models/${model.slug}/`} className="group flex flex-col gap-2">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--color-stage)]">
                    <Image
                      src={model.image}
                      alt={model.shortName}
                      fill
                      sizes="180px"
                      className="object-contain transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:-translate-y-1"
                    />
                    {model.status === "coming-soon" && (
                      <span className="absolute left-2 top-2 rounded-sm bg-[var(--color-green-deep)] px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-wider text-white">
                        Coming soon
                      </span>
                    )}
                  </div>
                  <span className="text-[13px] font-semibold leading-tight text-[var(--color-ink)] group-hover:text-[var(--color-green-deep)]">
                    {model.shortName}
                  </span>
                </Link>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.key} className="border-b border-[var(--color-line)]">
              <th className="sticky left-0 z-10 bg-white p-4 text-left text-[12px] font-medium uppercase tracking-wider text-[var(--color-muted)]">
                {row.label}
              </th>
              {models.map((model) => {
                const value = valueFor(model.slug, row.key);
                return (
                  <td
                    key={model.slug}
                    className={`border-l border-[var(--color-line)] p-4 text-[13px] ${
                      value === "—"
                        ? "text-[var(--color-muted)]"
                        : "font-medium text-[var(--color-ink)]"
                    }`}
                  >
                    {value}
                  </td>
                );
              })}
            </tr>
          ))}
          <tr className="border-b border-[var(--color-line)]">
            <th className="sticky left-0 z-10 bg-white p-4 text-left text-[12px] font-medium uppercase tracking-wider text-[var(--color-muted)]">
              Colours
            </th>
            {models.map((model) => (
              <td
                key={model.slug}
                className="border-l border-[var(--color-line)] p-4 text-[12px] leading-[1.5] text-[var(--color-body)]"
              >
                {model.colors.join(", ")}
              </td>
            ))}
          </tr>
          <tr>
            <th className="sticky left-0 z-10 bg-white p-4"></th>
            {models.map((model) => (
              <td
                key={model.slug}
                className="border-l border-[var(--color-line)] p-4"
              >
                <Link
                  href={`/models/${model.slug}/`}
                  className="text-[12px] font-semibold text-[var(--color-green-deep)] underline underline-offset-[6px]"
                >
                  View model
                </Link>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
