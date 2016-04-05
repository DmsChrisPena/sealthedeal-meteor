import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import TimePicker from 'material-ui/lib/time-picker/time-picker';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import FontIcon from 'material-ui/lib/font-icon';
class EditDeal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dealName: props.deal.dealName,
			desc: props.deal.desc,
			dealPassword: props.deal.dealPassword,
			price: props.deal.price,
			timeLimit: new Date(props.deal.timeLimit),
			type: props.deal.type,
			points: props.deal.points
		};
	}
	render() {
		const {types, deal} = this.props;
		// Get our select fields from seal profile.types
		// Then give them only the types they selected on register
		let selectTypes;
		if(types) {
			selectTypes = types.map((type, i) => {
				return <MenuItem value={type} key={i} primaryText={type}/>;
			});
		}
		return (
			<div style={{marginBottom: 80}}>
				<h4 className="text-center">Edit Deals</h4>
				<form onSubmit={this.editDeal.bind(this)} className="container">
					<TextField
						ref="dealName"
						value={this.state.dealName}
						onChange={this.handleInputChange.bind(this, 'dealName')}
						hintText="Enter Deal Name..."
						floatingLabelText="Deal Name"
						fullWidth={true}
					/>
					<TextField
					  ref="desc"
					  value={this.state.desc}
					  onChange={this.handleInputChange.bind(this, 'desc')}
					  hintText="Enter a Description..."
					  floatingLabelText="Description"
					  multiLine={true}
					  rows={2}
					  rowsMax={4}
					  fullWidth={true}
					/>
					<TextField
					  ref="dealPassword"
					  value={this.state.dealPassword}
					  onChange={this.handleInputChange.bind(this, 'dealPassword')}
					  hintText="Enter a Password..."
					  floatingLabelText="Password"
					  fullWidth={true}
					/>
					<TextField
					  ref="price"
					  value={this.state.price}
					  onChange={this.handleInputChange.bind(this, 'price')}
					  hintText="Enter a Price of Item..."
					  floatingLabelText="Price of Item"
					  fullWidth={true}
					/>
					<TimePicker
					  ref="timeLimit"
					  format="ampm"
					  hintText="Select Expire Time"
					  floatingLabelText="Expire Time"
					  value={this.state.timeLimit}
					  onChange={this.handleTimeChange.bind(this)}
					  fullWidth={true}
					/>
					<SelectField 
						value={this.state.points} 
						onChange={this.handleChangePoints.bind(this)} 
						fullWidth={true}
						hintText="Select Points"
					  	floatingLabelText="Select Points">
						<MenuItem value={1} primaryText={1}/>
						<MenuItem value={2} primaryText={2}/>
						<MenuItem value={3} primaryText={3}/>
						<MenuItem value={4} primaryText={4}/>
						<MenuItem value={5} primaryText={5}/>
					</SelectField>
					<SelectField 
						value={this.state.type} 
						onChange={this.handleChangeType.bind(this)} 
						fullWidth={true}
						hintText="Select Deal Type"
					  	floatingLabelText="Select Deal Type">
						{selectTypes}
					</SelectField>
					<RaisedButton 
						type="submit"
						label="Save Deal" 
						style={{marginTop: 12}}
						fullWidth={true}
						backgroundColor="#4caf50"
						labelColor="white" 
					/>
				</form>
			</div>
		);
	}
	handleRoute(tab) {
		FlowRouter.go(tab.props.route);
	}
	// Changes the values on state
	// Generic enough to put on any input
	handleInputChange(name, e) {
		var change = {};
		change[name] = e.target.value;
		this.setState(change);
	}
	handleTimeChange(err, time) {
		this.setState({timeLimit: time});
	};
	handleChangePoints(event, index, value) {
		this.setState({points: value})
	};
	handleChangeType(event, index, value) {
		this.setState({type: value})
	};

	editDeal(event) {
		// Check if even exists
		if(event && event.preventDefault) { 
			event.preventDefault();
		}

		const { editDeal, dealId } = this.props;

		editDeal(this.state, dealId);
	}
}

export default EditDeal;
