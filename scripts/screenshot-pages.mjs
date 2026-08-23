import { chromium } from "playwright";

const BASE = process.env.SCREENSHOT_BASE ?? "http://127.0.0.1:3010";
const browser = await chromium.launch();

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

async function scrollThroughAndSettle(page) {
  await page.evaluate(async () => {
    const total = document.documentElement.scrollHeight;
    for (let y = 0; y <= total; y += 400) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 90));
    }
    await new Promise((r) => setTimeout(r, 900));
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 300));
  });
}

for (const viewport of [
  { name: "desktop-1920x800", width: 1920, height: 800 },
  { name: "mobile-390", width: 390, height: 844 },
]) {
  const ctx = await browser.newContext({
    viewport: { width: viewport.width, height: viewport.height },
    reducedMotion: "reduce",
  });
  const page = await ctx.newPage();
  for (const { path, name } of routes) {
    await page.goto(`${BASE}${path}`, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(1500);
    await scrollThroughAndSettle(page);
    await page.screenshot({
      path: `artifacts/redesign/screenshots/${viewport.name}-${name}.png`,
      fullPage: true,
    });
    console.log(`saved: ${viewport.name}-${name}`);
  }
  await ctx.close();
}

await browser.close();
