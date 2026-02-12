import { test, expect, webkit } from "@playwright/test";

test.describe.configure({ mode: "serial" });

test.skip("Sample test", async ({ page }) => {
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

test.describe("Group 1", async () => {
  test("Test 1", async () => {
    console.log("Test 1 ......");
  });
  test("Test 2", async () => {
    console.log("Test 2 ......");
  });
  test("Test 3", async () => {
    console.log("Test 3 ......");
  });
  test("Test 4", async () => {
    console.log("Test 4 ......");
  });
  test("Test 5", async () => {
    console.log("Test 5.......");
  });
});
