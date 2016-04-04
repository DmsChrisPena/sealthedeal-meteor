import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

class Settings extends React.Component {
	render() {
		const {user} = this.props;
		console.log(this.props.user);
		return (
			<div>
			  <h4>{this.props.user.username}</h4>
			  <h4>{user.profile ? user.profile.name : null}</h4>
			  <h4>{user.profile ? user.profile.role : null}</h4>
			  <RaisedButton 
			  	type="submit"
			  	label="Logout" 
			  	onClick={this.logout.bind(this)}
			  	style={{margin: 12}}
			  	backgroundColor="white"
			  	labelColor="red" 
			  />
			</div>
		);
	}
	logout() {
		Meteor.logout((er) => {
			if(er) {
				return Materialize.toast(er.reason, 4000);
			} else {
				FlowRouter.go('/');
			}
		})
	}
}

export default Settings;
