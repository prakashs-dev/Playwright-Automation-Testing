import { expect } from "@playwright/test";
import { Given, When, Then } from "@cucumber/cucumber";
import HomePage from "../pages/HomePage.js";
import SearchHotel from "../pages/SearchHotel.js";
let home;
let searchHotel;

Given("user is on the hotel booking page", async function () {
  home = new HomePage(this.page);
  await home.LaunchURL();
  searchHotel = new SearchHotel(this.page);
});

When("user enter valid details for hotel search", async function () {
  await home.LoginUser("advijauser", "advijauser");
  await this.page.waitForTimeout(1000);
  await searchHotel.searchingHotel();
});

Then("user should see the list of available hotels", async function () {
  const hotelCount = await searchHotel.checkHotelList();
  expect(hotelCount).toBeGreaterThanOrEqual(1);
});
