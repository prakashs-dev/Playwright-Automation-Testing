import { test, expect } from "@playwright/test";

test("Trace ", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");

  await page.click("id=login2");
  await page.fill("#loginusername", "jiouser");
  await page.fill("input[id='loginpassword']", "jiouser");
  await page.click("//button[text()='Log in']");
  await page.click("//a[@id='logout2']");
});
