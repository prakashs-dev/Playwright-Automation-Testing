exports.Carts = class Carts {
  constructor(page) {
    this.page = page;
    this.noOfProducts = '//*[@id="tbodyid"]/tr/td[2]';
    this.deleteProduct = '//*[@id="tbodyid"]/tr[2]/td[4]/a';
  }

  async checkProductInCart(productName) {
    const productInCart = await this.page.$$(this.noOfProducts);
    for (const product of productInCart) {
      if (productName === (await product.textContent())) {
        return true;
      }
    }
    return false;
  }
};
