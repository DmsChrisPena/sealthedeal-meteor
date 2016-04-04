import React from 'react';

class HistoryItem extends React.Component {
	render() {
		const {deal} = this.props;
		let dealImgUrl;
		switch(deal.interest || deal.type) {
			case "Food":
				dealImgUrl = "http://i.imgur.com/5LsIPko.png";
				break;
			case "Bars":
				dealImgUrl = "http://i.imgur.com/SGTknko.png"
				break;
			case "Shopping":
				dealImgUrl = "http://i.imgur.com/BrpIm8X.png"
				break;
			case "Activities":
				dealImgUrl = "http://i.imgur.com/XHa5Y6Y.png"
				break;
			default:
				dealImgUrl = "http://i.imgur.com/XHa5Y6Y.png"
		}
		return (
			<div id="deal-item">
				<div className="row" style={{marginBottom: 8}}>
					<div className="col s8">
						<p className="deal-title">{deal.dealName}</p>
						<p className="deal-tag">Description: {deal.desc}</p>
						<p className="deal-tag">Seal Points: {deal.points}</p>
						<p className="deal-tag">Saved: ${deal.price}</p>
						<p className="deal-tag">Type: {deal.type}</p>
					</div>
					<div className="col s4">
						<img className="img-responsive center-block deal-img" src={dealImgUrl} />
					</div>
				</div>
			</div>
		);
	}
}

export default HistoryItem;
