import React from 'react';
import HistoryItem from './history_item';
import _ from 'lodash';
class DealHistory extends React.Component {
	render() {
		const {deals} = this.props;

		let historyItem;
		let dealPrices;
		if(deals.length > 0) {
			historyItem = deals.map((deal, i) => { return <HistoryItem key={i} deal={deal} /> });
			dealPrices = deals.map((deal) => {
				return parseFloat(deal.price);
			});
			dealPrices = _.reduce(dealPrices, (sum, n) => {
				return (sum + n).toFixed(2);
			});
		} else {
			historyItem = <div className="row"><p className="col s12 text-center">You have sealed a deal yet!</p></div>
		}
		console.log(deals);
		return (
			<div>
				{historyItem}
				<div id="deal-item" style={{padding: 4}}>
					<div className="row" style={{marginBottom: 4}}>
						{dealPrices ? <p className="col s12 text-center deal-tag">Saved: ${dealPrices}</p> : null }
					</div>
				</div>
			</div>
		);
	}
}


export default DealHistory;
