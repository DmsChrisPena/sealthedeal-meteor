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
					<RaisedButton 
						type='submit'
						label="Edit Deal"
						style={{marginTop: 16}}
						backgroundColor="#f57c00"
						labelColor="white" 
						fullWidth={true}
						onClick={this.editDeal.bind(this)}
					/>
					<RaisedButton 
						type='submit'
						label="Delete Deal"
						style={{marginTop: 16}}
						backgroundColor="#d32f2f"
						labelColor="white" 
						fullWidth={true}
						onClick={this.deleteDeal.bind(this)}
					/>
				</div>
			);
		} else {
			controls = (
				<form onSubmit={this.sealTheDeal.bind(this)}>
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
			<div className="container">
				<DealItem deal={deal} />
				{controls}
			</div>	
		);
	}
	deleteDeal() {
		const {deleteDeal, deal} = this.props;
		deleteDeal(deal._id, deal.dealName);
	}
	editDeal() {
		const { deal } = this.props;

		FlowRouter.go(`/editDeal/${deal._id}`);
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
