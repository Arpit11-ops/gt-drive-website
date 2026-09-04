export function SectionKicker({ n }: { n: string }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="font-display text-[26px] font-extrabold italic leading-none text-[var(--color-green)]">
        {n}
      </span>
      <span className="h-[2px] w-10 bg-[var(--color-green)]" />
    </div>
  );
}
