import { test, expect, chromium } from "@playwright/test";

test("Auth", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    httpCredentials: {
      username: "admin",
      password: "admin",
    },
  });
  const page = await context.newPage();
  await page.goto("https://the-internet.herokuapp.com/basic_auth");

  expect(page.locator("p").textContent()).toContain("Congratulations");

  expect.objectContaining
});
