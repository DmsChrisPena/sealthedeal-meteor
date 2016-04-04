import React from 'react';
import DealItem from './deal_item';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';

class Deal extends React.Component {
	render() {
		const {deal, editing, role} = this.props;
		console.log(this.props);
		let controls;
		if(role === "Vendor") {
			controls = (
				<div>
					<a href={`/editDeal/${deal._id}`}>Edit Deal</a><br />
					<a onClick={this.deleteDeal.bind(this)}>Delete Deal</a><br />
				</div>
			);
		} else {
			controls = (
				<form onSubmit={this.sealTheDeal.bind(this)} className="container">
					<TextField
						id="dealPassword"
						ref="dealPassword"
						type="password"
						hintText="Enter Password..."
						floatingLabelText="Password"
						fullWidth={true}
					/>
					<RaisedButton 
						type='submit'
						label="Seal The Deal"
						style={{marginTop: 16}}
						backgroundColor="#e91e63"
						labelColor="white" 
						fullWidth={true}
					/>
				</form>
			);
		}
		return (
			<div>
				<h4>{role}</h4>
				<DealItem deal={deal} />
				{controls}
			</div>	
		);
	}
	deleteDeal() {
		const {deleteDeal, deal} = this.props;
		deleteDeal(deal._id, deal.dealName);
	}
	sealTheDeal(event) {
		// Check if even exists
		if(event && event.preventDefault) { 
			event.preventDefault();
		}
		const {sealTheDeal, deal, userId} = this.props;
		const {dealPassword} = this.refs;
		if(dealPassword.getValue() !== deal.dealPassword) {
			return Materialize.toast("Deal Password Incorrect!", 3000);
		}
		sealTheDeal(deal._id, userId);
	}
}

export default Deal;
