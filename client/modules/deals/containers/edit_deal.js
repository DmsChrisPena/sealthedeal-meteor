import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import EditDeal from '../components/edit_deal.jsx';

export const composer = ({context, dealId}, onData) => {
  const {Meteor, Collections} = context();

  if(Meteor.subscribe('deal', dealId).ready()) {
  	const deal = Collections.Deals.findOne(dealId);
    const role = Meteor.user().profile.role;
    const {types} = Meteor.user().profile;
  	onData(null, {deal, role, types});
  } else {
    onData(null, {deal: {}});
  }
};

export const depsMapper = (context, actions) => ({
	editDeal: actions.manageDeals.editDeal,
	context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(EditDeal);
