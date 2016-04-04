import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import DealsList from '../components/dealsList.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  if(Meteor.subscribe('users').ready()) {
    const { _id } = Meteor.user();
    const { role } = Meteor.user().profile;
    if(role === 'Vendor') {
      if(Meteor.subscribe('deals', _id).ready()) {
          const deals = Collections.Deals.find().fetch();
          onData(null, {deals, role});
      }
    } else {
      if(Meteor.subscribe('deals', null, _id).ready()) {
          const deals = Collections.Deals.find().fetch();
          onData(null, {deals, role});
      }
    }
  } else {
  	 onData(null, {});
  }

 
  
};

export const depsMapper = (context, actions) => ({
	context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(DealsList);
