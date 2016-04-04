import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Redeem from '../components/redeem.jsx';

export const composer = ({context, dealId}, onData) => {
  const {Meteor, Collections} = context();
  if(Meteor.subscribe('deal', dealId).ready()) {
  	const deal = Collections.Deals.findOne(dealId);
  	onData(null, {deal});
  } else {
    onData(null, {deal: {}});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Redeem);
