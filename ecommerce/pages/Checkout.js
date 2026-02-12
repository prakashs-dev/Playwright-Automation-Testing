class Checkout {
  constructor(page) {
    this.page = page;
    this.firsName = "#billing_first_name";
    this.lastName = "#billing_last_name";
    this.email = "#billing_email";
    this.phone = "#billing_phone";
    this.address = "#billing_address_1";
    this.city = "#billing_city";
    this.pinCode = "#billing_postcode";
    this.cod = "#payment_method_cod";
  }

  async billingDetails({ ...billAddress }) {
    await this.page.fill(this.firsName, billAddress.firstname);
    await this.page.fill(this.lastName, billAddress.lastname);
    await this.page.fill(this.email, billAddress.email);
    await this.page.fill(this.phone, billAddress.phone);
    await this.page.fill(this.address, billAddress.address);
    await this.page.fill(this.city, billAddress.town);
    await this.page.fill(this.pinCode, billAddress.pinCode);
    await this.page.locator(this.cod).check()
  }
  async withOutChange() {
    await this.page.locator(this.cod).check();
  }
};

module.exports = Checkout;