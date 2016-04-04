import React from 'react';

class Banner extends React.Component {
	render() {
		const {title, backgroundImage} = this.props;
		return (
			<div id="banner" style={{backgroundImage: 'url(' + backgroundImage + ')'}}>
				<div className="banner-overlay">
					<h4 className="text-center">{title}</h4>
				</div>
			</div>
		);
	}
}

export default Banner