import React from 'react';
import Meteor from 'meteor/meteor';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';

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
	        mapUrl: null
	    };
	}
	componentDidMount() {
		// Mount our Materialize Select
	    $(document).ready(function() {
	      $('select').material_select();
	    });

	    // Materialize needs special selector to add onChange event
	    $(ReactDOM.findDOMNode(this.refs.types)).on('change', this.handleInputChange.bind(this, 'types'));

	    // Once location is enter run function to geocode
	    // Get values for location for profile object
	    $("#geolocation").geocomplete().bind("geocode:result", (event, result) => {
	    	// Show button that links to location on map
	    	// That way the user can confirm the business location
	    	this.displayMapButton(result.url);
	    	this.props.geocodeVendor(result);

  		});

  		// Touch for Google places autocomplete doesn't work without
  		// adding needsclick class.
  		$(document).on({
  		    'DOMNodeInserted': function() {
  		        $('.pac-item, .pac-item span', this).addClass('needsclick');
  		    }
  		}, '.pac-container');
	}
	render() {
		// Pull out needed values
		const {
			step,
			role
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
		console.log(this.props.businessLocation);
		return (
			<form className="row" onSubmit={createUser}>
				
				{this.state.name ? 'Hello, ' + this.state.name : ''}
				{this.state.businessName ? this.state.businessName + '!, that place is great!' : ''}
				{typesList ?
					typesList.map((type)=>{
						return <p>{type}</p>;
					})
				: null}
				{this.state.mapUrl ? 				
					<a
					href={this.state.mapUrl}
					target="_blank">This location look correct?</a>
				 : null}

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

				<TextField 
					id="geolocation"
					floatingLabelText="Business Location"
					hintText="Enter Location..."
					placeholder=""
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

	displayMapButton(url) {
		this.setState({mapUrl: url});
	}
}

export default RegisterVendor;