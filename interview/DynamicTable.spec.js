import { test, expect } from "@playwright/test";

test("Validate Dynamic table with pagingnation", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const pages = page.locator("#pagination li a");
  const pageNo = await pages.count();

  const ids = [18, 7, 8, 21, 20];

  for (let i = 0; i < pageNo; i++) {
    if (i > 0) {
      await pages.nth(i).click();
    }
    const rows = page.locator("#productTable tbody tr");

    for (let j = 0; j < (await rows.count()); j++) {
      const row = rows.nth(j).locator("td");

      for (let k = 0; k < (await row.count()); k++) {
        const cell = await row.nth(k).textContent();
        const check = row.locator("//input[@type='checkbox']");
        if (ids.includes(Number(cell))) {
          await check.click();
          console.log("Clicked : ", cell);
        }
        // console.log("Cell value : ", cell);
      }
    }
  }

  await page.waitForTimeout(5000);
});
