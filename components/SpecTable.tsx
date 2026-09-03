import type { ProductSpec } from "@/lib/models";

export function SpecTable({ specs }: { specs: ProductSpec[] }) {
  if (specs.length === 0) {
    return (
      <p className="max-w-md text-[15px] leading-[1.6] text-[var(--color-body)] md:text-base">
        Full specifications for this model — tyre, brake, controller, battery
        and motor — will be published closer to launch.
      </p>
    );
  }
  return (
    <dl className="grid gap-x-10 gap-y-8 border-t border-[var(--color-line)] pt-10 md:grid-cols-2">
      {specs.map((spec) => (
        <div key={spec.label} className="border-b border-[var(--color-line)] pb-6">
          <dt className="text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">
            {spec.label}
          </dt>
          <dd className="mt-3 text-[clamp(20px,2vw,28px)] font-semibold text-[var(--color-ink)]">
            {spec.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
