import { Check } from "@phosphor-icons/react/dist/ssr";

export function FeatureList({ features }: { features: string[] }) {
  return (
    <ul className="grid gap-x-10 gap-y-2 md:grid-cols-2">
      {features.map((feature) => (
        <li
          key={feature}
          className="flex items-baseline gap-3 border-b border-[var(--color-line)] py-4 text-[15px] font-medium text-[var(--color-ink)] md:text-base"
        >
          <Check
            weight="bold"
            className="h-4 w-4 shrink-0 translate-y-[2px] text-[var(--color-green)]"
          />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
}
