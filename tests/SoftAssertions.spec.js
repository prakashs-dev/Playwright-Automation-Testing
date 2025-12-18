import { test, expect } from "@playwright/test";

/**
 * By default failed assertion will terminate test execution. In playwright also suppot soft assertion do not terminate test execution, but make as a faield
 */

test("Soft Assertion", async ({ page }) => {
  await page.goto("https://demoqa.com/elements");

  // Hard Assertions
  /* await expect(page).toHaveTitle("DEMOQA123");
  await expect(page).toHaveURL("https://demoqa.com/elements"); */

  // Soft Assertions
  await expect.soft(page).toHaveTitle("DEMOQA123");
  await expect.soft(page).toHaveURL("https://demoqa.com/elements");
});
