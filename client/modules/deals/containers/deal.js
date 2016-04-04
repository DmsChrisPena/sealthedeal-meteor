import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Deal from '../components/deal.jsx';

export const composer = ({context, dealId}, onData) => {
  const {Meteor, Collections, Store} = context();

  if(Meteor.subscribe('deal', dealId).ready()) {
  	const deal = Collections.Deals.findOne(dealId);
    const role = Meteor.user().profile.role;
    const userId = Meteor.user()._id;
  	onData(null, {deal, role, userId});
  } else {
    onData(null, {deal: {}});
  }

};

export const depsMapper = (context, actions) => ({
	editDeal: actions.manageDeals.editDeal,
  deleteDeal: actions.manageDeals.deleteDeal,
  sealTheDeal: actions.manageDeals.sealTheDeal,
	context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Deal);
