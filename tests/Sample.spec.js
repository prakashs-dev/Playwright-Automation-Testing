import { test, expect, webkit } from "@playwright/test";

test("Sample test", async ({ page }) => {
  await page.setViewportSize({ width: 1536, height: 816 });
  await page.goto("https://automationexercise.com/products");

  await expect(page).toHaveTitle("Automation Exercise - All Products");

  const products = await page.$$("//div[@class='productinfo text-center']/p");

  for (let i = 0; i < products.length; i++) {
    if ((await products[i].textContent()) === "Sleeveless Dress") {
      await products[i].hover();
      await page
        .locator("//div[@class='productinfo text-center']/a")
        .nth(i)
        .click();
      // await page.locator("//button[normalize-space()='Add to cart']").click();
      await page.waitForTimeout(2000);
      await page.click("//button[normalize-space()='Continue Shopping']");
      break;
    }
  }

  await page.waitForTimeout(3000);
});
