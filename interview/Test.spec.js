import { test, expect } from "@playwright/test";

test("Practies 1", async ({ page }) => {
  expect(true).toBe(true);
});
test("Practies 2", async ({ page }) => {
  expect("Hello").toBe("Hello");
});
test("Practies 3", async ({ page }) => {
  expect(true).toBe(true);
});
test("Practies 4", async ({ page }) => {
  expect("Hello").toBe("Hello");
});

test("NetWork", async ({ page }) => {
  page.on("request", (request) =>
    console.log(
      ">>",
      request.method(),
      request.url(),
      request.resourceType(),
      request.sizes(),
      request.timing(),
      request.response()
    )
  );
  // page.on("response", (response) =>
  // console.log("<<", response.status(), response.url())
  // );

  // await page.route("**/*.{png,jpeg,jpg,gif}", (route) => {
  //   route.abort();
  // });

  // await page.route("**/*.{png,jpg,jpeg}", (route) => route.abort());

  // await page.route("**/*", (route) => {
  //   return route.request().resourceType() === "image"
  //     ? route.abort()
  //     : route.continue();
  // });

  await page.goto("https://amazon.com");
  await page.waitForTimeout(3000);
});

test("Promise Any", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/login");

  await page.locator("#username").fill("tomsmith");
  await page.locator("#password").fill("SuperSecretPassword!");

  await page.locator("//button[@type='submit']").click();

  const success = page.waitForSelector(".flash.success");
  const failed = page.waitForSelector(".flash.error", { timeout: 3000 });

  const outcome = await Promise.any([success, failed]);

  if (await outcome.isVisible()) {
    const txt = await outcome.textContent();
    console.log(txt);
    expect(txt).not.toBeNull();
  }
});

test("Upload avatar.png on demo site", async ({ page }) => {
  // Navigate to the demo upload page
  await page.goto("https://the-internet.herokuapp.com/upload");

  // Trigger the file chooser by clicking the "Choose File" button
  const [fileChooser] = await Promise.all([
    page.waitForEvent("filechooser"),
    page.click('input[type="file"]'),
  ]);

  // Upload your file
  await fileChooser.setFiles("avator.png");

  // Click the upload button
  await page.click('input[type="submit"]');

  // Verify the upload result
  await expect(page.locator("#uploaded-files")).toHaveText("avator.png");

  await page.waitForTimeout(3000);
});

test("Amazon", async ({ page }) => {
  await page.goto("https://www.amazon.in/");
  await page.getByLabel("Search Amazon.in").pressSequentially("Iphone",{delay:100});
  await page.keyboard.press("Enter");

  // const pTitle = page.locator("(//span[text()='Apple'])[1]").first();
  // const rating = page.locator(".a-icon-alt").first();

  // const button = rating.getByLabel("button", { name: /Add to cart/i }).first();

  // await expect(pTitle).toBeVisible();
  // await expect(rating).toBeVisible();
  // await expect(button).toContainText("Add to cart");

  await page.waitForSelector("div.s-main-slot");

  // First product card
  const productCard = page.locator("div.s-main-slot div[data-component-type='s-search-result']").first();

  const pTitle = productCard.locator("h2 span").first();
  const rating = productCard.locator(".a-icon-alt").first();
  const button = page.getByRole('button', { name: /Add to Cart/i });

  await expect(pTitle.innerText()).toBeVisible();
  await expect(rating).toBeVisible();
  await expect(button).toContainText("Add to Cart");
});
