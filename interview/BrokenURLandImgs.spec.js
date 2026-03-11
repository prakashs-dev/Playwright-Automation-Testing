import { test, expect } from "@playwright/test";

test("Find all Broken URL", async ({ page }) => {
  await page.goto("https://adactinhotelapp.com/");

  const linkLoc = await page.locator("//a").all();

  for (const link of linkLoc) {
    const href = await link.getAttribute("href");
    // console.log("HREF ", href);
    
    if (href.startsWith("https") || href.startsWith("http")) {
      const reponse = await page.request.get(href);
      expect.soft(reponse.status(), "failed to load " + href).toBe(200);
    } else if (href.includes("mailto:")) {
      console.log(`${href} → Mail link (cannot test HTTP)`);
    } else {
      const reponse = await page.request.get(
        "https://adactinhotelapp.com/" + href
      );
      expect.soft(reponse.status(), "failed to load " + href).toBe(200);
    }
  }
});

test.skip("find broken images ", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/broken_images");
  await page.waitForLoadState("domcontentloaded");

  const images = await page.locator("//img").all();

  for (const img of images) {
    const imgSrc = await img.getAttribute("src");
    expect.soft(imgSrc?.length).toBeGreaterThan(1);

    if (imgSrc?.length > 1) {
      const reponse = await page.request.get(
        "https://the-internet.herokuapp.com/" + imgSrc
      );
      expect.soft(reponse.status(), "failed to load" + imgSrc).toBe(200);
    }
  }
});

test.skip("Check No of Frames", async ({ page, request }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  const frames = page.frames();
  console.log("frames : ", frames.length);

  const frame = await page.locator("//frame").all();

  for (let fr of frame) {
    const src = await fr.getAttribute("src");
    expect.soft(src?.length).toBeGreaterThan(1);
    if (src?.length > 1) {
      const response = await request.get(
        "https://ui.vision/demo/webtest/frames/" + src
      );
      expect.soft(response.status(), "failed frame " + src).toBe(200);
    }
  }
});
