import { test, expect } from "@playwright/test";

// https://playwright.dev/docs/test-reporters -- check multiple type of reporters

/*Allure Reports steps
    1.Install allure package 
        npm install -D allure-playwright
    
    2.Install Allure commend line
        npm install -g allure-commandline --save-dev
    
    3.Add report in playwright.config.js 
        reporter : ['allure-playwright',{allure_report: 'allure_result'}];
        
    4.Run the test
        npx playwright test reporters.spec.js

    5.Generate Allure report
        allure generate allure-results --clean

    6.Open all allure report
        allure open allure_result(filename)
*/

test("Test 1", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await expect(page).toHaveTitle("Automation Testing Practice");
});

test("Test 2", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await expect(page).toHaveTitle("STORE");
});

test("Test 3", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await expect(page).toHaveTitle("OrangeHRM");
});
