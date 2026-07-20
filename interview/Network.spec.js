import { test, expect } from "@playwright/test";

test("Mock Network", async ({ page, context }) => {
  //   await context.route(/.css$/, (route) => route.abort());

  await page.route("**/*.{png,jpg,jpeg}", async (route) => {
    route.abort();
  });

  await page.goto("https://www.amazon.in/");

  await page.waitForTimeout(30000);
});

test("gets the json from api and adds a new fruit", async ({ page }) => {
  await page.route("*/**/api/v1/fruits", async (route) => {
    const response = await route.fetch();
    const json = await response.json();

    // json.push({ name: "ABCDE", id: 100 });
    // json.push({ name: "prakash", id: 500 });

    json.push({
      name: "Mango",
      id: 1000,
    });

    await route.fulfill({ json });
  });

  // Go to the page
  await page.goto("https://demo.playwright.dev/api-mocking");

  await page.waitForTimeout(3000);

  await expect(page.getByText("Mango", { exact: true })).toBeVisible();
  //   await expect(page.getByText("prakash", { exact: true })).toBeVisible();
});

test("Add image", async ({ page }) => {
  await page.route("**/*.html", async (route) => {
    const response = await page.request.fetch(route.request());
    const body = await response.text();
    const imageTag =
      '<img src="https://unsplash.com/photos/woman-feeding-seagulls-by-the-water-STZ7Do6AfqI" id="injected-image">';

    const modifiedBody = body.replace("</body>", `${imageTag}</body>`);

    await route.fulfill({
      response,
      body: modifiedBody,
      contentType: "text/html",
    });
  });
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.waitForTimeout(5000);
});
