import { expect, test } from "@playwright/test";

test("catalogue copy reads naturally and section motion reaches its end state", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/models/", { waitUntil: "domcontentloaded", timeout: 60000 });

  const heading = page.getByRole("heading", { name: "Nine electric scooters. Find your GT Drive." });
  await expect(heading).toBeVisible();
  await expect(page.getByText(/brochure-listed/i)).toHaveCount(0);
  await expect(page.locator(".mr-word").first()).toHaveCSS("margin-right", /[1-9]/);

  const catalogue = page.locator(".site-reveal").filter({ has: page.locator(".grid").filter({ has: page.locator("[data-motion-card]") }) }).first();
  await catalogue.scrollIntoViewIfNeeded();
  await expect(catalogue).toHaveAttribute("data-visible", "true");
  await page.waitForTimeout(750);
  await expect(catalogue).toHaveCSS("opacity", "1");
});

test("reduced motion keeps content visible", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/dealers/", { waitUntil: "domcontentloaded", timeout: 60000 });
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.getByRole("heading", { name: /build with gt drive/i })).toBeVisible();
});
