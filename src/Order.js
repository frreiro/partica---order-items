import { Water } from "./Categories.js";

export default class Order {
	constructor() {
		this.items = [];
	}

	addItem(item) {
		this.items.push(item);
	}

	getTotal() {
		const sumPrices = this.items.reduce((sum, item) => sum + item.price, 0);
		return sumPrices
	}

	getTaxes() {


		const sumTaxes = this.items.reduce((sum, item) => {
			if (!(item instanceof Water)) {
				sum += item.calculateTax(item.getTax());
			}
			return sum
		}, 0)

		return sumTaxes;
	}

}