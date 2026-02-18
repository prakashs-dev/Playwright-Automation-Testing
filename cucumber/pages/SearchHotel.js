export default class SearchHotel {
  constructor(page) {
    this.page = page;
    this.location = "#location";
    this.hotels = "#hotels";
    this.roomType = "#room_type";
    this.noRooms = "#room_nos";
    this.inDate = "#datepick_in";
    this.outDate = "#datepick_out";
    this.adultRoom = "#adult_room";
    this.searchBtn = "//input[@id='Submit']";
    this.hotelList = "//td[@align='right']//table/descendant::tr";
  }

  async searchingHotel() {
    await this.page.locator(this.location).selectOption("London");
    await this.page.locator(this.hotels).selectOption("Hotel Hervey");
    await this.page.locator(this.roomType).selectOption("Standard");
    await this.page.locator(this.noRooms).selectOption("5");
    await this.clearAndFill(this.page.locator(this.inDate), "20/02/2026");
    await this.clearAndFill(this.page.locator(this.outDate), "25/02/2026");
    await this.page.locator(this.adultRoom).selectOption("3");
    await this.page.locator(this.searchBtn).click();
  }

  async clearAndFill(locator, value) {
    await locator.fill(value);
  }

  async checkHotelList() {
    await this.page.getByRole("cell", { name: "Hotel Hervey", exact: true }).waitFor();
    return await this.page.getByRole("cell", { name: "Hotel Hervey", exact: true }).count();
  }
}
