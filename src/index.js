
import { Beer, Cigar, Water } from "./Categories.js";
import Order from "./Order.js";
import TaxItem from "./TaxItem.js";


const order = new Order();


const beer = new Beer('Beer', 'Aguinha boa', 100)
const cigar = new Cigar('Beer', 'Aguinha boa', 100)

const water = new Water('Water', 'Aguinha boa', 50)

order.addItem(beer);
order.addItem(water);
order.addItem(cigar);





//console.log(order.getTotal());
console.log(order.getTaxes());
//console.log(waterTax);
