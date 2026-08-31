// Rewire every src="/assets/gt-drive/..." reference that has a .webp sibling
// to point to the .webp file. Leaves brand/ logos and other exceptions alone.

import { readFile, writeFile, access } from "node:fs/promises";
import { globSync } from "node:fs";

const files = globSync("{app,components,lib}/**/*.{ts,tsx}");
const pattern = /\/assets\/gt-drive\/([A-Za-z0-9_\-/]+)\.(png|jpe?g)(?=["'?])/g;

let filesTouched = 0;
let totalReplacements = 0;

for (const file of files) {
  const original = await readFile(file, "utf8");
  let changed = original;
  const replacements = [];

  const matches = [...original.matchAll(pattern)];
  for (const m of matches) {
    const [full, path] = m;
    // Skip brand logos (small, not converted)
    if (path.startsWith("brand/")) continue;
    const webpFull = `/assets/gt-drive/${path}.webp`;
    const webpFsPath = `public${webpFull}`;
    try {
      await access(webpFsPath);
      replacements.push({ from: full, to: webpFull });
    } catch {
      console.warn(`SKIP (no webp sibling): ${webpFsPath}`);
    }
  }

  for (const { from, to } of replacements) {
    changed = changed.split(from).join(to);
  }

  if (changed !== original) {
    await writeFile(file, changed);
    filesTouched += 1;
    totalReplacements += replacements.length;
    console.log(`${file} — ${replacements.length} replacement(s)`);
  }
}

console.log(`\n${filesTouched} files touched, ${totalReplacements} replacements.`);
