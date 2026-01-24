exports.Login = class Login {
  constructor(page) {
    this.page = page;
    this.username = "#username";
    this.password = "#password";
    this.loginButton = "Login";
  }
  async Login(username, password) {
    await this.page.locator(this.username).fill(username);
    await this.page.locator(this.password).fill(password);
    await this.page.getByRole("button", { name: this.loginButton }).click();
  }

  async Logout() {
    await this.page.getByText("My Account").click();
    await this.page.getByText("Sign out").click();
  }
};
