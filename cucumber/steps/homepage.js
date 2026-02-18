import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import HomePage from "../pages/HomePage.js";
let home;

Given("the user launches the application", async function () {
  home = new HomePage(this.page);
  await home.LaunchURL();
});

When(
  "user enter valid username and password and click login button",
  async function () {
    await home.LoginUser("advijauser", "advijauser");
  }
);

When(
  "user enter {string} and {string} and click login button",
  async function (username, password) {
    await home.LoginUser(username, password);
  }
);

Then("user should navigates to the search hotel page", async function () {
  await expect(this.page).toHaveURL(
    "https://adactinhotelapp.com/SearchHotel.php"
  );
});

Then("user should get an error message", async function () {
  const msg = await home.GetErrorMessage();
  expect(msg).toBeTruthy();
});
