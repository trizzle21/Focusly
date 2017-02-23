import React from 'react';


export default class errorMessage extends React.Component {
	render(){
		const errorMessage = this.props.params;
		return (
			//TODO stylize and make look good.
			<div>
				<h2>An error has occurred</h2>
				<p>{errorMessage}</p>
			</div>
		);
	}



}