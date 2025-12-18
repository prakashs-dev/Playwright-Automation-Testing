import { test, expect } from "@playwright/test";

test.beforeAll(async () => {
  console.log("This is beforeAll Hook............");
});
test.afterAll(async () => {
  console.log("This is afterAll Hook............");
});
test.beforeEach(async () => {
  console.log("This is beforeEach Hook............");
});
test.afterEach(async () => {
  console.log("This is afterEach Hook............");
});

test.describe("Group 1", () => {
  test("Test 1", async ({ page }) => {
    console.log("This is Test 1..........");
  });

  test("Test 2", async ({ page }) => {
    console.log("This is Test 2..........");
  });
});

test.describe("Group 2", () => {
  test("Test 3", async ({ page }) => {
    console.log("This is Test 3..........");
  });

  test("Test 4", async ({ page }) => {
    console.log("This is Test 4..........");
  });
});
