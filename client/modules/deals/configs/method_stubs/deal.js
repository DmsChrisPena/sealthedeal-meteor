import {check} from 'meteor/check';

export default function ({Meteor, Collections}) {
  Meteor.methods({
    'deals.create'(deal) {
        Collections.Deals.insert(deal);
        console.log(`${dealName} was created`);
    }
  });
}
