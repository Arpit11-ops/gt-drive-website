import { chromium } from "playwright";

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();

await page.goto("http://127.0.0.1:3000/", { waitUntil: "networkidle" });
await page.waitForTimeout(1500);
await page.screenshot({ path: "artifacts/redesign/screenshots/home-desktop-1440.png" });
await page.screenshot({
  path: "artifacts/redesign/screenshots/home-desktop-1440-full.png",
  fullPage: true,
});

await page.setViewportSize({ width: 390, height: 844 });
await page.reload({ waitUntil: "networkidle" });
await page.waitForTimeout(1500);
await page.screenshot({ path: "artifacts/redesign/screenshots/home-mobile-390.png" });
await page.screenshot({
  path: "artifacts/redesign/screenshots/home-mobile-390-full.png",
  fullPage: true,
});

await browser.close();
console.log("screenshots saved");
