import { test, expect, chromium } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../test_data/.env") });
let screenshotCounter = 1;

test("Debit Card Application Form", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(process.env.url);

  await page.locator("#name").fill(process.env.fullName);

  await page.locator("//input[@value='Male']").check();

  clear(page, "#city");
  await page.locator("#city").fill(process.env.city);

  clear(page, "#accountNumber");
  await page.locator("#accountNumber").fill(process.env.accNumber);

  const cardType = await page.locator("#cardType");
  cardType.selectOption({ label: process.env.cardType });

  await expect(cardType).toHaveValue("platinum");

  page.on("dialog", async (dialog) => {
    console.log(dialog.message());
    await dialog.accept();
  });

  await page.locator("#confirmation").check();

  await page.click("//button[normalize-space()='Apply for Debit Card']");

  scrolling(page, "//p[@class='success-message']");
  const msg = await page.locator("//p[@class='success-message']").textContent();
  await expect(msg).toContain("successfully!");

  screenshot(page, "DebitSuccess");
  const trackNumber = await page.locator("#trackingLink").textContent();

  const [newPage] = await Promise.all([
    page.waitForEvent("popup"),
    page.locator("#trackingLink").click(),
  ]);

  await newPage.waitForLoadState();
  await expect(newPage).toHaveTitle("Tracking Number");

  console.log("Tracking number text:", trackNumber);

  await newPage.locator("#trackId").fill(trackNumber);

  await newPage.click("//button[normalize-space()='Check Status']");

  scrolling(newPage, "//div[@id='statusBox']");
  const status = await newPage.locator("//div[@id='statusBox']").textContent();
  console.log("Tracking Status:", status);
  screenshot(newPage, "TrackApplication");

  await expect(status).toEqual(`Status for ${trackNumber}: In Progress`);

  await page.waitForTimeout(3000);
});

async function clear(page, location) {
  await page.locator(location).press("Control+A");
  await page.locator(location).press("Delete");
}

async function scrolling(page, location) {
  await page.locator(location).scrollIntoViewIfNeeded();
}

async function screenshot(page, title) {
  await page.screenshot({
    path: "tests/screenshots/" + `${title}${screenshotCounter}.png`,
  });
  screenshotCounter++;
}
