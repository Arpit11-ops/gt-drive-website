import { chromium } from "playwright";

const browser = await chromium.launch();

// Simulate real user viewport (1920x900 with browser chrome)
const desktop = await browser.newContext({ viewport: { width: 1920, height: 900 } });
const dPage = await desktop.newPage();
await dPage.goto("http://127.0.0.1:3000/", { waitUntil: "networkidle" });
await dPage.waitForTimeout(1500);
await dPage.screenshot({ path: "artifacts/redesign/screenshots/home-desktop-1920.png" });
await dPage.screenshot({ path: "artifacts/redesign/screenshots/home-desktop-1920-full.png", fullPage: true });

// Also 1440x900 for comparison
await dPage.setViewportSize({ width: 1440, height: 900 });
await dPage.reload({ waitUntil: "networkidle" });
await dPage.waitForTimeout(1200);
await dPage.screenshot({ path: "artifacts/redesign/screenshots/home-desktop-1440.png" });

// Mobile
const mobile = await browser.newContext({ viewport: { width: 390, height: 844 } });
const mPage = await mobile.newPage();
await mPage.goto("http://127.0.0.1:3000/", { waitUntil: "networkidle" });
await mPage.waitForTimeout(1200);
await mPage.screenshot({ path: "artifacts/redesign/screenshots/home-mobile-390.png" });
await mPage.screenshot({ path: "artifacts/redesign/screenshots/home-mobile-390-full.png", fullPage: true });

await browser.close();
console.log("done");
