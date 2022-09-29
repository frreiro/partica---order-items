import Item from "./Item.js";
import TaxItem from "./TaxItem.js";

export class Beer extends TaxItem {
	constructor(category, description, price) {
		super(category, description, price);
	}

	getTax() {
		return 0.20;
	}

}

export class Cigar extends TaxItem {
	constructor(category, description, price) {
		super(category, description, price);
	}

	getTax() {
		return 0.25;
	}

}

export class Eletronics extends TaxItem {
	constructor(category, description, price) {
		super(category, description, price);
	}

	getTax() {
		return 0.30;
	}

}

export class Water extends Item {
	constructor(category, description, price) {
		super(category, description, price);
	}

}