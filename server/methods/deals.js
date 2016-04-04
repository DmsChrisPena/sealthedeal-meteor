import {Deals} from '/lib/collections';
import {SealedDeals} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'deals.create'(deal) {

    	// Need to add some authentication here
    	Deals.insert(deal);
    }	
  });
  Meteor.methods({
  	'deals.edit'(deal, dealId) {
  		Deals.update(dealId, { $set: deal });
  	}
  });
  Meteor.methods({
  	'deals.delete'(dealId) {
  		Deals.remove(dealId);
  	}
  });
  Meteor.methods({
    'sealTheDeal'(dealId, userId) {
      SealedDeals.insert({dealId, userId});
    }
  })
}
