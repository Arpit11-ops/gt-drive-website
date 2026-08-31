// Convert JPG/PNG > 100KB under public/assets/gt-drive/ into .webp siblings
// at quality 80. Keeps originals for rollback; rewiring & deletion is manual.
//
// Usage: node scripts/optimize-images.mjs

import { readdir, stat } from "node:fs/promises";
import { join, extname, dirname, basename } from "node:path";
import sharp from "sharp";

const ROOT = "public/assets/gt-drive";
const QUALITY = 80;
const MIN_BYTES = 100 * 1024;
const EXTS = new Set([".jpg", ".jpeg", ".png"]);

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (EXTS.has(extname(entry.name).toLowerCase())) out.push(full);
  }
  return out;
}

const files = await walk(ROOT);
let savedTotal = 0;
let count = 0;

for (const file of files) {
  const info = await stat(file);
  if (info.size < MIN_BYTES) continue;
  const out = join(dirname(file), basename(file, extname(file)) + ".webp");
  try {
    await sharp(file).webp({ quality: QUALITY }).toFile(out);
    const after = (await stat(out)).size;
    const saved = info.size - after;
    savedTotal += saved;
    count += 1;
    const pct = ((saved / info.size) * 100).toFixed(0);
    console.log(
      `${file}\n  ${(info.size / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB (${pct}% smaller)`,
    );
  } catch (err) {
    console.error(`FAILED: ${file}`, err.message);
  }
}

console.log(
  `\n${count} files converted. Total saved: ${(savedTotal / (1024 * 1024)).toFixed(2)} MB`,
);
