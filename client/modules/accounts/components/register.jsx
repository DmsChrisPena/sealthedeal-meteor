import React from 'react';
import RegisterStepOne from './dumbRegister/RegisterStepOne';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';

class Register extends React.Component {
	render() {
		const { step } = this.props;
		console.log(this.props.stepInfo);
		let register;
		if(step === 'userStep2') {
			register = <h2>User Step 2</h2>;
		} else if(step === 'vendorStep2') {
			register = <h2 onClick={this.changeStep.bind(this)}>Vendor Step 2</h2>;
		} else {
			register = (
				<div>
					<RegisterStepOne 
						allProps={this.props} 
						changeRole={this.changeRole.bind(this)} 
						changeStep={this.changeStep.bind(this)} 
					/>
					{this.props.stepInfo ? this.props.stepInfo.email : null} <br />
					{this.props.stepInfo ? this.props.stepInfo.password : null}
				</div>
			);
		}
		return (
			<div>
				{register}	
			</div>
		);
	}

	createUser(event) {
		// Check if even exists
		if(event && event.preventDefault) { 
			event.preventDefault();
		}
		const { createUser, role } = this.props;
		const profile = {
			role
		};

		createUser(email, password, confirmPassword, profile);
	}

	changeRole(event) {
		const { changeRole } = this.props;
		changeRole(event);
	}

	changeStep(event) {
		// Check if even exists
		if(event && event.preventDefault) { 
			event.preventDefault();
		}
		const el = $(event.target);
		const email = el.find('#email').val(),
			password = el.find('#password').val(),
			confirmPassword = el.find('#confirmPassword').val();

		const { changeStep } = this.props;
		const { step, role } = this.props;
		changeStep(step, role, {email, password, confirmPassword});
	}

}

export default Register;