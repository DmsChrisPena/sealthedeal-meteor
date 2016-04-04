import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Settings from '../components/settings.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if(Meteor.subscribe('users').ready()) {
	const user = Meteor.user();
	onData(null, {user});
  } else {
	onData(null, {user: {}});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Settings);
