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
				/>
			);

			<h2 onClick={this.previousStep.bind(this)}>User Step 2</h2>;
		} else if(step === 'vendorStep2' || step ==='vendorStep2Geolocated') {
			register = (
				<RegisterVendor
					allProps={this.props}
					previousStep={this.previousStep.bind(this)}
					createUser={this.createUser.bind(this)}
					getGeolocation={this.getGeolocation.bind(this)}
					locationInfo={this.props.locationInfo}
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
		const name = el.find('#name').val(),
			sex = el.find('#sex').val(),
			age = el.find('#age').val();
			interests = el.find('#interests').val();

		const { createUser, role } = this.props;
		const { email, password } = this.props.stepInfo;

		// Creating profile object for user
		const profile = {
			role,
			name,
			sex,
			age,
			interests
		};
		console.log(profile);
		createUser(email, password, profile);
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