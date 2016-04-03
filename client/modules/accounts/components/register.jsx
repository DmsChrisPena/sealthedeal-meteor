import React from 'react';
import RegisterStepOne from './dumbRegister/RegisterStepOne';
import RegisterUser from './dumbRegister/RegisterUser';
import RegisterVendor from './dumbRegister/RegisterVendor';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';

class Register extends React.Component {
	render() {
		// Get values from props
		const { 
			step, 
			error,
			role 
		} = this.props;
		console.log(this.props);
		// Depending on state change the UI
		let register;
		if(step === 'userStep2') {
			register = (
				<RegisterUser 
					allProps={this.props}
					previousStep={this.previousStep.bind(this)} 
					createUser={this.createUser.bind(this)}
					locationInfo={this.props.locationInfo}
					getGeolocation={this.getGeolocation.bind(this)}
				/>
			);

			<h2 onClick={this.previousStep.bind(this)}>User Step 2</h2>;
		} else if(step === 'vendorStep2' || step ==='vendorStep2Geolocated') {
			register = (
				<RegisterVendor
					allProps={this.props}
					previousStep={this.previousStep.bind(this)}
					createUser={this.createUser.bind(this)}
					businessLocation={this.props.businessLocation}
					geocodeVendor={this.props.geocodeVendor.bind(this)}
				/>
			);
		} else {
			register = (
				<div>
					<RegisterStepOne 
						allProps={this.props} 
						stepInfo={this.props.stepInfo}
						changeRole={this.changeRole.bind(this)} 
						nextStep={this.nextStep.bind(this)}
					/>
				</div>
			);
		}
		// Return UI View with errors if true
		return (
			<div>
				<h2 className="col s12">Create {role}</h2>
				<a href="/">Login</a>
				{error ? this.renderError(error) : null }
				{register}	
			</div>
		);
	}

	createUser(event) {
		// Check if event exists
		if(event && event.preventDefault) { 
			event.preventDefault();
		}
		// Grab values from event
		const el = $(event.target);


		const { createUser, role } = this.props;
		const { email, password } = this.props.stepInfo;

		// Depending on role define our profile info
		// and location info differently
		if(role === 'User') {
			const name = el.find('#name').val(),
				  sex = el.find('#sex').val(),
				  age = el.find('#age').val();
				  interests = el.find('#interests').val();

			// Rename locationInfo to location to match our schema
			const location = this.props.locationInfo;

			// Creating profile object for user
			const profile = {
				role,
				name,
				sex,
				age,
				interests,
				location
			};
			// Create our User
			createUser(email, password, profile);
		} else {
			const name = el.find('#name').val(),
				  businessName = el.find('#businessName').val(),
				  types = el.find('#types').val();

			// Rename businessLocation to location to match our schema
			const location = this.props.businessLocation;

			// Creating profile object for user
			const profile = {
				role,
				name,
				businessName,
				types,
				location
			};
			// Create our Vendor
			createUser(email, password, profile);
		}
	}
	changeRole(event) {
		const { changeRole } = this.props;
		changeRole(event);
	}

	nextStep(event) {
		// Check if even exists
		if(event && event.preventDefault) { 
			event.preventDefault();
		}
		// Grab values from event
		const el = $(event.target);
		const email = el.find('#email').val(),
			password = el.find('#password').val(),
			confirmPassword = el.find('#confirmPassword').val();
		
		// Get necessary values from props
		const { 
			changeStep, 
			validateRegister, 
			step, 
			role 
		} = this.props;

		// Basic valuation for the form fields
		if(validateRegister(email, password, confirmPassword)) {
			changeStep(step, role, {email, password, confirmPassword});
		}
	}
	getGeolocation() {
		const {
			getGeolocation
		} = this.props;

		getGeolocation();
	}
	previousStep() {
		const { 
			changeStep, 
			stepInfo, 
			step, 
			role 
		} = this.props;
		console.log(stepInfo);
		changeStep(step, role, stepInfo);
	}
	renderError(error) {
		return (
			<h5 style={{color: 'red'}}>{error}</h5>
		);
	}

}

export default Register;