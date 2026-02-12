import { test, expect, chromium } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { Carts } from "../pages/Cart";

// test("POM with Login", async ({ page }) => {
//   // Login Page
//   const login = new LoginPage(page);
//   await login.gotoLoginPage();
//   await login.login("jiouser", "jiouser");
//   await page.waitForTimeout(2000);

//   //   Home Page
//   const home = new HomePage(page);
//   await home.addProductCard("Nexus 6");
//   await page.waitForTimeout(3000);
//   await home.gotoCart();

//   //   Cart Page
//   const cart = new Carts(page);
//   await page.waitForTimeout(3000);
//   const isPresent = await cart.checkProductInCart("Nexus 6");
//   await expect(isPresent).toBe(true);

//   await login.logout();
// });

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

  const login = new LoginPage(page);
  await login.gotoLoginPage();
  await login.login("jiouser", "jiouser");
  console.log("BEFORE EACH LAUNCHED NEW PAGE");
  await page.pause();
});

test.afterEach(async () => {
  // await login.logout();
  await page.close();
  await context.close();
  console.log("AFTER EACH HOOK CLOSED PAGE AND CONTEXT");
});

test.afterAll(async () => {
  await browser.close();
  console.log("AFTER ALL HOOK CLOSED BROWSER");
});

test("Searching Product and Select", async () => {
  const home = new HomePage(page);
  await home.addProductCard("Nexus 6");
});

test("Goto Cart and order Placed it", async () => {
  const cart = new Carts(page);
  await cart.gotoCart();
  await cart.checkProductInCart("Nexus 6");
  // await page.locator("//button[normalize-space()='Place Order']").click();
});
