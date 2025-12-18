import { test, expect } from "@playwright/test";
import { log } from "console";

test("Handle MultiSelect", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.selectOption("#colors", ["Red", "Green", "White", "Yellow"]);
  await page.locator("#animals").selectOption(["Cheetah", "Dog", "Lion"]);

  /**
   * Assertions
   * ----------
   */

  // 1.Get All colors
  const colors = await page.$$("#colors option");
  console.log("Total colors : " + colors.length);

  //   for (const color of colors) {
  //     let value = await color.textContent();
  //     console.log(value);
  //   }

  // 2.Get total number of colors
  const totalColor = await page.locator("#colors option");
  await expect(totalColor).toHaveCount(7);

  // 3. Cheeck presence of value is in the dropdown
  const content = await page.locator("#colors").textContent();
  await expect(content.includes("White")).toBeTruthy();
  await expect(content.includes("Black")).toBeFalsy();

  //   await page.waitForTimeout(5000);
});

test("Handle AutoSuggest", async ({ page }) => {
  await page.goto("https://www.amazon.in/");

  await page.fill("#twotabsearchtextbox", "biscuts");

  await page.waitForSelector(
    "//div[contains(@class,'left-pane-results-container')]/div/div/div/span"
  );

  const suggest = await page.$$(
    "//div[contains(@class,'left-pane-results-container')]/div/div/div/span"
  );
  console.log("Total suggest : " + suggest.length);

  for (const item of suggest) {
    const value = await item.textContent();
    if (value.includes("biscuits 1kg")) {
      await item.click();
      break;
    }
  }

  await page.waitForTimeout(5000);
});

test("Hidden DropDowns", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  await page.fill("//input[@placeholder='Username']", "Admin");
  await page.fill("//input[@placeholder='Password']", "admin123");

  await page.click("button[type='submit']");

  await page.click("//ul[@class='oxd-main-menu']/li[2]");

  await page.click(
    "//*[@id='app']/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[7]/div/div[2]/div/div/div[1]"
  );

  await page.waitForTimeout(3000);

  const jobRoles = await page.$$("//div[@role='listbox']/div/span");

  for (const job of jobRoles) {
    const value = await job.textContent();
    if (value.includes("Human Resources")) {
      await job.click();
      break;
    }
  }

  await page.waitForTimeout(3000);
});
