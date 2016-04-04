import React from 'react';
import Banner from './dumbRegister/banner';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';

class Login extends React.Component {
	render() {
		return (
			<div>
				<Banner title="Seal The Deal" backgroundImage={'http://i.imgur.com/hmdceHn.png'}/>
				
				<div className="container">
					<div className="row" style={{marginTop: 12}}>
						<a className="col s12 text-center" href="/register">Create an Account</a>
					</div>
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
							style={{marginTop: 16}}
							backgroundColor="#3f51b5"
							labelColor="white" 
							fullWidth={true}
						/>
					</form>
				</div>
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