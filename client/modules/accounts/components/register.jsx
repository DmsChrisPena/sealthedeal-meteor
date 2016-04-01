import React from 'react';

class Register extends React.Component {
	render() {
		const {error} = this.props;
		const {otherError} = this.props;
		return (
			<form className="new-user" onSubmit={this.createUser.bind(this)}>
				<h2>Create User</h2>
				{error ? <p style={{color: 'red'}}>{error}</p> : null }
				{otherError ? <p style={{color: 'red'}}>{otherError}</p> : null }

				<input ref="username" type="text" placeholder="Enter username..." /><br/>
				<input ref="password" type="password" placeholder="Enter password" /><br/>
				<button type="submit">Create User</button>
			</form>
		);
	}
	createUser(event) {
		if(event && event.preventDefault) { 
			event.preventDefault();
		}
		const { createUser } = this.props;
		const {username, password} = this.refs;

		createUser(username.value, password.value);
	}
}

export default Register;