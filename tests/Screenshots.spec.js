import { test, expect } from "@playwright/test";

test("Page Screenshort", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");

  await page.screenshot({
    path: "tests/screenshots/" + Date.now() + "Homepage.png",
  });
});

test("Full Page Screenshort", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");

  await page.screenshot({
    path: "tests/screenshots/" + Date.now() + "FullPage.png",
    fullPage: true,
  });
});

test.only("Element Screenshort", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");

  await page.locator('//*[@id="tbodyid"]/div[1]/div').screenshot({
    path: "tests/screenshots/" + Date.now() + "Element.png",
  });
});
