import { test, expect } from "@playwright/test";

test("Tables", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const table = await page.locator("#productTable");

  //  1.Get all cloumns and rows
  const cols = await table.locator("thead tr th");
  await expect(await cols.count()).toBe(4);

  const rows = await table.locator("tbody tr");
  await expect(await rows.count()).toBe(5);

  // 2.select check box Smartwatch
  /* const mathedRow = rows.filter({
    has: page.locator("td"),
    hasText: "Smartwatch",
  });

  await mathedRow.locator("input").check();
  */

  // 3. select Multiple prodcut select
  /* await selectProduct(rows, page, "Smartwatch");
  await selectProduct(rows, page, "Smartphone");
  await selectProduct(rows, page, "Wireless Earbuds");
  */

  // 4.print all products details using loop

  /*for (let i = 0; i < (await rows.count()); i++) {
    const row = rows.nth(i);
    const tds = row.locator("td");

    for (let j = 0; j < (await tds.count()) - 1; j++) {
      console.log(await tds.nth(j).textContent());
    }
  }*/

  // 5. read data from all pages using lopp
  const pages = await page.locator(".pagination li a");
  console.log("total pages ", await pages.count());

  for (let p = 0; p < (await pages.count()); p++) {
    if (p > 0) {
      await pages.nth(p).click();
    }

    for (let i = 0; i < (await rows.count()); i++) {
      const row = rows.nth(i);
      const tds = row.locator("td");

      for (let j = 0; j < (await tds.count()) - 1; j++) {
        console.log(await tds.nth(j).textContent());
      }
    }

    await page.waitForTimeout(3000);
  }

  await page.waitForTimeout(5000);
});

async function selectProduct(rows, page, name) {
  const mathedRow = rows.filter({
    has: page.locator("td"),
    hasText: name,
  });

  await mathedRow.locator("input").check();
}
