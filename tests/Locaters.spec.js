import { test, expect } from "@playwright/test";
import { log } from "console";

test("Locaters", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");

  //   click on login button - property
  // await page.locator('id=login2').click();
  await page.click("id=login2");

  //   fill the username - css
  // await page.locator('#loginusername').fill('jiouser');
  await page.fill("#loginusername", "jiouser");
  // await page.type("#loginusername", "jiouser");

  //   fill the password - css
  // await page.type("input[id='loginpassword']", "jiouser");
  await page.fill("input[id='loginpassword']", "jiouser");

  //   click on login button
  await page.click("//button[text()='Log in']");

  // const logoutLink = page.getByText('Log out');
  // console.log("Logout BTN visible "+logoutLink);

  // await expect(logoutLink).toBeVisible();

  /* get all link tags in a page  */

  // const links = await page.$$("a");

  // for (const link of links) {
  //   const linkText = await link.textContent();
  //   console.log(linkText);
  // }

/** Get All product title */

const products = await page.$$("//div[@id='tbodyid']//div//h4/a");

for(const item of products){
  const product = await item.textContent();
  // console.log(product);
  console.table(product);
}

  await page.close();
});
