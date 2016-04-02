import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';

//import DatePicker from 'material-ui/lib/date-picker/date-picker';
// RIP Datepicker is not working. Logged issue waiting for response.
// Will use Materialize datepicker for now.
// <DatePicker 
// 	id="age"
// 	hintText="Enter Birthdate..." 
// 	floatingLabelText="Birthdate"
// 	value={this.state.age}
// 	onChange={this.handleInputChange.bind(this, 'age')} 
// 	fullWidth={true}
// />

class RegisterUser extends React.Component {
	// Initialize values if nextStep was invoked
	constructor(props) {
		super(props);
		const { stepInfo } = props;
		this.state = {
	        name: stepInfo ? stepInfo.name : null,
	        sex: stepInfo ? stepInfo.sex : 'Male',
	        age: stepInfo ? stepInfo.age : null,  
	        interests: stepInfo ? stepInfo.interests : null,  
	    };
	}
	componentDidMount() {
		// Mount our Materialize Select
	    $(document).ready(function() {
	      $('select').material_select();
	    });  
	    // Mount our Materialize Datepicker
	    // Material UI is having serious problems
	    $('.datepicker').pickadate({
	      selectMonths: true, 
	      selectYears: 200 
	    });
	    // Materialize needs special selector to add onChange event
	    $(ReactDOM.findDOMNode(this.refs.sex)).on('change', this.handleInputChange.bind(this, 'sex'));
	    $(ReactDOM.findDOMNode(this.refs.interests)).on('change', this.handleInputChange.bind(this, 'interests'));
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

		// Get interests to display
		// Materialize makes it hard to grab values.
		// So I'm forced to use jQuery till better solution.
		let interestList = $('#interests').val();

		return (
			<form className="row" onSubmit={createUser}>
				{this.state.name ? 'Hello, ' + this.state.name : ''}
				{this.state.sex === 'Male' ?
					<img src='http://i.imgur.com/M0J4erM.png' />
					:
					<img src='http://i.imgur.com/UxsiqUB.png' />
				}
				{interestList ?
					interestList.map((interest)=>{
						return <p>{interest}</p>;
					})
				: null}

				<TextField
					id="name"
					value={this.state.name}
					onChange={this.handleInputChange.bind(this, 'name')}
					hintText="Enter Full Name..."
					floatingLabelText="Full Name"
					fullWidth={true}
				/>
				<div>
				  <select className="icons" id="sex" ref="sex" value={this.state.sex}>
				    <option value="" disabled defaultValue>Choose your Gender</option>
				    <option value="Male" data-icon="http://i.imgur.com/M0J4erM.png" className="left circle">Guy</option>
				    <option value="Female" data-icon="http://i.imgur.com/UxsiqUB.png" className="left circle">Girl</option>
				  </select>
				  <label>Choose Your Gender</label>
				</div>

				<div>
					<label htmlFor="age">Birthdate</label>
					<input 
						id="age"
						type="date" 
						className="datepicker" 
						value={this.state.age}
						onChange={this.handleInputChange.bind(this, 'age')} 
					/>
				</div>

				<div>
					<label>Select your Interests</label>
					<select id="interests" ref="interests" multiple>
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

export default RegisterUser;