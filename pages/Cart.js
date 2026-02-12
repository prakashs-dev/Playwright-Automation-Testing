exports.Carts = class Carts {
  constructor(page) {
    this.page = page;
    this.noOfProducts = '//*[@id="tbodyid"]/tr/td[2]';
    this.deleteProduct = '//*[@id="tbodyid"]/tr[2]/td[4]/a';
    this.carturl = "#cartur";
    this.placedOrderBtn = "//button[normalize-space()='Place Order']";
  }

  async checkProductInCart(productName) {
    const productInCart = await this.page.$$(this.noOfProducts);
    for (const product of productInCart) {
      if (productName === (await product.textContent())) {
        await page.locator("//button[normalize-space()='Place Order']").click();
      }
    }
  }

  async gotoCart() {
    await this.page.locator(this.carturl).click();
  }
};
