import { expect, test } from "@playwright/test";

test.describe("model mega-menu", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/", { waitUntil: "networkidle" });
  });

  test("opens from Models and exposes the approved product links", async ({ page }) => {
    const trigger = page.getByRole("button", { name: "Models" });
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await trigger.click();

    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    const menu = page.getByRole("navigation", { name: "Models menu" });
    await expect(menu).toBeVisible();
    await expect(menu.getByRole("link", { name: /GT Drive Pro/i })).toBeVisible();
    await expect(menu.getByRole("link", { name: /GT Soul NXT/i })).toBeVisible();
    await expect(menu.getByRole("link", { name: /GT RYD Plus/i })).toBeVisible();
    await expect(menu.getByRole("link", { name: "View all models" })).toHaveAttribute("href", "/models/");
    await expect(menu.getByRole("link", { name: "Compare models" })).toHaveAttribute("href", "/compare/");
  });

  test("Escape closes the menu and restores focus to Models", async ({ page }) => {
    const trigger = page.getByRole("button", { name: "Models" });
    await trigger.click();
    await page.keyboard.press("Escape");

    await expect(page.getByRole("navigation", { name: "Models menu" })).toBeHidden();
    await expect(trigger).toBeFocused();
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  test("keyboard focus opens the menu and enters the first model card", async ({ page }) => {
    const trigger = page.getByRole("button", { name: "Models" });
    await trigger.focus();

    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    await page.keyboard.press("Tab");
    await expect(page.getByRole("link", { name: /GT Drive Pro/i })).toBeFocused();
  });

  test("clicking outside closes the menu", async ({ page }) => {
    const trigger = page.getByRole("button", { name: "Models" });
    await trigger.click();
    await page.getByRole("heading", { name: /Drive Clean\. Go Green\./i }).click();

    await expect(page.getByRole("navigation", { name: "Models menu" })).toBeHidden();
  });

  test("choosing a utility route closes the menu", async ({ page }) => {
    await page.getByRole("button", { name: "Models" }).click();
    await page.getByRole("navigation", { name: "Models menu" })
      .getByRole("link", { name: "View all models" })
      .click();

    await expect(page).toHaveURL(/\/models\/$/);
    await expect(page.getByRole("navigation", { name: "Models menu" })).toBeHidden();
  });

  test("mobile menu shows featured models, complete routes, and locks body scroll", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.reload({ waitUntil: "networkidle" });

    const menuButton = page.getByRole("button", { name: "Open menu" });
    await menuButton.click();

    const mobileNav = page.getByRole("navigation", { name: "Mobile" });
    await expect(mobileNav).toBeVisible();
    await expect(mobileNav.getByRole("link", { name: /GT Drive Pro/i })).toBeVisible();
    await expect(mobileNav.getByRole("link", { name: /GT Soul NXT/i })).toBeVisible();
    await expect(mobileNav.getByRole("link", { name: /GT RYD Plus/i })).toBeVisible();
    await expect(mobileNav.getByRole("link", { name: "Models", exact: true })).toBeVisible();
    await expect(mobileNav.getByRole("link", { name: "Compare" })).toBeVisible();
    await expect(mobileNav.getByRole("link", { name: "For dealers" })).toBeVisible();
    await expect(mobileNav.getByRole("link", { name: "Locations" })).toBeVisible();
    await expect(mobileNav.getByRole("link", { name: "Contact" })).toBeVisible();
    await expect.poll(() => page.evaluate(() => document.body.style.overflow)).toBe("hidden");

    await page.getByRole("button", { name: "Close menu" }).click();
    await expect(mobileNav).toBeHidden();
    await expect.poll(() => page.evaluate(() => document.body.style.overflow)).toBe("");

    await menuButton.click();
    await page.keyboard.press("Escape");
    await expect(mobileNav).toBeHidden();
    await expect.poll(() => page.evaluate(() => document.body.style.overflow)).toBe("");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true);
  });
});
