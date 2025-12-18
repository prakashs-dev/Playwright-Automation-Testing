import { test, expect, chromium } from "@playwright/test";

test("Handle Pages/Windows", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();

  const page1 = await context.newPage();
  const page2 = await context.newPage();

  const allPage = context.pages();
  console.log("No of pages ", allPage.length);

  await page1.goto("https://testautomationpractice.blogspot.com/");
  await expect(page1).toHaveTitle("Automation Testing Practice");

  await page2.goto("https://www.demoblaze.com/index.html");
  await expect(page2).toHaveTitle("STORE");
});

test.only("Handle Multiple Pages/Windows", async () => {
    // in future u can the url bcoz they are taking to much time to load the url
  const browser = await chromium.launch();
  const context = await browser.newContext();

  const page1 = await context.newPage();
  await page1.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  const pagePromise = context.waitForEvent(3000);
  await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click();

  const newPage = await pagePromise;
  await expect(newPage).toHaveTitle(
    "Human Resources Management Software | HRMS | OrangeHRM"
  );

  await page1.waitForTimeout(3000);
  await newPage.waitForTimeout(3000);

  await browser.close();
});
