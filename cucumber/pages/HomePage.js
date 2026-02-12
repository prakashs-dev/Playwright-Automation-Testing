export default class HomePage {
  constructor(page) {
    this.page = page;
    this.username = "#username";
    this.password = "#password";
    this.loginBtn = "#login";
  }

  async LaunchURL() {
    await this.page.goto("https://adactinhotelapp.com/");
  }

  async LoginUser(username, password) {
    await this.page.locator(this.username).fill(username);
    await this.page.locator(this.password).fill(password);
    await this.page.locator(this.loginBtn).click();
  }
}
