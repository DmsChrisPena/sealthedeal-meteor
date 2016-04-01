export default {
	createUser({Meteor, Store, FlowRouter, Accounts}, username, password) {
		if(!username || !password) {
			return Store.dispatch({
				type: "CREATE_USER_ERROR",
				error: "Please enter a valid username and password"
			});
		}

		Store.dispatch({
			type: 'CLEAR_ERROR'
		});

		Accounts.createUser({username, password}, (er) => {
			if(er) {
				return Store.dispatch({
					type: 'CREATE_USER_ERROR',
					error: er.reason
				});
			} else {
				FlowRouter.go('/');
			}
		});
	},
	clearErrors({Store}) {
		return Store.dispatch({
			type: 'CLEAR_ERROR'
		});
	}
};