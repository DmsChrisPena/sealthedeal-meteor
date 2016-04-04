import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import DealHistory from '../components/deal_history.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if(Meteor.subscribe('users').ready()) {
    const { _id } = Meteor.user();
    const { role } = Meteor.user().profile;
	  if(Meteor.subscribe('deal.history', null, _id).ready()) {
	  	const deals = Collections.Deals.find().fetch();
	    const role = role;
	    const userId = _id;
	  	onData(null, {deals, role, userId});
	  } else {
	    onData(null, {deals: {}});
	  }
	}

};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(DealHistory);
