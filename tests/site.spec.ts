import { expect, test } from "@playwright/test";

async function scrollThrough(page: import("@playwright/test").Page) {
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 500) {
      window.scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    await new Promise((resolve) => setTimeout(resolve, 800));
    window.scrollTo(0, 0);
    await new Promise((resolve) => setTimeout(resolve, 200));
  });
}

test("homepage renders every section and no console errors", async ({
  page,
  request,
}) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/", { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);

  await expect(
    page.getByRole("heading", { name: /drive clean\. go green\./i }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: /nine models\. five states\. one india\./i,
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: /gt — drive pro/i }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: /shared features/i }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: /view model/i })).toHaveAttribute(
    "href",
    "/models/gt-drive-pro/",
  );
  await expect(
    page.getByRole("link", { name: /explore all models/i }),
  ).toHaveAttribute("href", "/models/");
  await expect(
    page.getByRole("heading", { name: /nine confirmed models\. one truth\./i }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: /grow with an indian ev brand\./i }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: /plants across five indian states\./i }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: /get in touch\./i }),
  ).toBeVisible();

  await scrollThrough(page);

  const imageUrls = await page
    .locator("img")
    .evaluateAll((images) => [
      ...new Set(
        images.map(
          (image) =>
            (image as HTMLImageElement).currentSrc ||
            (image as HTMLImageElement).src,
        ),
      ),
    ]);
  for (const imageUrl of imageUrls) {
    if (!imageUrl) continue;
    expect(
      (await request.get(imageUrl)).ok(),
      `Image failed: ${imageUrl}`,
    ).toBe(true);
  }
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth + 1,
    ),
  ).toBe(true);
  expect(errors).toEqual([]);
});

test("mobile hamburger reveals the primary navigation", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/", { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);

  const menuButton = page.getByRole("button", { name: "Open menu" });
  await expect(menuButton).toBeVisible();
  await menuButton.click();

  const mobileNav = page.getByRole("navigation", { name: "Mobile" });
  await expect(mobileNav.getByRole("link", { name: "Models" })).toBeVisible();
  await expect(mobileNav.getByRole("link", { name: "Compare" })).toBeVisible();
  await expect(
    mobileNav.getByRole("link", { name: "For dealers" }),
  ).toBeVisible();
  await expect(
    mobileNav.getByRole("link", { name: "Locations" }),
  ).toBeVisible();
  await expect(mobileNav.getByRole("link", { name: "Contact" })).toBeVisible();

  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth + 1,
    ),
  ).toBe(true);
});

test("every top-level route responds 200", async ({ page }) => {
  test.setTimeout(120_000);
  const routes = [
    "/",
    "/models/",
    "/compare/",
    "/dealers/",
    "/about/",
    "/locations/",
    "/contact/",
  ];
  for (const route of routes) {
    const response = await page.goto(route, {
      waitUntil: "domcontentloaded",
      timeout: 60_000,
    });
    expect(response?.ok(), `Route failed: ${route}`).toBe(true);
  }
});

test("every model detail route responds and shows the model name", async ({
  page,
}) => {
  test.setTimeout(180_000);
  const models = [
    { slug: "gt-soul", name: "GT Soul" },
    { slug: "gt-soul-nxt", name: "GT Soul NXT" },
    { slug: "gt-ryd", name: "GT RYD" },
    { slug: "gt-ryd-plus", name: "GT RYD Plus" },
    { slug: "gt-one-plus", name: "GT One Plus" },
    { slug: "gt-champion", name: "GT Champion" },
    { slug: "gt-flying", name: "GT Flying" },
    { slug: "gt-drive-pro", name: "GT Drive Pro" },
    { slug: "gt-chetak", name: "GT Chetak" },
  ];
  for (const model of models) {
    const response = await page.goto(`/models/${model.slug}/`, {
      waitUntil: "domcontentloaded",
      timeout: 60_000,
    });
    expect(response?.ok(), `Detail failed: ${model.slug}`).toBe(true);
    await expect(
      page.getByRole("heading", { level: 1, name: model.name }),
    ).toBeVisible();
  }
});

test("compare page shows all nine models as table columns", async ({
  page,
}) => {
  test.setTimeout(120_000);
  await page.goto("/compare/", {
    waitUntil: "domcontentloaded",
    timeout: 60_000,
  });
  await page.waitForTimeout(800);
  const shortNames = [
    "GT Soul",
    "GT Soul NXT",
    "GT RYD",
    "GT RYD Plus",
    "GT One Plus",
    "GT Champion",
    "GT Flying",
    "GT Drive Pro",
    "GT Chetak",
  ];
  for (const name of shortNames) {
    await expect(page.getByRole("link", { name }).first()).toBeVisible();
  }
});

test("inquiry form on contact page has all fields", async ({ page }) => {
  test.setTimeout(120_000);
  await page.goto("/contact/", {
    waitUntil: "domcontentloaded",
    timeout: 60_000,
  });
  await expect(page.getByLabel("Full name")).toBeVisible();
  await expect(page.getByLabel("Phone number")).toBeVisible();
  await expect(page.getByLabel("Email address")).toBeVisible();
  await expect(page.getByLabel("City")).toBeVisible();
  await expect(page.getByLabel("Enquiry type")).toBeVisible();
  await expect(page.getByLabel("Model of interest")).toBeVisible();
  await expect(page.getByLabel("Message")).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Send enquiry" }),
  ).toBeVisible();
});
