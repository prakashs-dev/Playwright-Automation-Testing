import { test, expect } from "@playwright/test";

test("DatePicker", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //   await page.fill("#datepicker", "12/12/2025");

  //  1. Pick a from calendars using loop

  await page.click("#datepicker"); //open calcender

  const year = "2025";
  const month = "December";
  const date = "15";

  while (true) {
    const currentMonth = await page
      .locator(".ui-datepicker-month")
      .textContent();
    const currentYear = await page.locator(".ui-datepicker-year").textContent();

    if (currentMonth == month && currentYear == year) {
      break;
    }

    const crntValue = Number(currentYear) * 12 + getMonthIndex(currentMonth);
    const trgtValue = Number(year) * 12 + getMonthIndex(month);

    if (crntValue < trgtValue) {
      await page.click("//a[@title='Next']");
    } else {
      await page.click("//a[@title='Prev']");
    }
  }

  /*const dates = await page.$$("//a[@class='ui-state-default']");

  for (const dts of dates) {
    if ((await dts.textContent()) == date) {
      await dts.click();
      break;
    }
  }
*/
  // 2.DateSelectiong -without loop
  await page.click(`//a[@class='ui-state-default'][text()='${date}']`);

  await page.waitForTimeout(5000);
});

function getMonthIndex(month) {
  return new Date(month + " 1, 2000").getMonth();
}
