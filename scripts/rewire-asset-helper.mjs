// Convert every hard-coded src="/assets/..." (or src={variable}) usage of a
// public asset to route through the asset() helper, so GitHub Pages basePath
// gets prefixed correctly.
//
// Handles two shapes:
//   src="/assets/..."       → src={asset("/assets/...")}
//   src={model.image}        → src={asset(model.image)}
//   src={foo.image}          → src={asset(foo.image)}
//   src={heroImage}          → src={asset(heroImage)}   (idempotent)
// Also adds `import { asset } from "@/lib/asset";` if any change was made.

import { readFile, writeFile } from "node:fs/promises";
import { globSync } from "node:fs";

const files = globSync("{app,components}/**/*.tsx");

let filesTouched = 0;
let totalReplacements = 0;

for (const file of files) {
  const original = await readFile(file, "utf8");
  let changed = original;

  // src="/assets/..." → src={asset("/assets/...")}
  changed = changed.replace(
    /src="(\/assets\/[^"]+)"/g,
    (_m, p) => `src={asset("${p}")}`,
  );

  // src={someVar} → src={asset(someVar)} — but skip if already asset(...)
  changed = changed.replace(
    /src=\{(?!asset\()([A-Za-z_][\w.]*(?:\?\s*\?\s*[A-Za-z_][\w.]*)?)\}/g,
    (_m, expr) => `src={asset(${expr})}`,
  );

  // src={a ?? b} pattern (used in ModelFeatureNavigator with fallback) — leave alone
  // if already covered by above simple-expression regex; complex expressions preserved manually.

  if (changed === original) continue;

  // Ensure asset() is imported
  if (!/from ["']@\/lib\/asset["']/.test(changed)) {
    // Insert after last import
    const lines = changed.split("\n");
    let lastImport = -1;
    for (let i = 0; i < lines.length; i++) {
      if (/^import /.test(lines[i])) lastImport = i;
    }
    if (lastImport >= 0) {
      lines.splice(lastImport + 1, 0, 'import { asset } from "@/lib/asset";');
      changed = lines.join("\n");
    }
  }

  await writeFile(file, changed);
  filesTouched += 1;
  const count = (original.match(/src="\/assets\/[^"]+"|src=\{(?!asset\()[A-Za-z_]/g) || []).length;
  totalReplacements += count;
  console.log(`${file} — ${count} replacement(s)`);
}

console.log(`\n${filesTouched} files touched, ${totalReplacements} replacements.`);
