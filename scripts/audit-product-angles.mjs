import { chromium } from "playwright";
import { createServer } from "node:http";
import { readFile, mkdir } from "node:fs/promises";
import { join, extname } from "node:path";
import assert from "node:assert/strict";

// Serve the production export at its real Pages base path, without Next dev.
const prefix = "/gt-drive-website";
const cases = [
  ["gt-soul", "GT_SOUL", [4016, 4018, 4020, 4014]],
  ["gt-soul-nxt", "GT_SOUL_NXT", [4026, 4028, 4034, 4032]],
  ["gt-ryd", "Flying_ryd", [4099, 4088, 4090, 4096]],
  ["gt-ryd-plus", "Flying_Ryd_plus", [4079, 4074, 4076, 4077]],
  ["gt-one-plus", "Flying_plus", [4065, 4066, 4064, 4063]],
  ["gt-champion", "Champion", [4047, 4048, 4045, 4043]],
  ["gt-flying", "Flying_E4", [4004, 4005, 4006, 4002]],
  ["gt-drive-pro", null, []],
  ["gt-chetak", null, []],
];
const server = createServer(async (req, res) => {
  let path = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
  if (path.startsWith(prefix)) path = path.slice(prefix.length);
  if (path.endsWith("/")) path += "index.html";
  try {
    const data = await readFile(join(process.cwd(), "out", path));
    const types = { ".html": "text/html", ".js": "application/javascript", ".css": "text/css", ".webp": "image/webp", ".png": "image/png", ".svg": "image/svg+xml" };
    res.setHeader("Content-Type", types[extname(path)] ?? "application/octet-stream");
    res.end(data);
  } catch { res.statusCode = 404; res.end(); }
});
await new Promise(resolve => server.listen(3022, "127.0.0.1", resolve));
await mkdir("artifacts/product-angle-audit", { recursive: true });
const browser = await chromium.launch({ headless: true });
try {
  for (const width of [1440, 390]) {
    const page = await browser.newPage({ viewport: { width, height: 900 }, reducedMotion: "reduce" });
    for (const [slug, family, ids] of cases) {
      const response = await page.goto("http://127.0.0.1:3022" + prefix + "/models/" + slug + "/", { waitUntil: "networkidle" });
      assert.equal(response.status(), 200);
      const sections = page.locator("main > section");
      const count = family || slug === "gt-drive-pro" ? 4 : 1;
      for (let i = 0; i < count; i++) {
        const section = sections.nth(i);
        await section.scrollIntoViewIfNeeded();
        const photo = section.locator("img").first();
        await photo.evaluate(img => img.decode());
        assert(await photo.evaluate(img => img.naturalWidth > 0), slug + " broken image");
        if (family) {
          assert.equal(await photo.getAttribute("src"), prefix + "/assets/gt-drive/cleaned/" + family + "_IMG_" + ids[i] + "_clean.webp");
          assert.equal(new Set(ids).size, 4);
        }
        await section.screenshot({ path: "artifacts/product-angle-audit/" + slug + "-" + width + "-section-" + (i + 1) + ".png" });
      }
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), slug + " horizontal overflow");
      console.log(width + "px " + slug + ": section images loaded and verified");
    }
    await page.close();
  }
} finally {
  await browser.close();
  server.close();
}
