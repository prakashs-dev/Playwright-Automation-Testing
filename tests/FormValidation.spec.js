import { test, expect } from "@playwright/test";

test("Form Validation", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Register.html");

  //Input field
  await expect(
    page.locator("//input[@placeholder='First Name']")
  ).toBeVisible();
  await expect(page.locator("//input[@placeholder='First Name']")).toBeEmpty();
  await expect(
    page.locator("//input[@placeholder='First Name']")
  ).toBeEditable();
  await expect(
    page.locator("//input[@placeholder='First Name']")
  ).toBeEnabled();

  await page.locator("//input[@placeholder='First Name']").fill("Prakash");

  //Radio Button
  await page.locator("//input[@value='Male']").check(); //male
  //   await page.check("//input[@value='Male']");
  await expect(page.locator("//input[@value='Male']")).toBeChecked();
  await expect(page.locator("//input[@value='Male']").isChecked()).toBeTruthy();

  await expect(
    await page.locator("//input[@value='FeMale']").isChecked()
  ).toBeFalsy();

  // Single CheckBox
  await page.locator("//input[@type='checkbox' and @id='checkbox1']").check();
  //   await page.check("//input[@type='checkbox' and @id='checkbox1']");

  await expect(
    page.locator("//input[@type='checkbox' and @id='checkbox1']")
  ).toBeChecked();
  await expect(
    page.locator("//input[@type='checkbox' and @id='checkbox1']").isChecked()
  ).toBeTruthy();

  // Multiple check box

  const checkboxLocaters = [
    "//input[@type='checkbox' and @id='checkbox1']",
    "//input[@type='checkbox' and @id='checkbox2']",
    "//input[@type='checkbox' and @id='checkbox3']",
  ];

  for (const locator of checkboxLocaters) {
    await page.locator(locator).check(); // select multiple checkbox
  }

  await page.waitForTimeout(3000); // wait for 5sec

  for (const locator of checkboxLocaters) {
    if (await page.locator(locator).isChecked) {
      await page.locator(locator).uncheck(); //unselect multiple checkbox which are selected
    }
  }

  await page.waitForTimeout(5000);
});

test("Handle DropDown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Multiple ways to select option from dropdown
  //   await page.locator("#country").selectOption({ label: "India" }); // label with visible text
  //   await page.locator("#country").selectOption("India"); // visible text
  //   await page.locator("#country").selectOption({ value: "uk" }); //by using value
  //   await page.locator("#country").selectOption({ index: 5 }); //by using index
  //   await page.selectOption("#country", "India");

  // Assertions

  // 1.check number of options in dropdown
  //   const optionCount = await page.$$("#country option");
  //   console.log("DropDown Count :: " + optionCount.length);
  //   await expect(optionCount.length).toBe(10);

  //  2.check presence of value in dropdown
  //   const content = await page.locator("#country").textContent();
  //   await expect(content.includes("India")).toBeTruthy();

  // 3.check presence of value in dropdown - looping
  const options = await page.$$("#country option");
  let status = false;

  for (const option of options) {
    // console.log(await option.textContent());
    const country = await option.textContent();
    if (country.includes("France")) {
      status = true;
      break;
    }
  }

  await expect(status).toBeTruthy();

  //   await page.waitForTimeout(5000);
});
