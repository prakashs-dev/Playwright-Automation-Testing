import { test, expect, chromium } from "@playwright/test";

let browser;
let context;
let page;

test.beforeAll("Open the Browser ", async () => {
  browser = await chromium.launch();
  context = await browser.newContext();
  page = await context.newPage();
  await page.goto(
    "https://www.hyrtutorials.com/p/window-handles-practice.html"
  );
});

test.afterAll("Close the Browser", async () => {
  await page.waitForTimeout(3000);
  await browser.close();
});

test.skip("Single Tabs", async () => {
  const [newPage] = await Promise.all([
    page.waitForEvent("popup"),
    page.locator("#newTabBtn").click(),
  ]);

  await newPage.waitForLoadState();
  const title = await newPage.title();
  console.log(title);
  await expect(newPage).toHaveTitle(" AlertsDemo - H Y R Tutorials ");
});

test.skip("Multiple Tabs", async () => {
  await page.locator("#newTabsBtn").click();
  await page.waitForTimeout(2000);
  const allPages = context.pages();

  for (const p of allPages) {
    await p.waitForLoadState();
    console.log(await p.title());
  }
});

test.skip("Single Browser Windows", async () => {
  await page.locator("#newWindowBtn").click();

  await page.waitForTimeout(2000);

  const allPages = context.pages();
  console.log(`Total windows opened: ${allPages.length}`);

  const secondWindow = allPages[1];
  console.log(await secondWindow.title());
  await expect(secondWindow).toHaveTitle(" Basic Controls - H Y R Tutorials ");
});

test("Multiple Broswer Windows", async () => {
  await page.locator("#newWindowsBtn").click();

  await page.waitForTimeout(2000);

  const allPage = context.pages();
  console.log(`Total length of page ${await allPage.length}`);

  for (let i = 1; i < allPage.length; i++) {
    await allPage[i].waitForLoadState();
    console.log(`${i}th of page title ${await allPage[i].title()}`);
  }
});
