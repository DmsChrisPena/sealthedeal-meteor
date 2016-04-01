import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';

class RegisterStepOne extends React.Component {
	render() {

		// Pull out of the need props
		const {
			error, 
			role, 
			step
		} = this.props.allProps;

		// Get Methods from smart component
		const {
			changeRole,
			changeStep
		} = this.props;

		return (
			<form className="row" onSubmit={changeStep}>
				<h2 className="col s12">Create {role}</h2>
				{error ? <p style={{color: 'red'}}>{error}</p> : null }
				{step}
				<TextField
					id="email"
					hintText="Enter Email..."
					floatingLabelText="Email"
					fullWidth={true}
				/>
				<TextField
					id="password"
					type="password"
					hintText="Enter Password..."
					floatingLabelText="Password"
					fullWidth={true}
				/>
				<TextField
					id="confirmPassword"
					type="password"
					hintText="Enter Confirm Password..."
					floatingLabelText="Confirm Password"
					fullWidth={true}
				/>

				<div className="switch" style={{margin: 12}}>
				  <label>
				    Are you a User
				    <input ref="role" type="checkbox" onChange={changeRole} />
				    <span className="lever"></span>
				    or Vendor?
				  </label>
				</div>

				<RaisedButton 
					type='submit'
					label="Step 2" 
					backgroundColor="white"
					labelColor="green" 
				/>
			</form>
		);
	}
}

export default RegisterStepOne;