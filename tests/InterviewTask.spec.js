import { test, expect } from "@playwright/test";

test.skip(" Get all the links of the menu", async ({ page }) => {
  await page.goto("https://playwright.dev/docs/intro");

  const menuItem = page.locator(
    "(//ul[@class='menu__list'])[1]//descendant::a"
  );
  const count = await menuItem.count();
  console.log(`Total links present: ${count}`);
  expect(count).toBeGreaterThanOrEqual(6);

  for (let i = 0; i < count; i++) {
    const text = await menuItem.nth(i).innerText();
    const link = await menuItem.nth(i).getAttribute("href");

    console.log(`${text} - ${link}`);
  }
});

test("Flipkart ", async ({ page }) => {
  await page.goto("https://www.flipkart.com/");

  await page
    .locator("//input[@placeholder='Search for Products, Brands and More']")
    .fill("iPhone", { delay: 200 });

  await page.press(
    "//input[@placeholder='Search for Products, Brands and More']",
    "Enter"
  );

  await page.waitForSelector(".RG5Slk");

  for (let i = 0; i < 3; i++) {
    const [newPage] = await Promise.all([
      page.waitForEvent("popup"),
      page.locator(".RG5Slk").nth(i).click(),
    ]);

    await newPage.waitForLoadState();
    console.log(`${i}th title of ${await newPage.title()}`);
  }
});
