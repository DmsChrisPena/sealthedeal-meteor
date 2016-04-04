import {Deals} from '/lib/collections';
import {SealedDeals} from '/lib/collections';
import { Meteor } from 'meteor/meteor';

export default function() {
	Meteor.publish('deals', (sealId, userId)=> {
		if(sealId) {
			return Deals.find({sealId});
		} else {
			const sealed = SealedDeals.find({userId}).fetch().map((seal) => {
				return seal.dealId;
			});
			let activeDeals = Deals.find({_id: { $nin: sealed}}).fetch().map((active) => { return active._id});
			return Deals.find({_id: { $in: activeDeals}});
		}
	});	
	Meteor.publish('deal.history', (sealId, userId)=> {
		if(sealId) {
			return Deals.find({sealId});
		} else {
			const sealed = SealedDeals.find({userId}).fetch().map((seal) => {
				return seal.dealId;
			});
			console.log(sealed);
			let activeDeals = Deals.find({_id: { $in: sealed}}).fetch().map((active) => { return active._id});
			console.log(activeDeals);
			return Deals.find({_id: { $in: activeDeals}});
		}
	});	
	Meteor.publish('deal', (dealId) => {
		const selector = {_id: dealId};
		return Deals.find(selector);
	});
}