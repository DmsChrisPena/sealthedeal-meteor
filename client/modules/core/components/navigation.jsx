import React from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import FontIcon from 'material-ui/lib/font-icon';
class Navigation extends React.Component {
	render() {
		return (
			<Tabs style={{position: 'fixed', bottom: 0, width: '100%'}}>
				<Tab
				route="/dealsList"
				label="Manage Deals"
				onActive={this.handleRoute.bind(this)}
				/>
				<Tab
				route="/addDeals"
				label="Add Deal"
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