import { test, expect } from "@playwright/test";

test.skip("Upload Single File", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  //   await page.getByText("Footer text").scrollIntoViewIfNeeded();

  await page.locator("#singleFileInput").scrollIntoViewIfNeeded();

  await page.locator("#singleFileInput").click();

  await page
    .locator("#singleFileInput")
    .setInputFiles("tests\\uploadFiles\\File1.txt");

  await page.waitForTimeout(3000);
});

test("Upload Multiple File", async ({ page }) => {
  await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

  await page.waitForTimeout(3000);

  //   uploading files
  await page
    .locator("#filesToUpload")
    .setInputFiles([
      "tests\\uploadFiles\\File1.txt",
      "tests/uploadFiles/File2.txt",
    ]);

  await page.waitForTimeout(3000);

  await expect(await page.locator("#fileList li:nth-child(1)")).toHaveText(
    "File1.txt"
  );
  await expect(await page.locator("#fileList li:nth-child(2)")).toHaveText(
    "File2.txt"
  );

  await page.waitForTimeout(3000);

  //   removing files
  await page.locator("#filesToUpload").setInputFiles([]);

  await page.waitForTimeout(2000);
});
