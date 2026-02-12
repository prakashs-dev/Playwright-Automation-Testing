class Product {
  constructor(page) {
    this.page = page;
    this.noOfProduct = "//a[@class='woocommerce-LoopProduct-link']/h3";
    this.addToButton =
      "//a[@class='woocommerce-LoopProduct-link']/following-sibling::a";
  }

  async checkProductInCart(productName) {
    const products = this.page.locator(this.noOfProduct);
    const addButtons = this.page.locator(this.addToButton);

    const count = await products.count();

    for (let i = 0; i < count; i++) {
      const text = await products.nth(i).textContent();
      if (text && text.trim() === productName) {
        await addButtons.nth(i).click();
        console.log("Product Name:", text.trim());
      }
    }
  }
}

module.exports = Product;
