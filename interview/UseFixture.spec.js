import { expect, test } from "@playwright/test";

// test.describe.configure({ mode: "parallel" });

test.describe("suite", () => {
  test.beforeAll(async () => {
    console.log("run beforeAll.....!");
  });

  test("first good", async ({ page }) => {
    console.log("first ###");
  });

  test("second flaky", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    await expect(page, "failed to match title").toHaveTitle(
      "Automation Testing Practice"
    );

    console.log("second .............");
  });
  test("third good", async ({ page }) => {
    console.log("third ###");
  });
  test.afterAll(async () => {
    console.log("afterAll ....!");
  });
});

test.describe("suite 111", () => {
  test("foure good", async ({ page }) => {
    console.log("111 foure ###");
  });

  test("five flaky", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    await expect(page, "failed to match title").toHaveTitle(
      "Automation Testing Practice"
    );

    console.log("five .............");
  });
  test("six good", async ({ page }) => {
    console.log("six ###");
  });
});

test.describe.configure({ mode: "parallel" });
