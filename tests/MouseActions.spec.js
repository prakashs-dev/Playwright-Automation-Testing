import { test, expect } from "@playwright/test";

test.skip("Mouse Hover Action", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const pointme = await page.locator("//button[normalize-space()='Point Me']");
  const laptop = await page.locator("//a[normalize-space()='Laptops']");

  // mouse hover
  await pointme.hover();
  await laptop.hover();

  await page.waitForTimeout(5000);
});

test.skip("Mouse Right Action", async ({ page }) => {
  await page.goto("https://demoqa.com/buttons");

  const button = await page.locator("#rightClickBtn");

  await button.click({ button: "right" });

  await page.waitForTimeout(3000);
});

test.skip("Mouse Double Click Action", async ({ page }) => {
  await page.goto("https://demoqa.com/buttons");

  const dbbutton = await page.locator("#doubleClickBtn");

  await dbbutton.dblclick();

  const dbMsg = page.locator("//p[@id='doubleClickMessage']");
  console.log("Message ", dbMsg);
  await expect(dbMsg).toHaveValue("You have done a double click");

  await page.waitForTimeout(3000);
});

test("Mouse Drag & Drop Action", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const src = await page.locator("#draggable");
  const dest = await page.locator("#droppable");

  //   Approch 1

  //   await src.hover();
  //   await page.mouse.down();

  //   await dest.hover();
  //   await page.mouse.up();

  // Approch 2

  await src.dragTo(dest);

  await page.waitForTimeout(5000);
});
