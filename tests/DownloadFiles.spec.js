import { test, expect, chromium } from "@playwright/test";

test("Download files ", async ({ page }) => {
  //   const browser = await chromium.launch();
  //   const context = await browser.newContext();
  //   const page = await context.newPage();

  await page.goto(
    "https://www.testmu.ai/selenium-playground/generate-file-to-download-demo/"
  );

  await page.type("#textbox", "Like, Share, Comments, Subscribe");

  await page.click("#create");

  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.click("//a[@id='link-to-download']"),
  ]);

  const fileName = download.suggestedFilename();
  await download.saveAs(fileName);
});
