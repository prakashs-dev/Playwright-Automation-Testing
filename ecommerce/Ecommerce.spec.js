import { test, expect, chromium } from "@playwright/test";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../test_data/.env") });

let browser;
let context;
let page;

let billAddress = {
  firstname: process.env.firstName,
  lastname: process.env.lastName,
  email: process.env.bEmail,
  phone: process.env.phone,
  address: process.env.address,
  town: process.env.town,
  pinCode: process.env.pinCode,
};

test.beforeAll(async () => {
  browser = await chromium.launch();
  context = await browser.newContext();
  page = await context.newPage();

  await page.goto(process.env.ecomUrl);
});

// test.afterAll(async () => {
//   await browser.close();
// });

test("E-Commerce Website Testing", async () => {
  // Go to Login Page
  await page.getByText("My Account").click();

  // Validate with credentials
  const loginPage = new Login(page);
  await loginPage.Login(process.env.email, process.env.password);

  // Go to Shopping page
  await page.getByText("Shop").click();

  // Searching and Select Product
  const item = new Product(page);
  await item.checkProductInCart("Android Quick Start Guide");
  await item.checkProductInCart("HTML5 WebApp Develpment");
  await item.checkProductInCart("Thinking in HTML");
  await item.checkProductInCart("Selenium Ruby");

  // Go to Check out page
  await page.getByTitle("View your shopping cart").click();

  await page.locator("//a[normalize-space()='Proceed to Checkout']").click();

  const checkout = new Checkout(page);
  await checkout.billingDetails(billAddress);
  // checkout.withOutChange();

  await Promise.all([
    page.waitForNavigation({ waitUntil: "networkidle" }),
    page.locator("#place_order").click(),
  ]);

  // Once order confirmed they taking screenshot
  await screenshots("Order Placed");

  // Logout the account
  await loginPage.Logout();
});

async function screenshots(title) {
  await page.screenshot({
    path: "Ecom/screenshots/" + `${title}.png`,
  });
}
