import { Plug } from "@phosphor-icons/react/dist/ssr";

type Props = {
  label: string;
  className?: string;
  tone?: "green" | "white";
};

export function PlugLine({ label, className = "", tone = "green" }: Props) {
  const color = tone === "white" ? "text-white" : "text-[var(--color-green)]";
  const lineColor = tone === "white" ? "bg-white" : "bg-[var(--color-green)]";
  const labelColor = tone === "white" ? "text-white" : "text-[var(--color-ink)]";

  return (
    <div className={`flex w-full max-w-md items-center gap-3 ${className}`}>
      <p className={`shrink-0 text-[11px] font-semibold uppercase tracking-[0.26em] sm:text-xs ${labelColor}`}>{label}</p>
      <span className="flex min-w-8 flex-1 items-center" aria-hidden="true">
        <span className={`h-[2px] flex-1 ${lineColor}`} />
        <Plug size={24} weight="fill" className={`-ml-2 shrink-0 ${color}`} />
      </span>
    </div>
  );
}
