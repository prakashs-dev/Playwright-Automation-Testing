import { test, expect } from "@playwright/test";

test("HomePage", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");
  const pageTitle = page.title();
  await expect(page).toHaveTitle("STORE");
//   await page.close();
});
