import { chromium } from "playwright";

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1920, height: 800 },
  reducedMotion: "reduce",
});
const page = await ctx.newPage();

const routes = [
  { path: "/", name: "home" },
  { path: "/models/", name: "models" },
  { path: "/models/gt-drive-pro/", name: "model-detail-drive-pro" },
  { path: "/models/gt-chetak/", name: "model-detail-chetak" },
  { path: "/compare/", name: "compare" },
  { path: "/dealers/", name: "dealers" },
  { path: "/about/", name: "about" },
  { path: "/locations/", name: "locations" },
  { path: "/contact/", name: "contact" },
];

for (const { path, name } of routes) {
  await page.goto(`http://127.0.0.1:3000${path}`, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
  await page.evaluate(async () => {
    const total = document.documentElement.scrollHeight;
    for (let y = 0; y <= total; y += 400) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 100));
    }
    await new Promise((r) => setTimeout(r, 1000));
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 300));
  });
  await page.screenshot({
    path: `artifacts/redesign/screenshots/page-${name}-full.png`,
    fullPage: true,
  });
  console.log(`saved: ${name}`);
}

await browser.close();
