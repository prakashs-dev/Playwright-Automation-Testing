exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginLink = "#login2";
    this.usernameInput = "//input[@id='loginusername']";
    this.passwordInput = "//input[@id='loginpassword']";
    this.loginbtn = "//button[normalize-space()='Log in']";
    this.logoutbtn = "//a[@id='logout2']";
  }

  async gotoLoginPage() {
    await this.page.goto("https://www.demoblaze.com/");
  }

  async login(username, password) {
    await this.page.locator(this.loginLink).click();
    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.loginbtn).click();
  }

  async logout() {
    await this.page.locator(this.logoutbtn).click();
  }
};
