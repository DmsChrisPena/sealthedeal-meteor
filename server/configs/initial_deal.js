import seedDeal from './fixtures/deal.js';
import {Deals} from '/lib/collections';

// Seed a deal
if(!Deals.findOne()) {
	Deals.insert(seedDeal);
}	
