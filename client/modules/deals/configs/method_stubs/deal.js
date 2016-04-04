import {check} from 'meteor/check';

export default function ({Meteor, Collections}) {
  Meteor.methods({
    'deals.create'(deal) {
        const {
          id,
          sealId, 
          dealName, 
          price,
          desc,
          dealPassword,
          timeLimit,
          type, 
          points,
          latitude, 
          longitude, 
          formatted_address
        } = deal;
        Collections.Deals.insert(deal);
        console.log(`${dealName} was created`);
    }
  });
}
