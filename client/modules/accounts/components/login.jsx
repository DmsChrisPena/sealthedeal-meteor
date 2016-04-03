import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';

class Login extends React.Component {
	render() {
		return (
			<div>
				<h4 className="col s12">Seal The Deal - Login</h4>
				<a href="/register">Register</a>
				<form onSubmit={this.login.bind(this)}>
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
					<RaisedButton 
						type='submit'
						label="Login" 
						style={{margin: 12}}
						backgroundColor="white"
						labelColor="green" 
					/>
				</form>
			</div>
		);
	}

	login(event) {
		// Check if event exists
		if(event && event.preventDefault) { 
			event.preventDefault();
		}
		// Grab values from event
		const el = $(event.target);
		const email = el.find('#email').val(),
			  password = el.find('#password').val();

		const { login } = this.props;

		login(email, password);
	}

}

export default Login;