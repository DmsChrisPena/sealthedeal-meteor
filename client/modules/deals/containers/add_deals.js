import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import AddDeals from '../components/add_deals.jsx';

export const composer = ({context}, onData) => {
	const {Meteor, Collections, Store} = context();
	
	function handleProps() {
		if(Meteor.subscribe('users').ready()) {
			const {types} = Meteor.user().profile;
			onData(null, {types});
		} else {
			onData(null, {});
		}
	}

	// subscribe to state updates
	// and keep handle to unsubscribe
	const unsubscribe = Store.subscribe(() => {
		handleProps();
	});

	// get initial state
	handleProps();

	// function to unsubscribe from Store
	// and clearing error
	const cleanup = () => {
		unsubscribe();
	};

	// running cleanup when unmounting the component
	return cleanup;
};

export const depsMapper = (context, actions) => ({
	createDeal: actions.addDeals.createDeal,
	context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(AddDeals);
