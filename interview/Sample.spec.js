import { expect, test } from "@playwright/test";

test("Login", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");

  await page.locator("#login2").click();

  await page.locator("#loginusername").fill("jiouser");
  await page.locator("#loginpassword").fill("jiouser");
  await page.locator("//button[text()='Log in']").click();
  // await expect(page.locator("#nameofuser")).toHaveText(/Welcome jiouser/);
  await page.context().storageState({ path: "auth.json" });
  await page.waitForTimeout(2000);
});

test("Product Search", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await expect(page.locator("#nameofuser")).toHaveText(/Welcome jiouser/);
  await page.waitForTimeout(3000);
});
test("Add to card", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await expect(page.locator("#nameofuser")).toHaveText(/Welcome jiouser/);
  await page.waitForTimeout(3000);
});
test("Payment", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await expect(page.locator("#nameofuser")).toHaveText(/Welcome jiouser/);
  await page.waitForTimeout(3000);
});
