import {Mongo} from 'meteor/mongo';

export const Deals = new Mongo.Collection("deals");
export const SealedDeals = new Mongo.Collection("sealedDeals");

