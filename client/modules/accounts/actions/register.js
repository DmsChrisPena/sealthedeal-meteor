import Validator from 'validator';

export default {
	createUser({Meteor, Store, FlowRouter, Accounts}, username, password, profile) {
		Accounts.createUser({username, password, profile}, (er) => {
			if(er) {
				return Store.dispatch({
					type: 'CREATE_USER_ERROR',
					error: er.reason
				});
			} else {
				Store.dispatch({
					type: 'CLEAR_ERROR'
				});
				Store.dispatch({
					type: 'STEP1',
					stepInfo: {}
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
	validateRegister({Store}, email, password, confirmPassword) {
		if(!Validator.isEmail(email)) {
			Store.dispatch({
				type: 'CREATE_USER_ERROR',
				error: 'Please enter a valid email'
			});
			return false;
		}
		if(password.length < 8) {
			Store.dispatch({
				type: 'CREATE_USER_ERROR',
				error: 'Your password must be 8 characters or more.'
			});
			return false;
		}
		if(password !== confirmPassword) {
			Store.dispatch({
				type: 'CREATE_USER_ERROR',
				error: 'Your passwords do not match.'
			});
			return false;
		} else {
			Store.dispatch({
				type: 'CLEAR_ERROR'
			});
			return true;
		}
	},
	validateUser({Store}, name, sex, age, interests) {

	},
	changeStep({Store}, step, role, stepInfo){
		console.log(role);
		if((step === 'step1' || step === 'previousStep') && role === "User") {
			return Store.dispatch({
				type: 'USER_STEP2',
				step: 'userStep2',
				stepInfo: stepInfo
			});
		}
		if((step === 'step1' || step === 'previousStep') && role === "Vendor") {
			return Store.dispatch({
				type: 'VENDOR_STEP2',
				step: 'vendorStep2',
				stepInfo: stepInfo
			});
		}
			
		return Store.dispatch({
			type: 'PREVIOUS_STEP',
			step: 'previousStep',
			stepInfo: stepInfo
		});
	},
	getGeolocation({Store}) {
		navigator.geolocation.getCurrentPosition(
			(position) => { 
				console.log(position.coords.latitude);
				const { latitude, longitude } = position.coords;
				HTTP.call('GET', 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' +  longitude + '&key=AIzaSyAHXaqI9SxhJZDLF_-YQk7lyumu3l8vzJI', (er, response) => {
					if(er) {
						Store.dispatch({
							type: 'CREATE_USER_ERROR',
							error: 'Could not find location.'
						});
					} else {
						const { formatted_address } = response.data.results[0]
						const _regex = /^([^,]+)\s*,\s*([^,]+)\s*,\s*(\w{2})\s*(\d{5})\s*,\s*(.*)$/
						const _addressArray = formatted_address.match(_regex).splice(1);

						let [ address, city, state, zip, country ] = _addressArray;
						let locationInfo = {
							address,
							city,
							state,
							zip,
							country
						};				
						Store.dispatch({
							type: 'VENDOR_STEP2_GEOLOCATED',
							step: 'vendorStep2',
							stepInfo: Store.getState().step.stepInfo,
							locationInfo
						});

					}
				})
			}
		);

	},
	clearErrors({Store}) {
		return Store.dispatch({
			type: 'CLEAR_ERROR'
		});
	}
};