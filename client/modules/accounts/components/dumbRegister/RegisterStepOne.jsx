import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';

class RegisterStepOne extends React.Component {
	// Initialize values if nextStep was invoked
	constructor(props) {
		super(props);
		const { stepInfo } = props;
		this.state = {
	        email: stepInfo ? stepInfo.email : null,
	        password: stepInfo ? stepInfo.password : null,
	        confirmPassword: stepInfo ? stepInfo.confirmPassword : null  
	    };
	}
	render() {
		// Pull out needed values
		const {
			step,
			role
		} = this.props.allProps;

		// Get Methods from smart component
		const {
			changeRole,
			nextStep,
			validateRegister
		} = this.props;

		return (
			<form className="row" onSubmit={nextStep}>
				<TextField
					id="email"
					value={this.state.email}
					onChange={this.handleInputChange.bind(this, 'email')}
					hintText="Enter Email..."
					floatingLabelText="Email"
					fullWidth={true}
				/>
				<TextField
					id="password"
					value={this.state.password}
					onChange={this.handleInputChange.bind(this, 'password')}
					type="password"
					hintText="Enter Password..."
					floatingLabelText="Password"
					fullWidth={true}
				/>
				<TextField
					id="confirmPassword"
					value={this.state.confirmPassword}
					onChange={this.handleInputChange.bind(this, 'confirmPassword')}
					type="password"
					hintText="Enter Confirm Password..."
					floatingLabelText="Confirm Password"
					fullWidth={true}
				/>

				<div className="switch" style={{margin: 16, paddingLeft: 50}}>
				  <label>
				    Are you a User
				    <input ref="role" type="checkbox" onChange={changeRole} checked={role === 'Vendor' ? true : false} />
				    <span className="lever"></span>
				    or Vendor?
				  </label>
				</div>

				<RaisedButton 
					type='submit'
					label="Next" 
					style={{marginTop: 16}}
					backgroundColor="#009688"
					labelColor="white" 
					fullWidth={true}
				/>
			</form>
		);
	}
	// Changes the values on state
	// Generic enough to put on any input
	handleInputChange(name, e) {
		var change = {};
		change[name] = e.target.value;
		this.setState(change);
	}
}

export default RegisterStepOne;