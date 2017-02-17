import React from 'react';


export default class errorMessage extends from React.Component {
	render(){
		const errorMessage = this.props.params;
		return (
			//TODO stylize and make look good.
			<h2>An error has occurred</h2>
			<p>{errorMessage}</p>

		)
	}



}