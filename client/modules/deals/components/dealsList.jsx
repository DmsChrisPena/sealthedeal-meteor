import React from 'react';
import DealItem from './deal_item';
import _ from 'lodash';
class DealsList extends React.Component {
	render() {
		const { deals, role } = this.props;
		let dealsComp;
		if(!_.isEmpty(deals)) {
			dealsComp = deals.map((deal, i) => { 
				return (
					<DealItem key={i} deal={deal} />
				);
			});
		} else {
			dealsComp = <h4 className="deal-title text-center" style={{marginTop: 16}}>You have no deals.</h4>
		}
		return (
			<div style={{marginBottom: 60}}>
				{dealsComp}
			</div>
		);
	}

}

export default DealsList;