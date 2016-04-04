import React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import Moment from 'moment';
import RaisedButton from 'material-ui/lib/raised-button';

class DealItem extends React.Component {
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
				<div className="row" style={{marginBottom: 4}}>
					<div className="col s3">
						<img className="img-responsive deal-img" src={dealImgUrl} />
					</div>
					<div className="col s9">
						<p className="deal-title">{deal.dealName}</p>
						
						<p className="deal-tag">Points: {deal.points}</p>
						<p className="deal-tag">Expires {Moment(deal.timeLimit).fromNow()}</p>
					</div>
				</div>
				<div className="row">
					<div className="col s12">
						<p className="deal-tag">Description: {deal.desc}</p>
						<p className="deal-tag">{deal.formatted_address}</p>
						<a href={`/deal/${deal._id}`}>More Details</a>
					</div>
				</div>
			</div>
		);
	}
}

export default DealItem;