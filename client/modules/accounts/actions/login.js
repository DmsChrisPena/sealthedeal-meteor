import Validator from 'validator';

export default {
	login({Meteor, Store, FlowRouter}, email, password) {
		Meteor.loginWithPassword({username: email}, password, (er) => {
			if(er) {
				return Materialize.toast(er.reason, 4000);
			} else {
				FlowRouter.go('/dealsList');
			}
		});
	}
};