import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import TimePicker from 'material-ui/lib/time-picker/time-picker';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';

class AddDeals extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timeLimit: null,
			type: null,
			points: 1
		};
	}
	render() {
		const {types} = this.props;

		// Get our select fields from seal profile.types
		// Then give them only the types they selected on register
		let selectTypes;
		if(types) {
			selectTypes = types.map((type, i) => {
				return <MenuItem value={type} key={i} primaryText={type}/>;
			});
		}
		return (
			<div style={{marginBottom: 100}}>
				<h4>Add Deals</h4>
				<form onSubmit={this.createDeal.bind(this)}>
					<TextField
						id="dealName"
						ref="dealName"
						hintText="Enter Deal Name..."
						floatingLabelText="Deal Name"
						fullWidth={true}
					/>
					<TextField
					  ref="desc"
					  hintText="Enter a Description..."
					  floatingLabelText="Description"
					  multiLine={true}
					  rows={2}
					  rowsMax={4}
					  fullWidth={true}
					/>
					<TextField
					  ref="dealPassword"
					  hintText="Enter a Password..."
					  floatingLabelText="Password"
					  fullWidth={true}
					/>
					<TextField
					  ref="price"
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
						label="Create Deal" 
						backgroundColor="white"
						labelColor="green"
						fullWidth={true}
					/>
				</form>

			</div>
		);
	}
	handleRoute(tab) {
		FlowRouter.go(tab.props.route);
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

	createDeal(event) {
		// Check if even exists
		if(event && event.preventDefault) { 
			event.preventDefault();
		}

		const { 
			dealName,		
			price, 
			desc, 
			dealPassword  
		} = this.refs;
		const { 
			timeLimit,
			type, 
			points
		} = this.state;

		this.props.createDeal(
			dealName.getValue(), 
			price.getValue(), 
			desc.getValue(), 
			dealPassword.getValue(),
			timeLimit, 
			type, 
			points
		);
	}
}

export default AddDeals;
