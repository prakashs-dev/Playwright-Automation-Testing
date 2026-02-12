import { test, expect, chromium } from "@playwright/test";

let browser;
let context;
let page;

test.beforeAll(async () => {
  browser = await chromium.launch();
  console.log("BEFORE ALL HOOK LAUNCHED CHROMIUM BROWSER");
});

test.beforeEach(async () => {
  context = await browser.newContext();
  page = await context.newPage();

  await page.goto("https://adactinhotelapp.com/");

  console.log("BEFORE EACH LAUNCHED NEW PAGE");
  // await page.pause();
});

test.afterEach(async () => {
  // close page and context
  await page.close();
  await context.close();
  console.log("AFTER EACH HOOK CLOSED PAGE");
});

test.afterAll(async () => {
  // closer browser
  await browser.close();
  console.log("AFTER ALL HOOK CLOSED BROWSER");
});

test("Login Page", async () => {
  await page.locator("#username").type("advijauser", { delay: 200 });
  await page.locator("#password").type("advijauser", { delay: 200 });
  await page.click("//input[@id='login' or @value='Login']");
});

// test("Login Page 1", async () => {
//   await page.locator("#username").type("advijauser", { delay: 200 });
//   await page.locator("#password").type("advijauser", { delay: 200 });
//   await page.click("//input[@id='login' or @value='Login']");
// });

// test("Checkbox verification", async () => {});


