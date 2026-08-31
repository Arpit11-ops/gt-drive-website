import { expect, test } from "@playwright/test";

test.describe("inner page layout spacing", () => {
  for (const route of ["/models/", "/locations/", "/contact/"]) {
    test(`${route} keeps its primary heading near the top of the page`, async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 900 });
      await page.goto(route, { waitUntil: "networkidle" });

      const heading = page.locator("main h1, main h2").first();
      await expect(heading).toBeVisible();
      expect(await heading.evaluate((element) => element.getBoundingClientRect().top)).toBeLessThan(240);
    });
  }
});