import { test, expect } from "@playwright/test";

test.skip("Frames", async ({ page }) => {
  // 1.Get total no of frames
  await page.goto("https://ui.vision/demo/webtest/frames/");
  const frames = await page.frames();
  console.log("No of Frames ", frames.length);

  // 2.using name or url
  //   const frame1 = await page.frame({
  //     url: "https://ui.vision/demo/webtest/frames/frame_1.html",
  //   });
  //   await frame1.fill("input[name='mytext1']", "Prakash");

  // 3. using frameLocator
  await page
    .frameLocator("frame[src='frame_1.html']")
    .locator("input[name='mytext1']")
    .fill("Welcome World");

  await page.waitForTimeout(5000);
});

test("Inner frames", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  // parent frame
  const frame3 = await page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_3.html",
  });
  await frame3.locator("input[name='mytext3']").fill("John");

  // inner frame or childframes
  const childframe = await frame3.childFrames();
  await childframe[0].locator("//*[@id='i6']/div[3]/div").check();

  await page.waitForTimeout(5000);
});
