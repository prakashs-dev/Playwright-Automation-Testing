import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { Carts } from "../pages/Cart";

test("POM with Login", async ({ page }) => {
  // Login Page
  const login = new LoginPage(page);
  await login.gotoLoginPage();
  await login.login("jiouser", "jiouser");
  await page.waitForTimeout(2000);

  //   Home Page
  const home = new HomePage(page);
  await home.addProductCard("MacBook Pro");
  await page.waitForTimeout(3000);
  await home.gotoCart();

  //   Cart Page
  const cart = new Carts(page);
  await page.waitForTimeout(3000);
  const isPresent = await cart.checkProductInCart("MacBook Pro");
  await expect(isPresent).toBe(true);

  await login.logout();
});
