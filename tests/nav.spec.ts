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
    const menu = page.getByRole("group", { name: "Models menu" });
    await expect(menu).toBeVisible();
    await expect(menu.getByRole("link", { name: /GT Drive Pro/i })).toBeVisible();
    await expect(menu.getByRole("link", { name: /GT Soul NXT/i })).toBeVisible();
    await expect(menu.getByRole("link", { name: /GT RYD Plus/i })).toBeVisible();
    await expect(menu.getByRole("link", { name: "View all models" })).toHaveAttribute("href", "/models/");
    await expect(menu.getByRole("link", { name: "Compare models" })).toHaveAttribute("href", "/compare/");

    await trigger.click();
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  test("Escape closes the menu and restores focus to Models", async ({ page }) => {
    const trigger = page.getByRole("button", { name: "Models" });
    await trigger.click();
    await page.keyboard.press("Escape");

    await expect(page.getByRole("group", { name: "Models menu" })).toBeHidden();
    await expect(trigger).toBeFocused();
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  test("keyboard focus opens the menu and enters the first model card", async ({ page }) => {
    const trigger = page.getByRole("button", { name: "Models" });
    await trigger.focus();

    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    await page.keyboard.press("Tab");
    await expect(
      page.getByRole("group", { name: "Models menu" }).getByRole("link", { name: /GT Drive Pro/i }),
    ).toBeFocused();
  });

  test("clicking outside closes the menu", async ({ page }) => {
    const trigger = page.getByRole("button", { name: "Models" });
    await trigger.click();
    await page.getByRole("heading", { name: /Drive Clean\. Go Green\./i }).click();

    await expect(page.getByRole("group", { name: "Models menu" })).toBeHidden();
  });

  test("choosing a utility route closes the menu", async ({ page }) => {
    await page.getByRole("button", { name: "Models" }).click();
    await page.getByRole("group", { name: "Models menu" })
      .getByRole("link", { name: "View all models" })
      .click();

    await expect(page).toHaveURL(/\/models\/$/, { timeout: 30_000 });
    await expect(page.getByRole("group", { name: "Models menu" })).toBeHidden();
  });

  test("mobile menu shows featured models, complete routes, and locks body scroll", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.reload({ waitUntil: "networkidle" });

    const menuButton = page.getByRole("button", { name: "Open menu" });
    await menuButton.click();

    const mobileNav = page.getByRole("navigation", { name: "Mobile" });
    await expect(mobileNav).toBeVisible();

    await test.step("content and route contracts", async () => {
      const links = [
        { name: /GT Drive Pro/i, href: "/models/gt-drive-pro/" },
        { name: /GT Soul NXT/i, href: "/models/gt-soul-nxt/" },
        { name: /GT RYD Plus/i, href: "/models/gt-ryd-plus/" },
        { name: "Models", href: "/models/" },
        { name: "Compare", href: "/compare/" },
        { name: "For dealers", href: "/dealers/" },
        { name: "Locations", href: "/locations/" },
        { name: "Contact", href: "/contact/" },
      ] as const;

      for (const link of links) {
        await expect(mobileNav.getByRole("link", { name: link.name, exact: typeof link.name === "string" })).toHaveAttribute("href", link.href);
      }
    });

    await test.step("scroll lock and open overflow", async () => {
      await expect.poll(() => page.evaluate(() => document.body.style.overflow)).toBe("hidden");
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true);
    });

    await test.step("close control cleanup", async () => {
      await page.getByRole("button", { name: "Close menu" }).click();
      await expect(mobileNav).toBeHidden();
      await expect.poll(() => page.evaluate(() => document.body.style.overflow)).toBe("");
    });

    await test.step("Escape cleanup", async () => {
      await menuButton.click();
      await page.keyboard.press("Escape");
      await expect(mobileNav).toBeHidden();
      await expect(page.getByRole("button", { name: "Open menu" })).toBeFocused();
      await expect.poll(() => page.evaluate(() => document.body.style.overflow)).toBe("");
    });
  });
});
