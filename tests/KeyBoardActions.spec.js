import { test, expect } from "@playwright/test";

test("Keyborad Action", async ({ page }) => {
  await page.goto("https://gotranscript.com/text-compare");

  await page.type("[name='text1']", "Hello Prakash");

  //  Ctrl + A
  await page.keyboard.press("Control+A");

  // Ctrl + X
  await page.keyboard.press("Control+X");

  // Tab
  await page.keyboard.press("Tab");

  // Ctrl + V
  await page.keyboard.press("Control+V");

  await page.waitForTimeout(5000);
});


