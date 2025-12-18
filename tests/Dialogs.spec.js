import { test, expect } from "@playwright/test";

test.skip("Alert", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Enabling Dialog window handler
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("alert");
    expect(dialog.message()).toContain("I am an alert box!");
    await dialog.accept();
  });

  await page.click("//button[@id='alertBtn']");

  await page.waitForTimeout(5000);
});

test.skip("Confirmation Alert", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Enabling Dialog window handler
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("confirm");
    expect(dialog.message()).toContain("Press a button!");
    await dialog.accept();
    // await dialog.dismiss();
  });

  await page.click("//button[@id='confirmBtn']");
  await expect(page.locator("//p[@id='demo']")).toHaveText("You pressed OK!");

  await page.waitForTimeout(5000);
});


test("Prompt Alert", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Enabling Dialog window handler
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("prompt");
    expect(dialog.message()).toContain("Please enter your name:");
    expect(dialog.defaultValue()).toContain("Harry Potter");
    await dialog.accept("Prakash S");
    // await dialog.dismiss();
  });

  await page.click("//button[@id='promptBtn']");
  await expect(page.locator("//p[@id='demo']")).toHaveText("Hello Prakash S! How are you today?");

  await page.waitForTimeout(3000);
});