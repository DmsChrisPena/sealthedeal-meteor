import React from 'react';
import Meteor from 'meteor/meteor';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import CircularProgress from 'material-ui/lib/circular-progress';

class RegisterVendor extends React.Component {
	// Initialize values if nextStep was invoked
	constructor(props) {
		super(props);
		const { stepInfo } = props;
		this.state = {
	        name: stepInfo ? stepInfo.name : null,
	        businessName: stepInfo ? stepInfo.businessName : null,
	        location: stepInfo ? stepInfo.location : null,  
	        types: stepInfo ? stepInfo.types : null,  
	    };
	}
	componentDidMount() {
		// Mount our Materialize Select
	    $(document).ready(function() {
	      $('select').material_select();
	    });
	    if(Meteor.isCordova) {
	    	document.addEventListener("deviceready", onDeviceReady, false);
	    	function onDeviceReady() {
				this.props.getGeolocation();
	    	};
	    } else {
	    	// Geolocate user for mapping information
	    	// As well as location information
	    	this.props.getGeolocation();
	    }


	    // Materialize needs special selector to add onChange event
	    $(ReactDOM.findDOMNode(this.refs.types)).on('change', this.handleInputChange.bind(this, 'types'));
	}
	render() {
		// Pull out needed values
		const {
			step,
			role,
			locationInfo
		} = this.props.allProps;

		// Get Methods from smart component
		const {
			previousStep,
			createUser
		} = this.props;

		// Get types to display
		// Materialize makes it hard to grab values.
		// So I'm forced to use jQuery till better solution.
		let typesList = $('#types').val();

		return (
			<form className="row" onSubmit={createUser}>
				
				{this.state.name ? 'Hello, ' + this.state.name : ''}
				{this.state.businessName ? this.state.businessName + '!, that place is great!' : ''}
				{typesList ?
					typesList.map((type)=>{
						return <p>{type}</p>;
					})
				: null}
				{locationInfo !== undefined ? 'Hows\'s the weather in ' + locationInfo.city + ', ' + locationInfo.state + '?' : <CircularProgress size={0.5} /> }

				<TextField
					id="name"
					value={this.state.name}
					onChange={this.handleInputChange.bind(this, 'name')}
					hintText="Enter Full Name..."
					floatingLabelText="Full Name"
					fullWidth={true}
				/>

				<TextField
					id="businessName"
					value={this.state.businessName}
					onChange={this.handleInputChange.bind(this, 'businessName')}
					hintText="Enter Business Name..."
					floatingLabelText="Business Name"
					fullWidth={true}
				/>
				<div>
					<label>Select your Types</label>
						<select id="types" ref="types" multiple>
						<option value="" disabled defaultValue>Choose your option</option>
						<option value="Food" defaultValue>Food</option>
						<option value="Bars" >Bars</option>
						<option value="Shopping">Shopping</option>
						<option value="Activities">Activities</option>
					</select>
				</div>
				<RaisedButton 
					onClick={previousStep}
					label="Back" 
					style={{margin: 12}}
					backgroundColor="white"
					labelColor="red" 
				/>
				<RaisedButton 
					type='submit'
					label="Create User" 
					style={{margin: 12}}
					backgroundColor="white"
					labelColor="green" 
				/>
			</form>
		);
	}

	// Changes the values on state
	// Generic enough to put on any input
	handleInputChange(name, e) {
		var change = {};
		change[name] = e.target.value;
		this.setState(change);
	}
}

export default RegisterVendor;