import { expect, test } from "@playwright/test";

const SECTION_HEADINGS = [
  "About",
  "Timeline",
  "Capabilities",
  "Stack",
  "Certifications",
  "Personal R&D",
  "Contact",
];

test("homepage loads with hero, all section headings, and nav scroll-spy", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

  for (const heading of SECTION_HEADINGS) {
    await expect(page.getByRole("heading", { level: 2, name: heading })).toBeVisible();
  }

  await expect(page.locator('main[id="main"]')).toBeVisible();
  await expect(page.locator('a.skip-link[href="#main"]')).toHaveCount(1);

  await page.locator("#capabilities").scrollIntoViewIfNeeded();
  await expect(async () => {
    const active = await page
      .locator('nav a[aria-current="location"]')
      .first()
      .getAttribute("href");
    expect(active).toBe("#capabilities");
  }).toPass({ timeout: 3000 });
});

test("first capability is open by default, others are collapsed", async ({ page }) => {
  await page.goto("/");
  const details = page.locator("#capabilities details");
  await expect(details.first()).toHaveJSProperty("open", true);
  await expect(details.nth(1)).toHaveJSProperty("open", false);
});

test("CSP header is present on homepage", async ({ page }) => {
  const response = await page.goto("/");
  const csp = response?.headers()["content-security-policy"];
  expect(csp).toBeTruthy();
  expect(csp).toContain("nonce-");
  expect(csp).toContain("strict-dynamic");
});
