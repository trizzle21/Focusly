import React from 'react';


export default class errorMessage extends React.Component {
	render(){
		const error = this.props.params;
		return (
			//TODO stylize and make look good.
			<div>
				<h2>An error has occurred</h2>
				<p>{error.errorMsg}</p>
			</div>
		);
	}



}