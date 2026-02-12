// @ts-check
import { test, expect } from "@playwright/test";

test.skip("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test.skip("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});

test("Google Search", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page.getByRole("combobox").fill("ind");
  await page.getByRole("option").first().waitFor();
  const suggestions = await page.$$("//div[@role='option']");
  // console.log("Suggestions", suggestions);
  // for (const sug of suggestions) {
  //   if ((await sug.textContent()) == "indigo") {
  //     // console.log(sug.textContent(), "and its", typeof sug);
  //     await sug.click();
  //   }
  // }

  // await page.waitForTimeout(3000);
});
