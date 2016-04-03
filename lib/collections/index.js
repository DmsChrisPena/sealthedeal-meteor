import {Mongo} from 'meteor/mongo';
import SeedDeal from './seed/seedDeals'

Deals = new Mongo.Collection("deals");

// Seed a deal
if(!Deals.findOne()) {
	Deals.insert(SeedDeal);
}

