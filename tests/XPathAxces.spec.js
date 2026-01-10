import { test, expect, Locator } from "@playwright/test";

/**
 * CSS - Cascading Style Sheets
 * it combination of Html + JS + CSS
 *
 * 2 types of css locators
 * ------------------------
 *  1.Absolute CSS locators
 *  2.Relative CSS locators
 *
 * (Note : tag is optional)
 * tag with id                  - tag#id  or #id
 * tag with class               - tag.class or .class
 * tag with any other attribute - tag[attribute = value] or [attribute = value]
 * tag with class and attribute - tag.class[attribute = value] or class[attribute = value]
 *
 */


test("Xpath Axes", async ({ page }) => {
  await page.goto("https://www.w3schools.com/html/html_tables.asp");

  //   1. Self Xpath - Selects the current node itself
  const country = page.locator("//td[text()='Mexico']/self::td");
  await expect(country).toHaveText("Mexico");

  //   2.Parent - Selects the parent of the current node
  const parent = page.locator("//td[text()='Mexico']/parent::tr");
  await expect(parent).toContainText("Francisco Chang");
  //   console.log(await parent.textContent());

  // 3.Child - Selects all children of the current node
  const childElement = page.locator(
    "//table[@id='customers']//tr[4]/child::td"
  );
  await expect(childElement).toHaveCount(3);
  //   console.log(await childElement.allTextContents());

  // 4.Ancestor - Selects all ancestors (parent, grandparent, etc.)
  const table = page.locator("//td[text()='Mexico']/ancestor::table");
  await expect(table).toHaveAttribute("id", "customers");

  //   5.Descendent - Selects all descendants (children, grandchildren, etc.)
  const descendant = page.locator("//table[@id='customers']/descendant::td");
  await expect(descendant).toHaveCount(18);

  //   6.Following - Selects everything after the current node in the document
  const following = page.locator(
    "//td[normalize-space()='Mexico']/following::td[2]"
  );
  await expect(following).toHaveText("Roland Mendel");

  //   7.Following Siblings - Selects siblings after the current node
  const followingSiblings = page.locator(
    "//td[normalize-space()='Francisco Chang']/following-sibling::td[1]"
  );
  await expect(followingSiblings).toHaveText("Mexico");

  //   8.Preceding - Selects everything before the current node in the document
  const preceding = page.locator("//td[text()='Mexico']/preceding::td[5]");
  await expect(preceding).toHaveText("Alfreds Futterkiste");

  //   9.Preceding-sibling - Selects siblings before the current node
  const precedingSiblings = page.locator(
    "//td[text()='Mexico']/preceding-sibling::td"
  );
  await expect(precedingSiblings.nth(0)).toHaveText(
    "Centro comercial Moctezuma"
  );
  await expect(precedingSiblings.nth(1)).toHaveText(
    "Francisco Chang"
  );
});
