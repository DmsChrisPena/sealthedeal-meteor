import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import _ from 'lodash';
class Settings extends React.Component {
	render() {
		const {user} = this.props;
		console.log(this.props.user);
		let avatarUrl;
		let userLoaded = false;
		if(!_.isEmpty(user.profile)) {
			userLoaded = true
			if(user.profile.sex === "Male") {
				avatarUrl = "http://i.imgur.com/EoCorsE.png";
			} else if(user.profile.sex === "Female") {
				avatarUrl = "http://i.imgur.com/gbM0QaJ.png";
			} else {
				avatarUrl = "http://i.imgur.com/7RDie4N.png";
			}
		}
		return (
			<div className="container">
			  <h5 className="text-center">Email: {this.props.user.username}</h5>
			  <h5 className="text-center">Name: {userLoaded ? user.profile.name : null}</h5>
			  <h5 className="text-center">Role: {userLoaded ? user.profile.role : null}</h5>
			  <div className="row">
			  	<img src={avatarUrl} className="col offset-s3 s6 img-responsive"/>
			  </div>

			  
			  <RaisedButton 
			  	type="submit"
			  	label="Logout" 
			  	onClick={this.logout.bind(this)}
			  	style={{marginTop: 12}}
			  	backgroundColor="#f44336"
			  	labelColor="white" 
			  	fullWidth={true}
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
