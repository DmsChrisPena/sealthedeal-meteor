export default {
	createUser({Meteor, Store, FlowRouter, Accounts}, username, password, confirmPassword, profile) {
		if(!username || !password) {
			return Store.dispatch({
				type: 'CREATE_USER_ERROR',
				error: 'Please enter a valid username and password'
			});
		}

		if(password !== confirmPassword) {
			return Store.dispatch({
				type: 'CREATE_USER_ERROR',
				error: 'Passwords do not match.'
			});
		}

		Store.dispatch({
			type: 'CLEAR_ERROR'
		});

		Accounts.createUser({username, password, profile}, (er) => {
			if(er) {
				return Store.dispatch({
					type: 'CREATE_USER_ERROR',
					error: er.reason
				});
			} else {
				Store.dispatch({
					type: 'CREATE_USER',
					success: 'Your user has been created.'
				});
				FlowRouter.go('/');
			}
		});
	},
	changeRole({Store}, event) {
		const role = event.target.checked;
		if(role) {
			return Store.dispatch({
				type: 'ROLE_VENDOR',
				role: 'Vendor'
			});
		} else {
			return Store.dispatch({
				type: 'ROLE_USER',
				role: 'User'
			});
		}
	},
	changeStep({Store}, step, role, stepInfo){
		console.log(role);
		if(step === 'step1' && role === "User") {
			return Store.dispatch({
				type: 'USER_STEP2',
				step: 'userStep2',
				stepInfo: stepInfo
			});
		}
		if(step === 'step1' && role === "Vendor") {
			return Store.dispatch({
				type: 'VENDOR_STEP2',
				step: 'vendorStep2',
				stepInfo: stepInfo
			});
		} else {
			return Store.dispatch({
				type: 'STEP1',
				step: 'step1'
			});
		}
	},
	clearErrors({Store}) {
		return Store.dispatch({
			type: 'CLEAR_ERROR'
		});
	}
};