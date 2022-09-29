import Item from "./Item.js";

export default class TaxItem extends Item {
	constructor(category, description, price) {
		super(category, description, price);
	}

	getTax() {
		return 0;
	}

	calculateTax(tax) {
		return this.price * tax;
	}
}