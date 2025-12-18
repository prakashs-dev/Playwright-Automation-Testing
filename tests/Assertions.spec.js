import { test, expect } from "@playwright/test";

test("Assertions", async ({ page }) => {
  // 1) expect(page).toHaveURL()   Page has URL
  await page.goto("https://demo.nopcommerce.com/register");

  // 2) expect(page).toHaveTitle()   Page has title
  await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

  // 3) expect(locator).toBeVisible()  Element is visible
  await expect(page).toHaveTitle("nopCommerce demo store. Register");

  // 4) expect(locator).toBeEnabled()  Control is enabled
  const logo = await page.locator(".header-logo");
  await expect(logo).toBeVisible();

  // 5) expect(locator).toBeChecked()  Radio/Checkbox is checked
  const maleRadioClicked = await page.locator("#gender-male");
  await maleRadioClicked.click();
  // console.log("Male Radio butto :: " + maleRadioClicked);
  await expect(maleRadioClicked).toBeChecked();

  // check box
  await expect(
    page.locator("#NewsLetterSubscriptions_0__IsActive")
  ).toBeChecked();

  // 6) expect(locator).toHaveAttribute() Element has attribute
  const regBtn = await page.locator("#register-button");
  await expect(regBtn).toHaveAttribute("type", "submit");

  // 7) expect(locator).toHaveText()  Element matches text
  await expect(page.locator(".page-title h1")).toHaveText("Register");

  // 8) expect(locator).toContainText()  Element contains text
  await expect(page.locator(".page-title h1")).toContainText("Regi");

  // 9) expect(locator).toHaveValue(value) Input has a value
  const email = page.locator("#Email");
  await email.fill("sample@gmail.com");
  await expect(email).toHaveValue("sample@gmail.com");

  // 10) expect(locator).toHaveCount()  List of elements has given length
});
