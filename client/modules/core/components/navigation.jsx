import React from 'react';
import {Meteor} from 'meteor/meteor';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import FontIcon from 'material-ui/lib/font-icon';
class Navigation extends React.Component {
	constructor() {
		super();
		this.state = {
			role: "User"
		}
	}
	componentDidMount() {
	   	this.setState({role: Meteor.user().profile.role}); 
	}
	render() {
		const isUser = (this.state.role === "User");
		return (
			<Tabs style={{position: 'fixed', bottom: 0, width: '100%'}}>
				<Tab
				route="/dealsList"
				label={isUser ? "Deals List" : "Manage Deals"}
				onActive={this.handleRoute.bind(this)}
				/>
				<Tab
				route={isUser ? "/dealHistory" : "/addDeals"}
				label={isUser ? "Deal History" : "Add Deals"}
				onActive={this.handleRoute.bind(this)}
				/>
				<Tab
				route="/settings"
				label="Settings"
				onActive={this.handleRoute.bind(this)}
				/>
			</Tabs>
		);
	}
	handleRoute(tab) {
		FlowRouter.go(tab.props.route);
	}
}


export default Navigation;