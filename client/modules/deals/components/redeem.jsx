import React from 'react';

class Redeem extends React.Component {
	constructor() {
		super();
		this.state = {
			countDown: 10
		}
	}
	componentWillMount() {
		
		var counter = 10;
		var interval = setInterval(()=> {
		    counter--;
		    this.setState({countDown: counter})
		    if (counter == 0) {
		        console.log('counter cleared');
		        clearInterval(interval);
		    }
		}, 1000);

	    setTimeout(()=>{
	    	FlowRouter.go('/dealsList');
	    }, 10000);  
	}
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
			<div className="container">
				<div className="row">
					<div className="col s12">
						<h4 className="text-center">Enjoy your {deal.dealName}</h4>
					</div>
					<div className="col s12">
						<img className="center-block" src={dealImgUrl} />
					</div>
					<div className="col s12">
						<h4 className="text-center">This Deal Expires in {this.state.countDown}</h4>
						<h5 className="text-center">Show this to your Seal fast!</h5>
					</div>
				</div>

				
			</div>
		);
	}
}

export default Redeem;
