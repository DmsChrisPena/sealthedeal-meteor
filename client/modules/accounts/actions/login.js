import Validator from 'validator';

export default {
	login({Meteor, Store}, email, password) {
		Meteor.loginWithPassword({username: email}, password, (er) => {
			if(er) {
				return Materialize.toast(er.reason, 4000);
			} else {
				return Materialize.toast("You are now logged in", 4000);
			}
		});
	}
};