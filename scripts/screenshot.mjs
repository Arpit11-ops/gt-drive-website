import { chromium } from "playwright";

const browser = await chromium.launch();

// Simulate real user browser viewport (accounting for Chrome UI)
// 1920x800 approximates a Chrome window on 1920x1080 monitor with title/tab/URL/bookmarks bars + taskbar
const desktop = await browser.newContext({ viewport: { width: 1920, height: 800 } });
const dPage = await desktop.newPage();
await dPage.goto("http://127.0.0.1:3000/", { waitUntil: "networkidle" });
await dPage.waitForTimeout(1500);
await dPage.screenshot({ path: "artifacts/redesign/screenshots/home-desktop-1920x800.png" });
await dPage.screenshot({ path: "artifacts/redesign/screenshots/home-desktop-1920x800-full.png", fullPage: true });

// Also compact 1440x720 (small laptop)
await dPage.setViewportSize({ width: 1440, height: 720 });
await dPage.reload({ waitUntil: "networkidle" });
await dPage.waitForTimeout(1200);
await dPage.screenshot({ path: "artifacts/redesign/screenshots/home-desktop-1440x720.png" });

// Mobile
const mobile = await browser.newContext({ viewport: { width: 390, height: 844 } });
const mPage = await mobile.newPage();
await mPage.goto("http://127.0.0.1:3000/", { waitUntil: "networkidle" });
await mPage.waitForTimeout(1200);
await mPage.screenshot({ path: "artifacts/redesign/screenshots/home-mobile-390.png" });

await browser.close();
console.log("done");
