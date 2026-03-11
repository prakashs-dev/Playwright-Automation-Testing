import { test, expect } from "@playwright/test";

test.skip("All playwright exceptions", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");

  const msg = await page.locator("h1").textContent();
  expect(msg).toEqual("Welcome to the-internet"); // Assertion Error

  const box = page.locator("//a[text()='Checkboxesss']"); //Test timeout of 30000ms exceeded.
  await box.click();
});

test("test",async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    // Attempt navigation
    await page.goto("https://nonexistent-website.com", { timeout: 5000 });
    console.log("Navigation successful!");
  } catch (error) {
    if (error.name === "TimeoutError") {
      console.error("Navigation failed: TimeoutError");
    } else {
      console.error("Navigation failed:", error);
    }
  } 
})
