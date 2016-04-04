import React from 'react';
import DealItem from './deal_item';

class DealsList extends React.Component {
	render() {
		const { deals, role } = this.props;
		let dealsComp;
		if(deals) {
			dealsComp = deals.map((deal, i) => { 
				return (
					<DealItem key={i} deal={deal} />
				);
			});
		}
		return (
			<div style={{marginBottom: 60}}>
				{dealsComp}
			</div>
		);
	}

}

export default DealsList;