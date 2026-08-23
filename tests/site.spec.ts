import { expect, test } from "@playwright/test";

async function scrollPage(page: import("@playwright/test").Page) {
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 600) {
      window.scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 120));
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    window.scrollTo(0, 0);
    await new Promise((resolve) => setTimeout(resolve, 300));
  });
}

test("homepage renders its complete desktop experience", async ({ page, request }) => {
  const errors: string[] = [];
  page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/", { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);
  await page.screenshot({ path: "artifacts/screenshots/home-desktop-top-v2.png" });
  await scrollPage(page);
  const imageUrls = await page.locator("img").evaluateAll((images) => [...new Set(images.map((image) => (image as HTMLImageElement).currentSrc || (image as HTMLImageElement).src))]);
  for (const imageUrl of imageUrls) expect((await request.get(imageUrl)).ok(), `Image request failed: ${imageUrl}`).toBe(true);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true);
  await expect(page.getByRole("heading", { name: /meet the GT Drive electric range/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /driving innovation/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /we are here/i })).toBeVisible();
  expect(errors).toEqual([]);
  await page.screenshot({ path: "artifacts/screenshots/home-desktop-scrolled.png", fullPage: true });
});

test("mobile navigation and contact controls remain usable", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/", { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);
  await page.screenshot({ path: "artifacts/screenshots/home-mobile-top-v2.png" });
  await page.getByRole("button", { name: "Open menu" }).click();
  await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();
  await expect(page.getByRole("link", { name: "WhatsApp", exact: true }).last()).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true);
  await scrollPage(page);
  await page.screenshot({ path: "artifacts/screenshots/home-mobile-scrolled.png", fullPage: true });
});

test("catalogue and every model route respond", async ({ page }) => {
  await page.goto("/models/", { waitUntil: "networkidle" });
  await expect(page.locator(".product-card")).toHaveCount(9);
  const slugs = ["gt-soul", "gt-soul-nxt", "gt-ryd", "gt-ryd-plus", "gt-one-plus", "gt-champion", "gt-flying", "gt-drive-pro", "gt-chetak"];
  for (const slug of slugs) {
    const response = await page.goto(`/models/${slug}/`, { waitUntil: "domcontentloaded" });
    expect(response?.ok()).toBe(true);
    await expect(page.locator(".product-summary h1")).toBeVisible();
  }
});
