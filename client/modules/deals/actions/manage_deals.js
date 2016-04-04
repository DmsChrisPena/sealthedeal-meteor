export default {
	editDeal({Store, Meteor}, deal, dealId) {
		console.log(deal);
		Meteor.call('deals.edit', deal, dealId, (er) => {
			if(er) {
				Materialize.toast(er.reason, 4000);
				return FlowRouter.go('/dealsList');
			}
			return FlowRouter.go(`/deal/${dealId}`);
		});
	},
	deleteDeal({Meteor}, dealId, dealName) {
		Meteor.call('deals.delete', dealId, (er) => {
			if(er) {
				Materialize.toast(er.reason, 4000);
				return FlowRouter.go('/dealsList');
			}
			return FlowRouter.go('/dealsList');
		})
	},
	sealTheDeal({Meteor, FlowRouter}, dealId, userId) {
		Meteor.call('sealTheDeal', dealId, userId);
		FlowRouter.go(`/redeem/${dealId}`);
	}
}
