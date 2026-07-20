import { test, expect, chromium } from "@playwright/test";

test("Recording Videos", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    recordVideo: {
      dir: "./tests/videos",
    },
  });
  const page = await context.newPage();
  await page.goto("https://www.demoblaze.com/");

  await page.click("id=login2");
  await page.fill("#loginusername", "jiouser");
  await page.fill("input[id='loginpassword']", "jiouser");
  await page.click("//button[text()='Log in']");
  await page.click("//a[@id='logout2']");
});
