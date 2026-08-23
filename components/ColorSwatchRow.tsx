export function ColorSwatchRow({ colors }: { colors: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {colors.map((color) => (
        <li
          key={color}
          className="rounded-sm border border-[var(--color-line)] bg-white px-3 py-2 text-[12px] font-medium text-[var(--color-ink)]"
        >
          {color}
        </li>
      ))}
    </ul>
  );
}
