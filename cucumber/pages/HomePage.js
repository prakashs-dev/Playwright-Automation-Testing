export default class HomePage {
  constructor(page) {
    this.page = page;
    this.username = "#username";
    this.password = "#password";
    this.loginBtn = "#login";
    this.errorMsg = "//b[contains(text(),'Invalid Login details')]";
  }

  async LaunchURL() {
    await this.page.goto("https://adactinhotelapp.com/");
  }

  async GetErrorMessage() {
    return await this.page.locator(this.errorMsg).isVisible();
  }

  async LoginUser(username, password) {
    await this.page.locator(this.username).fill(username);
    await this.page.locator(this.password).fill(password);
    await this.page.locator(this.loginBtn).click();
  }
}
