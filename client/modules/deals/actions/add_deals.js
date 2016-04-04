export default {
	// Need to add form validation
	createDeal({Collections, Store, Meteor}, dealName, price, desc, dealPassword, timeLimit, type, points) {
		const sealId = Meteor.userId();

		// Get basic location information from our seal
		const { latitude, longitude, formatted_address } = Meteor.user().profile.location;

		// Create uuid for latency compensation
		const _id = Meteor.uuid();

		const deal = {
			_id,
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
		};
		Meteor.call('deals.create', deal, (er) => {
			if(er) {
				// Need to add Store.dispatch for better error catching
				return Materialize.toast(er.reason, 4000);
			}
		});
		FlowRouter.go(`/deal/${_id}`);
	}
}
